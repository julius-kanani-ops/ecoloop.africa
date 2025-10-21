import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <ScrollRestoration />
     <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer /> 
    </>
  )
}

export default App;