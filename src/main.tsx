/* eslint-disable import/order */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'

import type { SnackbarProviderProps } from 'notistack'
import { SnackbarProvider } from 'notistack'

import Router from '@settings/router'

import './index.css'

import { Persistor, Store } from '@settings/store'
import AlertSuccess from '@shared/ui/components/alert/success'
import { PersistGate } from 'redux-persist/integration/react'

const snackbarProps: SnackbarProviderProps = {
  autoHideDuration: 2000,
  anchorOrigin: {
    vertical: 'top' as const,
    horizontal: 'right' as const
  },
  Components: {
    success: AlertSuccess
  }
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="todo">
      <SnackbarProvider { ...snackbarProps }>
        <Provider store={ Store }>
          <PersistGate loading={ null } persistor={ Persistor }>
            <Router />
          </PersistGate>
        </Provider>
      </SnackbarProvider>
    </BrowserRouter>
  </StrictMode>,
)
