import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import './ChatBox.css';
import io from "socket.io-client";
import { nanoid } from 'nanoid'

const ENDPOINT = 'http://localhost:4000/';
interface IMessage{
    username:string;
    message:string;
}

const ChatBox = (props:any)=>{

    console.log(props);
    const channel=localStorage.getItem("landing_channel");
    const organization=localStorage.getItem("landing_organization");
    const username=localStorage.getItem("landing_username");
    
    const [message, setMessage] = useState<string>("");
    const [chatList, setChatList] = useState<IMessage[]>([]);
    const [onlineUsers, setOnlineUsers] = useState([]);

    const handelTextarea = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        //console.log(e.target.value);
        setMessage(e.target.value)
    }
    //const [messages, setMessages] = useState<[]>([])
    let socket=io(ENDPOINT);
    

    useEffect(() => {

       
        let user = {
            username:username,
            organization:organization,
            
        }
        
        socket.emit('join', { user, channel }, (error:object) => {
            if(error) alert(error);            
            console.log("joined correctly")
          });
    },[])

    useEffect(() => {
        socket.on('message', (message:any)=> {
            console.log("message received")
            console.log(message)
            setChatList(chatList => [ ...chatList, message ]);
        });

        socket.on('loadMessages', (messageList:any)=> {
            console.log("message received")
            console.log(messageList)
            setChatList(chatList => [ ...chatList, ...messageList ]);
        });
        
        socket.on("onlineUsers", ({ users }:any) => {
            setOnlineUsers(users);
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

    const logout = () => {
        alert('logout');
        localStorage.clear();
        socket.emit('close',username);
        props.history.push('/');
    };

    return <div className="chatbox-component">
            <div className="chatbox__header">
                <h2>Welcome 
                    <span>{username}</span> 
                    <button type="button" className="chatbox__logout" onClick={()=>logout()}>
                        logout
                    </button>
                </h2>
                <h3>#{organization}</h3>
                <span>Add new theme</span>
                <ul className="chatbox__users">
                    <h3>Users online : </h3>
                    {onlineUsers && onlineUsers.map((item:any)=>{
                        return <li key={nanoid()}>
                            <div>
                                <span className="online-dot"></span>
                                <span className="online-user">{item.username}</span>
                            </div>
                        </li>
                    })}
                    
                </ul>
            </div>
                <ul className="chatbox__chat-messages">
                    {chatList && chatList.map((item)=>{
                        return (
                        <li key={nanoid()} 
                            className={username === item.username ? 'local' : ''}
                        >
                            <img src="/user.png" alt="user-icon"/>
                            <div>
                                <h3>{item.username}</h3>
                                <span>{item.message}</span>
                            </div>
                        </li>
                        );
                    })}
                    
                </ul>
            <form className="chatbox__footer">
                    <textarea value={message} onChange={(e)=>{handelTextarea(e)}}></textarea>
                    <button className="btn btn-primary" onClick={(e)=>sendMessage(e)}>Send</button>
            </form>
    </div>
}

export default ChatBox;