import React from 'react';
import { useChatContext } from 'stream-chat-react';

import { UserList } from './';
import { CloseCreateChannel } from '../assets';

const ChannelNameInput = ({ channelName = '', setChannelName }) => {

    return (
        <div className="channel-name-input__wrapper">
            <p>Name</p>
            <input value={} onChange={} placeholder='channel-name (no spaces)' />
        </div>
    )
}

const CreateChannel = () => {
    return (
        <div>
            Create Channel
        </div>
    );
};

export default CreateChannel;
