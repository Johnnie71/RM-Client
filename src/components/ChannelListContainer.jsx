import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';

const sidebar = () => {
    <div className="channel-list__sidebar">
        <div className="channel-list_sidebar__icon1">
            <div className="icon1__inner">
                
            </div>

        </div>
    </div>
}

const ChannelContainer = () => {
    return (
        <div>
            This is the Channel List Container
        </div>
    );
};

export default ChannelContainer;
