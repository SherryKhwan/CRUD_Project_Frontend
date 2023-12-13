import { Navigate, Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import AllRecords from './screens/AllRecords';
import NotFound from './screens/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/all' element={<AllRecords />} />
        <Route path='/not-found' element={<NotFound />} />
        <Route path='*' element={<Navigate to="/not-found" replace={true} />} />
      </Routes>
    </>
  );
}

export default App;
