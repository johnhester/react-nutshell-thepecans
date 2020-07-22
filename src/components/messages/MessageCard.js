import React from 'react'


const MessageCard = props => {

    return(
        <section class="message--card">
            <div>
                <strong>
                    {props.message.userId}
                </strong>
            </div>
            <p>
                {props.convertTime(props.message.timeStamp)}
            </p>
            <p>
                {props.message.content}
            </p>
        </section>
    )
}

export default MessageCard