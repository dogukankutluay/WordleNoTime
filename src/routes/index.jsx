import { Home } from '../pages';
const routes = [
  {
    name: 'home',
    path: '/',
    exact: true,
    protected: true,
    component: Home,
  },
];
export default routes;
