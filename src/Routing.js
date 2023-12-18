import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';


const Routing = () =>{
return (
    <Router>
    <Routes>
        <Route path='/home' exact Component={Home}/>
        <Route path='/about' exact Component={Home}/>
    </Routes>
</Router>
)

};
export default Routing;
