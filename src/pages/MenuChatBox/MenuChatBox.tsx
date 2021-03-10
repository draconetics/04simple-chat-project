import {useState} from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";
import ChatBox from "../../components/ChatBox/ChatBox";
import LandingTeamComponent from '../../components/LandingTeam/LandingTeam';
import LandingChannelComponent from '../../components/LandingChannel/LandingChannel';
import LandingInvitesComponent from '../../components/LandingInvites/LandingInvites'
import './MenuChatBox.css'

//type TParams =  { id: string };
const MenuChatBox = ({match}: RouteComponentProps)=>{

    const [organization, setOrganization] = useState<string>(localStorage.getItem("landing_organization")||"");
    const [channel, setChannel] = useState<string>("");

    const channelStored=localStorage.getItem("landing_channel");
    const organizationStored=localStorage.getItem("landing_organization");
    const usernameStored = localStorage.getItem("landing_username");

    const renderComponent = (props:RouteComponentProps)=>{

        if(!usernameStored){
            return <Redirect to="/" />
        }
        if(!organizationStored){
            return <LandingTeamComponent 
                        {...props}
                        setOrganization={setOrganization} 
                        organization={organization}
                    />;
        }
        if(!channelStored){
            return  <LandingChannelComponent 
                        {...props}
                        setChannel={setChannel} 
                        channel={channel}
                    />;
        }       

        return <ChatBox  {...props} />;
    }

     
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
                            render={(props)=>renderComponent(props)}></Route>
                    <Route  exact 
                            path={`${match.url}/setup-team-name`} 
                            render={(props)=>renderComponent(props)}></Route>
                    <Route  exact 
                            path={`${match.url}/setup-channel`}  
                            render={(props)=>renderComponent(props)}></Route>
                    <Route  exact 
                            path={`${match.url}/setup-invites`}  
                            component={LandingInvitesComponent}></Route>
                </Switch>
            </div>
        </div>
        
        
    </div>;
}

export default MenuChatBox;