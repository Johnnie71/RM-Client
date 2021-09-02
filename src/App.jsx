import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import './App.css';

import { ChannelListContainer, ChannelContainer, Auth} from './components';

const client = StreamChat.getInstance(process.env.REACT_APP_STREAM_KEY);

const authToken = false;

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
