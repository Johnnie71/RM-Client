import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import ChatIcon from '../assets/chaticon.png';
import LogoutIcon from '../assets/logout.png';

const cookies = new Cookies();

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
);

const customChannelTeamFilter = (channels) => {
    return channels.filter((channel) => channel .type === 'team');
};

const customChannelMessagingFilter = (channels) => {
    return channels.filter((channel) => channel .type === 'messaging');
};

const ChannelListContainer = ({ isCreating, setIsCreating, setCreateType, setIsEditing }) => {

    const logout = () => {
        // removing all cookies so user can sign out
        cookies.remove("token");
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');

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
                    channelRenderFilterFn={customChannelTeamFilter}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                            type="team"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType}
                            setIsEditing={setIsEditing}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {...previewProps}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            type="team"
                        />
                    )}
                />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={customChannelMessagingFilter}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                            type="messaging"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType}
                            setIsEditing={setIsEditing}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {...previewProps}
                            type="messaging"
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                        />
                    )}
                />
            </div>
        </>
    );
};

export default ChannelListContainer;
