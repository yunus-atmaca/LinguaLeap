import Storage from 'react-native-storage'
import AsyncStorage from '@react-native-community/async-storage'

const init = (): Storage => {
  return new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null, //never expire
  })
}

export const save = async (key: string, data: any) => {
  const storage: Storage = init()

  await storage.save({
    key: key,
    data: data,
    expires: null, //never expire
  })
}

export const load = (key: string): Promise<any> => {
  const storage: Storage = init()

  return new Promise(async resolve => {
    let res
    try {
      res = await storage.load({ key: key })
    } catch (error) {}

    resolve(res)
  })
}
