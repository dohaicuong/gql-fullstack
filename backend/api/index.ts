import { server } from './server'

server.listen(4000).then((url) => {
  console.log(`
    🚀 Playground ready at ${url}/graphiql  
    🚀 Explorer ready at https://studio.apollographql.com/sandbox/explorer?endpoint=${url}/graphql
    
    🚀 Server ready at ${url}/graphql
  `)
  // 🚀 Subscription ready at ${url.replace('http', 'ws')}/graphql
})

process.on('SIGTERM', () => process.exit())
