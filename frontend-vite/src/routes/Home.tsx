import { Button } from '@mui/material'
import { useSnackbar } from 'notistack'
import { useLazyLoadQuery, graphql } from 'react-relay'
import { Link, Outlet } from 'react-router-dom'
import { HomeQuery } from './__generated__/HomeQuery.graphql'

const Home = () => {
  const { enqueueSnackbar } = useSnackbar()

  const data = useLazyLoadQuery<HomeQuery>(
    graphql`
      query HomeQuery {
        accounts {
          id
        }
      }
    `,
    {}
  )
  console.log(data)

  return (
    <>
      <h1>Welcome to the app!</h1>
      <nav>
        <Link to='/'>Home</Link> |{" "}
        <Link to='a'>A</Link> |{" "}
        <Link to='b'>B</Link>
      </nav>
      <Button onClick={() => enqueueSnackbar('hello')}>
        Click
      </Button>
      <div className='content'>
        <Outlet />
      </div>
    </>
  )
}
export default Home
