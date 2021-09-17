import React from 'react';
import { Channel, useChatContext, MessageTeam } from 'stream-chat-react';

import { ChannelInner, CreateChannel, EditChannel } from './';

const ChannelContainer = ({ isCreating, setIsCreating, isEditing, setIsEditing, createType }) => {
    // giving us the information about the current specific channel
    const { channel } = useChatContext();

    //checking to see if current state is in creating mode
    if(isCreating) {
        return (
            <div className="channel__container">
                <CreateChannel createType={createType} setIsCreating={setIsCreating}/>
            </div>
        );
    };

    //checking to see if the current state is in editing mode
    if(isEditing) {
        return (
            <div className="channel__container">
                <EditChannel setIsEditing={setIsEditing} />
            </div>
        );
    };

    // Used when you create a chat and there are no messages yet
    const EmptyState = () => (
       
            <div className="channel-empty__container">
                <p className="channel-empty__first">This is the beginning of your chat history.</p>
                <p className="channel-empty__second">Send messages, attachments, links emojis and more!</p>
            </div>
    );

    return (
        <div className="channel__container">
            <Channel
                EmptyStateIndicator={EmptyState}
                Message={(messageProps, i) => <MessageTeam key={i} { ...messageProps} />}
            >
                <ChannelInner setIsEditing={setIsEditing} />
            </Channel>
        </div>
    );
};

export default ChannelContainer;
