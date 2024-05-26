import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FluentUIContext from "./utility/context/FluentUIContext.tsx"
import DirectionProvider from "./utility/context/DirectionContext"
import { BrowserRouter as Router } from 'react-router-dom';
import { Permission } from './configs/permissions.ts';
import { AbilityContext } from './utility/context/AbilityContext.tsx';
import { Provider } from 'react-redux';
import { store } from './Store';
import FallbackLoading from './views/FallbackLoading.tsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './I18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Suspense fallback={<FallbackLoading />}>
          <AbilityContext.Provider value={new Permission()}>
            <I18nextProvider i18n={i18n}>
              <FluentUIContext>
                <DirectionProvider>
                    <App />
                    <ToastContainer />
                </DirectionProvider>
              </FluentUIContext>
            </I18nextProvider>
          </AbilityContext.Provider>
        </Suspense>
      </Provider>
    </Router>
  </React.StrictMode>,
)
