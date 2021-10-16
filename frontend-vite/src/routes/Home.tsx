import { useLazyLoadQuery, graphql } from 'react-relay'
import { Link, Outlet } from 'react-router-dom'
import { HomeQuery } from './__generated__/HomeQuery.graphql'

const Home = () => {
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
      <div className='content'>
        <Outlet />
      </div>
    </>
  )
}
export default Home
