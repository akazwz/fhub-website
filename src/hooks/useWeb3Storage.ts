import { CIDString, Web3Storage } from 'web3.storage'
import { useState } from 'react'

export function useWeb3Storage (token: string, files?: File[]) {
  const [progress, setProgress] = useState<number>(0)

  function makeStorageClient () {
    return new Web3Storage({ token: token })
  }

  async function storeFiles () {
    if (!files) return ''
    const client = makeStorageClient()
    return await client.put(files)
  }

  async function storeFilesWithProgress () {
    if (!files) return ''

    const onRootCidReady = (cid: CIDString) => {
      console.log('root cid:' + cid)
    }
    const totalSize = files.map(f => f.size).reduce((a, b) => a + b, 0)
    let uploaded = 0

    const onStoredChunk = (size: number) => {
      console.log('on stored chunk:' + size)
      uploaded += size
      const pct = uploaded / totalSize
      const percent = Math.min(pct * 100, 100).toFixed(2)
      console.log('percent:' + percent)
      setProgress(Number(percent))
    }

    const client = makeStorageClient()
    return await client.put(files, { onRootCidReady, onStoredChunk, })
  }

  return {
    client: makeStorageClient,
    storeFiles,
    storeFilesWithProgress,
    progress,
  }
}
