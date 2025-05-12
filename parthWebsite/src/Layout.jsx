
import {Outlet} from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';


function Layout(){
    return(

        <>
        <Navbar/>

        <Outlet/> {/* Renders the nested route components (Jub koyi bhi route nested me use karna ho) */ }

        <Footer/>
        </>
    )
}
export default Layout;