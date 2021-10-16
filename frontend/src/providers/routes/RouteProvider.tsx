import { lazy } from 'react'

import { useRoutes } from 'react-router-dom'

const Home = lazy(() => import('@/pages/Home'))
const A = lazy(() => import('@/pages/A'))
const B = lazy(() => import('@/pages/B'))

const RouteProvider = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
      children: [
        { path: 'a', element: <A /> },
        { path: 'b', element: <B /> }
      ]
    },
  ])

  return element
}

export default RouteProvider
