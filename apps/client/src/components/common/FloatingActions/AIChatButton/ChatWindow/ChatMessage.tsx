import styles from "./ChatMessage.module.css";


interface Props {

message:{
role:"user"|"bot";
text:string;
}

}



const ChatMessage = ({
message
}:Props)=>{


return (

<div

className={
message.role==="user"
?
styles.user
:
styles.bot
}

>

{message.text}

</div>

);


};


export default ChatMessage;