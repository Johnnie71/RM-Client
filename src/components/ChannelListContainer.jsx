import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import EcoIcon from '../assets/ecoicon.png';
import LogoutIcon from '../assets/logout.png'

const Sidebar = () => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={EcoIcon} alt='Unicorn' width='30' />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner">
                <img src={LogoutIcon} alt='Logout' width='30' />
            </div>
        </div>
    </div>
);

const ChannelContainer = () => {
    return (
        <>
            <Sidebar />
        </>
    );
};

export default ChannelContainer;
