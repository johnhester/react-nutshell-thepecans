import React from 'react'


const MessageCard = props => {

    return(
        <section className="message--card">
            
            <div>
                <strong>
                    {props.message.user.username}
                </strong>
            </div>
            <h5>
                {props.convertTime(props.message.timeStamp)}
            </h5>
            <p>
                {props.message.content}
            </p>
            {parseInt(sessionStorage.credentials) === props.message.userId  
            ? <button onClick={() => {props.deleteMessage(props.message.id)}}>Delete</button>
            :"" }
           
        </section>
    )
}

export default MessageCard