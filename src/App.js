import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import NewsCards from './Components/NewsCards/NewsCards';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/news/:style' element={<NewsCards/>}/>
      <Route path='/news/:style' element={<NewsCards/>}/>
    </Routes>
  );
}

export default App;
