import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import './styles/main.scss';
import { ErrorAlertsBox } from './modules/ErrorAlertsBox';
import { MessageAlertsBox } from './modules/MessageAlertsBox';
import { useAppSettingsStore } from './stores/useAppSettingsStore';
import { useEffect } from 'react';

const App = () => {
  const theme = useAppSettingsStore((state) => state.theme);

  useEffect(() => {
    // Устанавливаем атрибут data-theme на тег <html>
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]); // Эффект будет срабатывать каждый раз, когда меняется тема

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
