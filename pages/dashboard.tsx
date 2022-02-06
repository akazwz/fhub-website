import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../src/hooks/useAuth'
import { DashBoardLayout } from '../src/components/dashboard/layout'

const Dashboard = () => {
  const { isReady, isAuth } = useAuth()
  const router = useRouter()

  /* auth first */
  useEffect(() => {
    /*useAuth not ready*/
    if (!isReady) return
    /* not login redirect to login page */
    if (!isAuth) {
      router.push('/login?next=dashboard', '/login?next=dashboard', { locale: router.locale, }).then()
    }
  }, [isAuth, isReady, router])

  if (!isReady) {
    return (
      <>
        loading...
      </>
    )
  }

  return (
    <DashBoardLayout>
      Dashboard
    </DashBoardLayout>
  )
}

export default Dashboard