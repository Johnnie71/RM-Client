import React from 'react';
import { useChatContext } from 'stream-chat-react';

import { UserList } from './';
import { CloseCreateChannel } from '../assets';

const ChannelNameInput = ({ channelName = '', setChannelName }) => {

    const handleChange = (e) => {
        e.preventDefault();

        setChannelName(e.target.value);
    }

    return (
        <div className="channel-name-input__wrapper">
            <p>Name</p>
            <input value={channelName} onChange={handleChange} placeholder='channel-name' />
            <p>Add Members</p>
        </div>
    )
}

const CreateChannel = ({createType, setIsCreating }) => {
    return (
        <div className="create-channel__container">
            <div className="create-chanbel__header">
                <p>{createType === 'team' ? 'Create a new channel' : 'Send a Direct Message'}</p>
                <CloseCreateChannel setIsCreating={setIsCreating} />
            </div>
            {createType === 'team' && <ChannelNameInput channelName={channelName} setChannelName={setChannelName} />}
        </div>
    );
};

export default CreateChannel;
