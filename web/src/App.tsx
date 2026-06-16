import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import './styles/main.scss';
import { ErrorAlersBox } from './modules/ErrorAlertsBox';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
        <ErrorAlersBox />
      </BrowserRouter>
    </div>
  );
};

export default App;
