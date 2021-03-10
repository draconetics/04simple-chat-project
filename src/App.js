import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LandingPage from './pages/Landing/Landing';
import NotFound from './pages/NotFound';
import MenuChatBox from './pages/MenuChatBox/MenuChatBox';

function App() {

  return (
    <div className="app" style={{backgroundColor:'#f4ede4', height:'100vh'}}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/chatbox' component={MenuChatBox} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
