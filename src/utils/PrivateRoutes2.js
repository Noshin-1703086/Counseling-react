import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes2 = () => {
    let auth = {'token':localStorage.getItem('token')}
    return(
        auth.token ? <Navigate to="/Dashboard"/>:<Outlet/>
    )
}

export default PrivateRoutes2