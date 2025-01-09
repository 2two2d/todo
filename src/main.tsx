/* eslint-disable import/order */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'

import type { SnackbarProviderProps } from 'notistack'
import { SnackbarProvider } from 'notistack'

import Router from '@settings/router'

import './index.css'

import { Store } from '@settings/store'
import AlertSuccess from '@shared/ui/components/alert/success'

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
    <BrowserRouter>
      <SnackbarProvider { ...snackbarProps }>
        <Provider store={ Store }>
          <Router />
        </Provider>
      </SnackbarProvider>
    </BrowserRouter>
  </StrictMode>,
)
