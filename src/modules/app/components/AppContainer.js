import { useRoutes } from 'react-router-dom';
import routes from 'src/modules/app/routes';

const AppContainer = () => {
  console.log('### AppContainer:');
  const routing = useRoutes(routes);
  return routing;
};

export default AppContainer;
