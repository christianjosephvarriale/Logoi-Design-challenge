import { useState } from "react";
import ActionCable from 'action-cable-react-jwt';

function Chat(props) {
    const [messages, setMessages] = useState([])

    useEffect(() => {

        // connect to websocket for live notifications
        // this is the implementation for a rails application with Redis as an MB
        window.consumer.subscriptions.create({ channel: "NotificationService" }, {
            received(msg) {
                setMessages(
                    messages.concat( msg )    
                )
            }
        })
      }, [])

    return (
        <>
            Here is where a chat should be!
        </>
    )
}

export default Chat;