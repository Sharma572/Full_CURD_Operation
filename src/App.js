import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Forms } from './Components/Create';
import { ReadData } from './Components/Read';
import { UpdateData } from './Components/Update';

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route exact path='/' element={<Forms/>}></Route>
       <Route path='/read' element={<ReadData />}></Route>
       <Route path='/update' element={<UpdateData />}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
