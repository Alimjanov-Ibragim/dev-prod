import { Provider as ReduxProvider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { baseLayout } from 'app/layout';
import { LoginPage } from 'pages/login';
import { NotFoundPage } from 'pages/not-found';
import { routes } from 'shared/config';
import { withHocs } from './hocs';
import { persistedStore, appStore } from './hocs/appStore';

import './index.css';

const App = () => {
  return (
    <ReduxProvider store={appStore}>
      <PersistGate loading={null} persistor={persistedStore}>
        <div className='app'>
          <Routes
          // fallbackElement={}
          // exceptionElement={<GlobalErrorPage />}
          >
            <Route element={baseLayout}>
              {routes.map((route, index) =>
                route.sub ? (
                  route.sub.map((subroute, subindex) => (
                    <Route
                      key={subindex}
                      path={subroute.to}
                      Component={subroute.component}
                    ></Route>
                  ))
                ) : (
                  <Route
                    key={index}
                    path={route.to}
                    Component={route.component}
                  ></Route>
                )
              )}
              <Route path={'*'} element={<NotFoundPage />} />
            </Route>
            <Route path={'/login'} element={<LoginPage />} />
          </Routes>
        </div>
      </PersistGate>
    </ReduxProvider>
  );
};

export default withHocs(App);
