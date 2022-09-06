import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Forms } from './Components/Create';
import { ReadData } from './Components/Read';

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route exact path='/' element={<Forms/>}></Route>
       <Route path='/read' element={<ReadData />}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
