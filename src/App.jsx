import './App.css'
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyandPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/privacy-and-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
        <Route path='/support' element={<ContactUs />} />
      </Routes>
    </>
  )
}

export default App
