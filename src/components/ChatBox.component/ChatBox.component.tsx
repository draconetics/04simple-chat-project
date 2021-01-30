import {ChangeEvent, FormEvent, useEffect, useState} from 'react'
import './ChatBox.component.css'
import io from "socket.io-client";


const ENDPOINT = 'http://localhost:4000/';
interface IMessage{
    username:string;
    message:string;
}

const ChatBox = ()=>{
    const channel=localStorage.getItem("landing_channel");
    const organization=localStorage.getItem("landing_organization");
    const username=localStorage.getItem("landing_username");

    const [message, setMessage] = useState<string>("");
    const [chatList, setChatList] = useState<IMessage[]>([]);
    const handelTextarea = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        //console.log(e.target.value);
        setMessage(e.target.value)
    }
    //const [messages, setMessages] = useState<[]>([])
    let socket=io(ENDPOINT);
    

    useEffect(() => {
        console.log(localStorage.getItem("landing_channel"))
        console.log(localStorage.getItem("landing_organization"))
        
        
        let user = {
            name:username,
            organization:organization
        }
        
        socket.emit('join', { user, channel }, (error:object) => {
            if(error) alert(error);            
            console.log("joined correctly")
          });
    },[])

    useEffect(() => {
        socket.on('message', (message:any)=> {
            console.log(chatList)
            setChatList(chatList => [ ...chatList, message ]);
        });
        
    });

    const sendMessage = (e: FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        let data = {
            message,
            username:username,
            channel:channel
        }
        console.log(typeof socket)
        socket.emit('sendMessage', data, () => setMessage(''));
    }
    return <div className="chatbox-component">
            <div className="chatbox__header">
                <h3>#{organization}</h3>
                <span>Add new theme</span>
            </div>

                <ul className="chatbox__chat-messages">
                    {chatList && chatList.map((item, key)=>{
                        return <li key={key}>
                            <img src="https://serc.carleton.edu/download/images/54334/empty_user_icon_256.v2.png" alt="user-icon"/>
                            <div>
                                <h3>{item.username}</h3>
                                <span>{item.message}</span>
                            </div>
                        </li>
                    })}
                    
                </ul>
            <form className="chatbox__footer">
                    <textarea value={message} onChange={(e)=>{handelTextarea(e)}}></textarea>
                    <button className="btn btn-primary" onClick={(e)=>sendMessage(e)}>Send</button>
            </form>
    </div>
}

export default ChatBox;