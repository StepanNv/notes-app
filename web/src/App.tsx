import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import './styles/main.scss';
import { ErrorAlertsBox } from './modules/ErrorAlertsBox';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
        <ErrorAlertsBox />
      </BrowserRouter>
    </div>
  );
};

export default App;
