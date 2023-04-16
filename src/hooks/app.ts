import { useEffect, useState } from 'react'

import {
  SelectedLanguage,
  NativeLanguage,
  ProficiencyLevel,
  SESSION,
} from '@src/types/app'
import { AppConstants, Storage } from '@src/utils'
import { useAppDispatch } from '@src/types/store'

export const useSession = () => {
  const dispatch = useAppDispatch()

  const [session, setSession] = useState<SESSION>('LOADING')

  useEffect(() => {
    loadInitialApp()
  }, [])

  const loadInitialApp = async () => {
    const pl: ProficiencyLevel = await Storage.load(
      AppConstants.K_PROFICIENCY_LEVEL,
    )
    const nl: NativeLanguage = await Storage.load(
      AppConstants.K_NATIVE_LANGUAGE,
    )
    const sl: SelectedLanguage = await Storage.load(
      AppConstants.K_SELECTED_LANGUAGE,
    )

    if (pl) {
    } else {
    }
  }

  return session
}
