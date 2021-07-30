import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Signin from './components/Signin/Signin';
import './globalStyles.css'
import populateConfesionAction from './redux/Confesion/populateConfesionAction';
import store from './redux/store';
import test1 from './test'
import { Provider } from 'react-redux'

function App() {

  useEffect(() => {
    (async () => {
      await test1()
    })()
    store.dispatch<any>(populateConfesionAction())

  }, [])

  return (
    <Provider store={store}>

      <BrowserRouter>
        <Switch>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12" style={{ height: '100vh', position: 'relative' }}>
                <Redirect to='/login'/>
                <Route path='/signin'>
                  <Signin />
                </Route>
                <Route path='/login'>
                  <Login />
                </Route>
                <Route path='/main'>
                  <Main />
                </Route>
              </div>
            </div>
          </div>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
