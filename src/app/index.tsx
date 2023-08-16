import { Routes, Route } from 'react-router-dom';

import { baseLayout } from 'app/layout';
import { NotFoundPage } from 'pages/not-found';
import { routes } from 'shared/config';
import { withHocs } from './hocs';
import './index.css';

const App = () => {
  return (
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
      </Routes>
    </div>
  );
};

export default withHocs(App);
