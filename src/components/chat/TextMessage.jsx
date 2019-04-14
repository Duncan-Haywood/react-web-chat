import React from 'react';
import {MESSAGE_ANIMATION} from '../../config/uiSettings';

export default function TextMessage({conversation}) {
    let animation = '';
    let from = '';
    if(conversation.from === 'bot'){
        from = 'ps-message-received'
        if(MESSAGE_ANIMATION)
            animation = 'scale-up-left'
    }else{
        from = 'ps-message-sent'
        if(MESSAGE_ANIMATION)
            animation = 'scale-up-center'
    }
    return (
        <div className={`ps-message ${from} ${animation}`}>
            <span>{conversation.message}</span>
        </div>
    )
}