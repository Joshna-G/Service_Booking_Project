
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Services } from './Components/Services';
import { Registration } from './Components/Registration';
import { Login_Info } from './Components/Login_Info';
import { Empty } from './Components/Empty';
import { Datas } from './Components/Datas';
import { Updatedata } from './Components/Updatedata';
import { ReadData } from './Components/ReadData';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Empty/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Registration' element={<Registration/>}/>
      <Route path='/Datas' element={<Datas/>}/>
      <Route path='/Updatedata/:ID' element={<Updatedata/>}/>
      <Route path='/ReadData/:ID' element={<ReadData/>}/>
      <Route path='/Login' element={<Login_Info/>}/>
    </Routes>
    </>
  );
}

export default App;
