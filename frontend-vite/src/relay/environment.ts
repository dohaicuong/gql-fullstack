import { Environment, Network, RecordSource, Store } from 'relay-runtime'

const REACT_APP_API_ENDPOINT = 'http://localhost:4000/graphql'
// const REACT_APP_SUBSCRIPTION_ENDPOINT = 'ws://localhost:4000/graphql'

const network = Network.create(async (params, variables) => {
  const jwt = localStorage.getItem('jwt')

  return fetch(REACT_APP_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(jwt ? { Authorization: `Bearer ${jwt}` } : {}),
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  })
  .then(res => res.json())
})

const store = new Store(new RecordSource())

export default new Environment({ network, store })
