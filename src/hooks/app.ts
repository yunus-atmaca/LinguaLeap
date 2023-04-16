import { useEffect, useState } from 'react'

import {
  SelectedLanguage,
  NativeLanguage,
  ProficiencyLevel,
  SESSION,
} from '@src/types/app'
import { AppConstants, Storage } from '@src/utils'
import { useAppDispatch } from '@src/types/store'
import { setUserState } from '@src/store/controllers/user'

export const useSession = () => {
  const dispatch = useAppDispatch()

  const [session, setSession] = useState<SESSION>('LOADING')

  useEffect(() => {
    loadInitialApp()
  }, [])

  const loadInitialApp = async () => {
    let dpl: ProficiencyLevel = 'Undefined'
    let dnl: NativeLanguage = 'English'
    let dsl: SelectedLanguage = 'English'

    const pl = await Storage.load(AppConstants.K_PROFICIENCY_LEVEL)
    const nl = await Storage.load(AppConstants.K_NATIVE_LANGUAGE)
    const sl = await Storage.load(AppConstants.K_SELECTED_LANGUAGE)

    dispatch(
      setUserState({
        proficiency: dpl || pl,
        nLanguage: dnl || nl,
        sLanguage: dsl || sl,
      }),
    )

    setTimeout(() => {
      setSession('LOADED')
    }, 500)
  }

  return session
}
