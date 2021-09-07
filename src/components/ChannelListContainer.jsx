import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import ChatIcon from '../assets/chaticon.png';
import LogoutIcon from '../assets/logout.png';

const cookies = new Cookies;

const Sidebar = ({ logout }) => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={ChatIcon} alt='Unicorn' width='30' />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner">
                <img src={LogoutIcon} alt='Logout' width='30' onClick={logout} />
            </div>
        </div>
    </div>
);

const CompanyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">Chats</p>
    </div>
)

const ChannelListContainer = () => {

    const logout = () => {
        // removing all cookies so user can sign out
        cookies.removes("token");
        cookies.removes('userId');
        cookies.removes('username');
        cookies.removes('fullName');
        cookies.removes('avatarURL');
        cookies.removes('hashedPassword');
        cookies.removes('phoneNumber');

        // Reloading window which will bring to sign in/up page
        window.location.reload();
    };

    return (
        <>
            <Sidebar logout={logout}/>
            <div className="channel-list__list__wrapper">
                <CompanyHeader />
                <ChannelSearch />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => {}}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                            type="team"
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {...previewProps}
                            type="team"
                        />
                    )}
                />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => {}}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                            type="messaging"
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {...previewProps}
                            type="messaging"
                        />
                    )}
                />
            </div>
        </>
    );
};

export default ChannelListContainer;
