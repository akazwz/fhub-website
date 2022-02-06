import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../src/hooks/useAuth'
import { DashBoardLayout } from '../src/components/dashboard/layout'

const Dashboard = () => {
  const { isAuth } = useAuth()
  const router = useRouter()

  /* auth first */
  useEffect(() => {
    if (!isAuth) {
      router.push('/login?next=dashboard', '/login?next=dashboard', { locale: router.locale, }).then()
    }
  })

  return (
    <DashBoardLayout>
      Dashboard
    </DashBoardLayout>
  )
}

export default Dashboard