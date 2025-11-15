import './App.css'
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyandPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import RefundPolicy from './pages/RefundPolicy';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/privacy-and-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
        <Route path='/refundpolicy' element={<RefundPolicy />} />
        <Route path='/support' element={<ContactUs />} />
      </Routes>
    </>
  )
}

export default App
