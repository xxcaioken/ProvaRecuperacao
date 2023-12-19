import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Service from './Pages/Service/Service';


const Routing = () =>{
return (
    <Router>
    <Routes>
        <Route path='/home' exact Component={Home}/>
        <Route path='/about' exact Component={About}/>
        <Route path='/contact' exact Component={Contact}/>
        <Route path='/service' exact Component={Service}/>
    </Routes>
</Router>
)

};
export default Routing;
