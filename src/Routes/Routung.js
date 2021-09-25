import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Register from '../Auth/Register/index';
import Login from '../Auth/Login/index';
import Home from '../web/container/Home'

const Routung = () => {
      return(
          <BrowserRouter>
              <Switch>
                  <Route path='/' exact component={Home}/>
                  <Route path='/login' exact component={Login} />
                  <Route path='/register' exact component={Register} />

                  {/* <PrivateRoute path="/dashboard" exact component={Dashboard}/> */}
                  {/* <PrivateRoute path="/instructure/dashboard" exact component={Dashboard}/> */}
              </Switch>
          </BrowserRouter>
      )
  }
  
export default Routung