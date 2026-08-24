import {
useState
} from "react";


import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";


import styles from "./ChatWindow.module.css";


interface Props {

onClose:()=>void;

}



interface Message {

role:"user"|"bot";

text:string;

}


const ChatWindow = ({
onClose
}:Props)=>{


const [messages,setMessages]
=
useState<Message[]>([

{
role:"bot",
text:
"Xin chào 👋 Tôi là trợ lý AI của RENTORA. Tôi có thể hỗ trợ bạn tìm máy phù hợp."
}

]);



const sendMessage=(text:string)=>{


setMessages(prev=>[

...prev,

{
role:"user",
text
},


{
role:"bot",
text:
"Tôi đang tìm thông tin máy phù hợp cho bạn..."
}

]);


};



return (

<div className={styles.window}>


<header className={styles.header}>


<div>

🤖 Trợ lý AI

<p>
RENTORA Support
</p>

</div>



<button
onClick={onClose}
>
×
</button>


</header>



<div className={styles.messages}>

{
messages.map(
(message,index)=>(

<ChatMessage

key={index}

message={message}

/>

))
}

</div>



<ChatInput
onSend={sendMessage}
/>


</div>

);


};


export default ChatWindow;