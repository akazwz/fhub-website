import useSWR from 'swr'

export default function useUser (uuid: string) {
  const userFetcher = (uuid: string) =>
    fetch(`/api/user/${uuid}`).then(res => res.json())

  const { data, mutate, error } = useSWR(uuid, userFetcher)
  console.log('use login data')
  console.log(data)

  const loading = !data && !error

  return {
    user: data,
    loading,
    mutate,
  }
}