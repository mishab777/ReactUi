import './App.css'
import { Example } from './Drags/Example'
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Home from './Pages/Dashboard'
import Navbar from './components/Navbar'
import { ThemeProvider} from '@emotion/react'
import { createTheme } from '@mui/material'
import Weather from './Weather/Weather'
import Task from './Pages/Task'

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
    <Navbar/>
    <Routes>
        <Route path='/example' element={<Example />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/weather' element={<Weather />}></Route>
        <Route path='/task' element={<Task />}></Route>
    </Routes>
  </BrowserRouter>
  </ThemeProvider>
    </>
  )
}

export default App
