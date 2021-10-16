import { lazy } from 'react'

import { useRoutes } from 'react-router-dom'

const Home = lazy(() => import('./Home'))
const A = lazy(() => import('./A'))
const B = lazy(() => import('./B'))

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
