import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../web/container/Home'
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Pricing from '../web/container/Pricing';
import LearningPath from '../web/container/LearningPath';

const Routung = () => {
      return(
          <BrowserRouter>
              <Switch>
                  <Route path='/' exact component={Home}/>
                  <Route path='/login' exact component={Login} />
                  <Route path='/register' exact component={Register} />
                  <Route path='/pricing' exact component={Pricing} />
                  <Route path='/learning-path' exact component={LearningPath} />
              </Switch>
          </BrowserRouter>
      )
  }
  
export default Routung