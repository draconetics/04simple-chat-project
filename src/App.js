import React,{useEffect} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomeComponent from './components/home.component'
import CreateNewComponent from './components/CreateNew.component'
import ChatBoxComponent from './components/ChatBox.component/ChatBox.component';
import LandingComponent from './components/Landing.component/Landing.component'
import LandingTeamComponent from './components/LandingTeam.component/LandingTeam.component'
import LandingChannelComponent from './components/LandingChannel.component/LandingChannel.component'
import LandingInvitesComponent from './components/LandingInvites.component/LandingInvites.component'
import NotFound from './components/NotFound.component'

import io from "socket.io-client";
import MenuChatBox from './components/MenuChatBox.component/MenuChatBox.component';

const ENDPOINT = 'http://localhost:3005/';
function App() {
  /* let socket;
  useEffect(() => {
    socket = io(ENDPOINT);
    console.log("socket")
    socket.emit('join', { data:"joinning to you" }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT]);
  
  useEffect(() => {
    
}, []); */


  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
            <Route exact path={["/","/home"]} component={HomeComponent}></Route>
            <Route path="/createnew" component={CreateNewComponent}></Route>
            <Route path="/chatbox" component={MenuChatBox}></Route>
            <Route exact path="/landing" component={LandingComponent}></Route>
            <Route exact path="/landing/setup-team-name" component={LandingTeamComponent}></Route>
            <Route exact path="/landing/setup-channels"  component={LandingChannelComponent}></Route>
            <Route exact path="/landing/setup-invites"  component={LandingInvitesComponent}></Route>
            <Route path='/404' component={NotFound} />
            <Redirect from='*' to='/404' />
        </Switch>
      </BrowserRouter>
      
    </React.Fragment>
  );
}

export default App;
