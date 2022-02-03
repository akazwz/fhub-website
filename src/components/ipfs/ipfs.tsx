import { useState, useEffect } from 'react'
import { CID, create, IPFS } from 'ipfs-core'
import { node } from 'prop-types'

const IpfsComponent = () => {
  const [id, setId] = useState<string | null>(null)
  const [ipfs, setIpfs] = useState<IPFS | null>(null)
  const [version, setVersion] = useState<string | null>(null)
  const [isOnline, setIsOnline] = useState(false)
  const [cid, setCid] = useState<CID | null>(null)

  useEffect(() => {
    const init = async () => {
      if (ipfs) return

      const node = await create()

      const nodeId = await node.id()
      const nodeVersion = await node.version()
      const nodeIsOnline = node.isOnline()

      setIpfs(node)
      setId(nodeId.id)
      setVersion(nodeVersion.version)
      setIsOnline(nodeIsOnline)
    }
    init().then()

  }, [ipfs])

  useEffect(() => {
    const addCid = async () => {
      if (!ipfs) return
      const { cid } = await ipfs.add('Hello world', {cidVersion: 1})
      console.log(cid)
      setCid(cid)
    }
    addCid().then()
  }, [ipfs])

  if (!ipfs) {
    return <h4>Connecting to IPFS...</h4>
  }

  return (
    <div>
      <h4 data-test="id">ID: {id}</h4>
      <h4 data-test="version">Version: {version}</h4>
      <h4 data-test="status">Status: {isOnline ? 'Online' : 'Offline'}</h4>
      <h4 data-test="cid">CID: {}</h4>
    </div>
  )
}

export default IpfsComponent