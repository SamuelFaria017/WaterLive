import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home } from '../pages/Home/Home'
import { Plants } from '../pages/Plants/Plants'
import { Animals } from '../pages/Animals/Animals'
import { Login } from '../pages/Login/Login'
import { Register } from '../pages/Register/Register'

export function RoutesComponents(){
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<Home/>} />

                <Route path='plantas' element={<Plants />} />
                <Route path='animais' element={<Animals />} />      
                <Route path='login' element={<Login />} />
                <Route path='registrar' element={<Register />} />         
            </Routes>
        </Router>
    );
}