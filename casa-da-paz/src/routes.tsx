import {
    BrowserRouter,
    Routes,
    Route

} from 'react-router-dom'
import Login from './screens/Login'

export const Rotas = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route 
                path='/'
                element={<Login />}
                />
        </Routes>
        </BrowserRouter>
    )
}