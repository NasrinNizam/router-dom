
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Help } from './Pages/Help'
import { Contact } from './Pages/Contact'
import { Service } from './Pages/Service'
import { NotFound } from './Pages/NotFound'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Help' element={<Help/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='*' element={<NotFound/>}/>
        
      </Route>
    )
  )
  
  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default App
