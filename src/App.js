import { BrowserRouter,Route,Switch } from 'react-router-dom';
import './App.css';
import ProjectDetails from './pages/Details/ProjectDetails';
import About from './pages/Home/About/About';
import Banner from './pages/Home/Banner/Banner';
import Contact from './pages/Home/Contact/Contact';
import Home from './pages/Home/Home/Home';
import Footer from './Shared/Footer/Footer';
import Navigationbar from './Shared/Navigation/Navigationbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigationbar></Navigationbar>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route  path="/home">
          <Home/>
        </Route>
        {/* <Route path="/projectDetails/:detailsId">
          <ProjectDetails></ProjectDetails>
        </Route> */}
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
