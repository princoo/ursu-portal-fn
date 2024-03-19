import { Provider } from 'react-redux';
import './App.css';
import { store } from './redux/store';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Auth from './pages/auth/Auth';
import NavBar from './components/NavBar';
import Home from './pages/home/Home';
import Footer from './components/Footer';
import ViewAnnouncements from './pages/announcements/viewAll/ViewAnnouncements';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/access" element={<Auth />} />
              <Route path="/announcements" element={<ViewAnnouncements />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
