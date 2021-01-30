import {useState} from 'react';
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import ChatBox from "../ChatBox.component/ChatBox.component";
import LandingTeamComponent from '../LandingTeam.component/LandingTeam.component';
import LandingChannelComponent from '../LandingChannel.component/LandingChannel.component';
import LandingInvitesComponent from '../LandingInvites.component/LandingInvites.component'
import './MenuChatBox.component.css'

type TParams =  { id: string };
const MenuChatBox = ({match}: RouteComponentProps<TParams>)=>{

    const [organization, setOrganization] = useState<string>(localStorage.getItem("landing_organization")||"");
    const [channel, setChannel] = useState<string>("");

    return <div className="menu-chatbox-component">
        <div className="menu-chatbox__searcher"></div>
        <div className="menu-chatbox__row">
            <div className="menu-chatbox__row-left">
                <div className="menu-chatbox__team">
                    <h2>{organization}</h2>
                </div>
                <h2>Channels</h2>
                <ul className="menu-chatbox__channels">
                    <li>#General</li>
                    <li>#slack project</li>
                    <li>#Various</li>
                </ul>
                <h2>Direct Messages to</h2>
                <ul className="menu-chatbox__users">
                    <li>username01</li>
                    <li>pedro poveda</li>
                    <li>barth simpson</li>
                </ul>
            </div>
            <div className="menu-chatbox__row-main">
                
                <Switch>
                    <Route exact={true} 
                            path={match.url} 
                            render={()=><ChatBox/>}></Route>
                    <Route  exact 
                            path={`${match.url}/setup-team-name`} 
                            render={()=><LandingTeamComponent setOrganization={setOrganization} organization={organization}>
                            </LandingTeamComponent>}></Route>
                    <Route  exact 
                            path={`${match.url}/setup-channel`}  
                            render={()=><LandingChannelComponent setChannel={setChannel} channel={channel}/>}></Route>
                    <Route  exact 
                            path={`${match.url}/setup-invites`}  
                            component={LandingInvitesComponent}></Route>
                </Switch>
            </div>
        </div>
        
        
    </div>;
}

export default MenuChatBox;