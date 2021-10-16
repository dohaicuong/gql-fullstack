import { Button } from '@mui/material'
import { useSnackbar } from 'notistack'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  const { enqueueSnackbar } = useSnackbar()

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
