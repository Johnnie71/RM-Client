import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import UnicornIcon from '../assets/unicorn.png';

const Sidebar = () => (
    <div className="channel-list__sidebar">
        <div className="channel-list_sidebar__icon1">
            <div className="icon1__inner">
                <img src={UnicornIcon} alt='Unicorn' width='30' />
            </div>
        </div>
        <div className="channel-list_sidebar__icon2">
            <div className="icon1__inner">
                <img src={LogoutIcon} alt='Logout' width='30' />
            </div>
        </div>
    </div>
);

const ChannelContainer = () => {
    return (
        <div>
            This is the Channel List Container
        </div>
    );
};

export default ChannelContainer;
