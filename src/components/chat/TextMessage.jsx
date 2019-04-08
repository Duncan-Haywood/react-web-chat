import React from 'react';

export default function TextMessage({conversation}) {
    return (
        <div className="ps-chat-message ps-chat-sent">
            <span>{conversation.message}</span>
        </div>
    )
}