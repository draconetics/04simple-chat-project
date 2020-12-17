import ChatBox from "../ChatBox.component/ChatBox.component"
import './MenuChatBox.component.css'

const MenuChatBox = ()=>{
    return <div className="menu-chatbox">

        <div className="panel">
            <h2>Channels</h2>
            <ul className="panel__channels">
                <li>#General</li>
                <li>#slack project</li>
                <li>#Various</li>
            </ul>
            <h2>Direct Messages to</h2>
            <ul className="panel__users">
                <li>username01</li>
                <li>pedro poveda</li>
                <li>barth simpson</li>
            </ul>
        </div>
        <div className="content">
            <ChatBox></ChatBox>
        </div>
        
    </div>;
}

export default MenuChatBox;