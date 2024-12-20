import './App.css'
import {Routes,Route,BrowserRouter, useLocation} from "react-router-dom"
import Home from './Pages/Dashboard'
import Navbar from './components/Navbar'
import { ThemeProvider} from '@emotion/react'
import { createTheme } from '@mui/material'
import Weather from './Weather/Weather'
import Task from './Pages/Task'
import Login from './Pages/Login'
import { AnimatePresence } from "framer-motion";

function App() {



  const theme = createTheme({
    typography: {
      fontFamily: '"Outfit", serif;',
    },
  });

  return (
    <>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Routes>
        <Route path='/dashboard' element={<Home />}></Route>
        <Route path='/weather' element={<Weather />}></Route>
        <Route path='/task' element={<Task />}></Route>
        <Route path='/' element={<Login />}></Route>
    </Routes>
  </BrowserRouter>
  </ThemeProvider>
    </>
  )
}

export default App
