import './App.css';
import { BrowserRouter , Route , Routes} from 'react-router-dom';

import Home from './components/screen/Home';
import Enquiry from './components/screen/Enquiry';
import Experience from './components/screen/Experience';
import Header from './components/screen/includes/Header';
import Projects from './components/screen/Projects';

function App() {
  return (
    <>
	    <BrowserRouter>
        <Routes >
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Enquiry/' element={<Enquiry />} />
          <Route exact path='/Experience/' element={<Experience />} />
          <Route exact path='/Projects/' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  
  );
}

export default App;
