import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../../redux/reducers/messageReducer';
import {MESSAGE_ANIMATION} from '../../config/uiSettings';
import TextMessage from './TextMessage';

function ListMessage (props) {
    let animation = ''
    if(props.conversation.from === 'bot'){
        if(MESSAGE_ANIMATION)
            animation = 'scale-up-left'
    }
    return(
        <div>
            <TextMessage conversation={props.conversation}/>
            <ul style={{listStyle:'none', paddingLeft:'1vw'}}>
                {
                    props.conversation.options.map((option,idx)=>{
                        return(
                            <li className={`ps-message ps-li-message ${animation}`} key={'list-itn'+idx}
                                onClick={
                                    ()=>{props.sendMessage(option.value,props.messageContext)}
                            }>
                                {option.text}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);
const mapStateToProps = store => ({
    messageContext: store.messageReducer.context
});
export default connect(mapStateToProps, mapDispatchToProps)(ListMessage);