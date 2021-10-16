import { Environment, Network, RecordSource, Store } from 'relay-runtime'

const {
  VITE_API_ENDPOINT,
  VITE_SUBSCRIPTION_ENDPOINT,
} = import.meta.env

const network = Network.create(async (params, variables) => {
  const jwt = localStorage.getItem('jwt')

  return fetch(VITE_API_ENDPOINT, {
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
