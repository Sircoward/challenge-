import React /*{ Suspense}*/ from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import './css/style.css';
import Home from './components/Home';
import Movies from './components/Movies';
import Series from './components/Series';
import Header from './components/Header';
import Footer from './components/Footer';
// import Loading from './components/Loading';


function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Switch>
              {/* <Suspense fallback={<div>Loading...</div>}> */}
              <Route exact path='/' component={Home} />
              <Route exact path='/movies' component={Movies} />
              <Route exact path='/series' component={Series} />
              {/* </Suspense> */}
            </Switch>
            <Footer />
        </Router>
    </div>
  );
}

export default App;