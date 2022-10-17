import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import './App.css';
import { AuthGuard } from './guards';
import { PrivateRoutes, PublicRoutes } from './models';
import store from './redux/store';
import { RoutesWithNotFound } from './utilities';

function App() {
  const Login = lazy(() => import('@/pages/Login/Login'));
  const Private = lazy(() => import('@/pages/private/Private'));

  return (
    <div className="App">
      <Suspense fallback={<>Lazy loading.....</>}>
        <Provider store={store}>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route
                path="/"
                element={<Navigate to={PrivateRoutes.PRIVATE} />}
              />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard />}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Private />}
                ></Route>
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
