import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DisplayNav from './Navbar/nav';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DisplayNav />} />
      </Routes>
    </Router>
  );}

export default App;
