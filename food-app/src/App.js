import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';
import Pagenotfound from './Pages/Pagenotfound';
import Layout from './Components/Layout';

function App() {
  return (
    <div className='App'>
      <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="menu" element={<Menu />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;