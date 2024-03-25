import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ComponentLoader from './components/componentLoader/ComponentLoader';

const ViewAnnouncements = lazy(() => import('./pages/announcements/viewAll/ViewAnnouncements'));
const Home = lazy(() => import('./pages/home/Home'));
const Auth = lazy(() => import('./pages/auth/Auth'));
const About = lazy(() => import('./pages/aboutUs/About'));

function App() {
  // const { SnackbarComponent } = useSnackbar();
  return (
    <BrowserRouter>
      <Suspense fallback={<ComponentLoader />}>
        <Provider store={store}>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/access" element={<Auth />} />
                <Route path="/announcements" element={<ViewAnnouncements />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <ToastContainer
            position="top-center" // or "bottom-center"
            autoClose={5000} // Adjust as needed
            newestOnTop={false} // To maintain the order of toasts
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            className="bg-red-100"
          />
        </Provider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
