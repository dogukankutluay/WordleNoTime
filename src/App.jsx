import { Switch, withRouter } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import routes from './routes';
function App() {
  return (
    <Switch>
      {routes.map((route, index) => {
        return (
          <ProtectedRoute
            key={index}
            component={() => <route.component />}
            exact={route.exact}
            path={route.path}
          />
        );
      })}
    </Switch>
  );
}
const AppWithRouter = withRouter(App);
export default AppWithRouter;
