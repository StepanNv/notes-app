import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import './styles/main.scss';
import { ErrorAlertsBox } from './modules/ErrorAlertsBox';
import { MessageAlertsBox } from './modules/MessageAlertsBox';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
        <ErrorAlertsBox />
        <MessageAlertsBox />
      </BrowserRouter>
    </div>
  );
};

export default App;
