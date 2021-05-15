
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/page/Header'
import Capital from './components/page/Capital'
import Codes from './components/page/Code'
import Langues from './components/page/Langue'
import Pays from './components/page/country'
import Navbar from './components/Navbar/Navbar'
import ShowCoun from './components/page/countries';


const App=()=> {
  return (
    <Router>
      <>
        <Navbar/>

        <Switch>

          <Route exact path="/capital" component={Capital}/>
          <Route  path="/codes" component={Codes}/>
          <Route  path="/langues" component={Langues} />
          <Route  path="/paysN" component={Pays} />
          <Route  path="/ShowCounpage" component={ShowCoun} />
          
         

        </Switch>
       
      </>
    </Router>
  )
}

export default App
