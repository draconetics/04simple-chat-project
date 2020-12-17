import {ChangeEvent, FormEvent, useEffect, useState} from 'react'
import './ChatBox.component.css'
import io from "socket.io-client";


const ENDPOINT = 'http://localhost:4000/';
interface IMessage{
    username:string;
    message:string;
}

const ChatBox = ()=>{
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
        
        
        let channel = localStorage.getItem("landing_channel");
        let user = {
            name:localStorage.getItem("landing_username"),
            organization:localStorage.getItem("landing_organization")
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
            username:localStorage.getItem("landing_username"),
            channel:localStorage.getItem("landing_channel")
        }
        console.log(typeof socket)
        socket.emit('sendMessage', data, () => setMessage(''));
    }
    return <div className="chatbox">
            <div className="chatbox__header">
                <h3>#slack-project</h3>
                <span>Add new theme</span>
            </div>
            <div className="chatbox__content">
                <ul className="container__chat-messages">
                    {chatList && chatList.map((item, key)=>{
                        return <li key={key}>
                            <h3>{item.username}</h3>
                            <span>{item.message}</span>
                        </li>
                    })}
                    
                </ul>
                
            </div>
            <form className="chatbox__footer">
                    <textarea value={message} onChange={(e)=>{handelTextarea(e)}}></textarea>
                    <button className="btn" onClick={(e)=>sendMessage(e)}>Send</button>
            </form>
    </div>
}

export default ChatBox;