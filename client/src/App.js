import React, {
  useEffect
} from 'react'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Nav/Header'
import Siemens3T from './pages/Siemens3T'
import Philips3T from './pages/Philips3T'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Header />
      <ToastContainer />
      <div style={{padding: '50px'}}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/siemens3t' component={Siemens3T} />
          <Route exact path='/philips3t' component={Philips3T} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
