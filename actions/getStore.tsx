import type { Store } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}`

const getStore = async (): Promise<Store> => {
  const res = await fetch(URL)
  return res.json()
}
export default getStore
