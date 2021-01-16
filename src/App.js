import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import FilmList from './Film/containers/FilmList'
import Characters from './Characters/containers/Characters'
import CharacterDetail from './Characters/components/CharacterDetail'

function App() {
  return (
    <Router>
     <div className="row">
       <nav className="black">
          <div className="nav-wrapper">

            <Link to="/" className="brand-logo"><img className="responsive-img" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" style={{maxHeight:'4rem'}}/></Link>
             <ul className="right hide-on-med-and-down">
               <li>
                 <Link to="/homepage">Home page</Link>
               </li>
               <li>
                 <Link to="/characters">Characters</Link>
               </li>
             </ul>
          </div>
       </nav>

       {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
       <Switch>
         <Route path="/homepage">
          <FilmList/>
         </Route>
         <Route path="/characters">
          <Characters/>
         </Route>
         <Route path="/character/:id">
          <CharacterDetail/>
         </Route>
       </Switch>
     </div>
   </Router>
  );
}

export default App;
