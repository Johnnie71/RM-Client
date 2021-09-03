import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import './App.css';

import { ChannelListContainer, ChannelContainer, Auth} from './components';

const cookies = new Cookies();
const authToken = cookies.get("token");

const client = StreamChat.getInstance(process.env.REACT_APP_STREAM_KEY);

if(authToken) {
    client.connectUser({
        token: cookies.get('token'),
        username: cookies.get('username'),
        fullName: cookies.get('fullName'),
        userId: cookies.get('userId'),
        phoneNumber: cookies.get('phoneNumber'),
        avatarURL: cookies.get('avatarURL'),
        hashedPassword: cookies.get('hashedPassword')
    });
};

export default function App() {

    if(!authToken) return <Auth />;


    return (
        <div className='app__wrapper'>
            <Chat client={client} theme={'team light'}>
                <ChannelListContainer />
                <ChannelContainer />
            </Chat>
        </div>
    )
}
