import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './component/header';
import Main from './component/main';
import Navbar from './component/navbar';
import Pages from './component/pages';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

export default App;
