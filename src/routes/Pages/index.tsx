import delay from 'delay.js'

import timelimit from 'timelimit'

import React, {
  useState,
  useEffect,
  memo,
} from 'react'

import { useParams } from 'react-router-dom'

import Team from 'model/team'
import Tournament from 'model/Tournament'
import Stage from 'model/Stage'

import usePopup from 'store/usePopup'

import currentSeasonByTournament from '../currentSeasonByTournament'

import getPage from './getPage'
import getPotsFromBert from './getPotsFromBert'
import getWcPots from './getWcPots'
import prefetchImages from './prefetchImages'

const initialState = {
  Page: null,
  pots: null,
  season: currentSeasonByTournament('cl', 'gs'),
}

interface Match {
  tournament: Tournament,
  stage: Stage,
  season: string,
}

interface Props {
  tournament: Tournament,
  stage: Stage,
  season: number,
  drawId: string,
  onRefreshDrawId: () => void,
  onSeasonChange: (tournament: Tournament, stage: Stage, season?: number) => void,
}

interface State {
  Page: React.ComponentType<any> | null,
  pots: Team[][] | null,
  // tournament: Tournament,
  // stage: Stage,
  season: number, // for error handling (so that we know the previous season)
}

const Pages = ({
  drawId,
  tournament,
  stage,
  season,
  onRefreshDrawId,
  onSeasonChange,
}: Props) => {
  const params = useParams<Match>() as Match
  const [, setPopup] = usePopup()

  const [{
    Page,
    pots,
  }, setState] = useState<State>(initialState)

  const fetchData = async () => {
    setPopup({
      waiting: true,
    })

    try {
      const potsPromise = tournament === 'wc'
        ? getWcPots(2018) // TODO
        : getPotsFromBert(tournament, stage, season)

      const newPage = await getPage(tournament, stage)

      const newPots = await potsPromise

      // @ts-ignore
      await timelimit(prefetchImages(newPots), 5000, {
        rejectOnTimeout: false,
      })

      onRefreshDrawId()

      setState({
        Page: newPage,
        pots: newPots,
        // tournament,
        // stage,
        season,
      })

      setPopup({
        waiting: false,
        error: null,
      })
    } catch (err) {
      console.error(err)
      setPopup({
        waiting: false,
        error: 'Could not fetch data',
      })

      await delay(1000)
      const {
        tournament: newTournament,
        stage: newStage,
      } = params

      const newSeason = pots && season !== currentSeasonByTournament(newTournament, newStage)
        ? season
        : undefined
      onSeasonChange(newTournament, newStage, newSeason)
      setPopup({
        error: null,
      })
    }
  }

  useEffect(() => {
    fetchData()
  }, [season, stage, tournament])

  return pots && Page && (
    <Page
      key={drawId}
      tournament={params.tournament}
      stage={params.stage}
      season={season}
      pots={pots}
    />
  )
}

export default memo(Pages)
