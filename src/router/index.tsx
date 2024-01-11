import App from '../App';
import Home from '@/view/home'
import About from '@/view/about';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const baseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        {/* 重定向 */}
        <Route path='/' element={<Navigate to="/home" />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)

export default baseRouter;