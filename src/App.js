import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import HomeComponent from './components/Home';
import CreateNewComponent from './components/CreateNew';
import LandingComponent from './components/Landing/Landing';
import NotFound from './components/NotFound';
import MenuChatBox from './components/MenuChatBox/MenuChatBox';

function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingComponent} />
          <Route path='/chatbox' component={MenuChatBox} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
