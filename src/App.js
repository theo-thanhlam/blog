
import './App.css';
import Header from './components/headers';
import Post from './components/post'
import {Route, Routes} from 'react-router-dom'
import Layout from './layout';
function App() {
  return (
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Post/>}/>
      <Route path={'/login'} element={<div> login</div>}/>
      <Route path={'/register'} element={<div> register</div>}/>
    </Route>
  
  </Routes>

   
  );
}

export default App;
