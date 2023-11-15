
import './styles/App.css';
import {Route, Routes} from 'react-router-dom'
import Layout from './layout';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import IndexPage from './pages/indexPage';
function App() {
  return (
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<IndexPage/>}/>
      <Route path={'/login'} element={<LoginPage/>}/>
      <Route path={'/register'} element={<RegisterPage/>}/>
    </Route>
  
  </Routes>

   
  );
}

export default App;
