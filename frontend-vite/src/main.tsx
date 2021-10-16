import { createRoot } from 'react-dom'

import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { BrowserRouter as Router } from 'react-router-dom'

import RouteProvider from '@/routes/RouteProvider'
import ThemeProvider from '@/theme/ThemeProvider'
import RelayProvider from './relay/RelayProvider'

const rootElement = document.getElementById('root')
if(!rootElement) throw new Error('Root element not found. Unable to render the App')

createRoot(rootElement).render(
  <ErrorBoundary FallbackComponent={<>Something went wrong</> as any}>
    <Suspense fallback='Loading...'>
      <Router>
        <RelayProvider>
          <ThemeProvider>
            <RouteProvider />
          </ThemeProvider>
        </RelayProvider>
      </Router>
    </Suspense>
  </ErrorBoundary>
)
