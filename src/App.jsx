import { BrowserRouter, useLocation  } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';

const AppLayout = () => {
  const location = useLocation();

  const hideLayout = ['/techrider'].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Header />}
      <AppRoutes />
      {!hideLayout && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header />
      <AppRoutes />
      <Footer /> */}
      <AppLayout/>
    </BrowserRouter>
  );
}

export default App;
