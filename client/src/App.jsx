import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Header } from './componets/Header';
import Dashboard from './pages/DashBoard';
import Profile from './pages/Profile';
import PrivateRoute from './componets/privateRoute';



const App = () => {
  return (
   <BrowserRouter>
     <Header/>
      <Routes>
         <Route path='/' element ={<Home/>}/>
         <Route path='/sign-in' element ={<SignIn/>}/>
         <Route path='/sign-up' element ={<SignUp/>}/>
         <Route path='/dashboard' element ={<Dashboard/>}/>
         <Route element={<PrivateRoute/>}>

         <Route path='/profile' element={<Profile/>}/>
         </Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
