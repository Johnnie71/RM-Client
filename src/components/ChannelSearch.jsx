import React, { useEffect, useState } from 'react';
import { useChatContext } from 'stream-chat-react';

import { ResultsDropDown } from './';
import SearchIcon from '../assets/SearchIcon';

const ChannelSearch = ({ setToggleContainer }) => {
    const {client, setActiveChannel } = useChatContext();
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [teamChannels, setTeamChannels] = useState([]);
    const [directChannels, setDirectChannels] = useState([]);

    // resets every time the query changes
    useEffect(() => {
        if(!query){
            setTeamChannels([]);
            setDirectChannels([])
        }
    }, [query])

    const getChannels = async (text) => {
        try {
            const channelResponse = client.queryChannels({
                type: 'team', 
                name: { $autocomplete: text },
                members: { $in: [client.userID]}
            });

            const userResponse = client.queryUsers({
                id: { $ne: client.userID }, // excluding ourselves from the search by using our id
                name: { $autocomplete: text },
            });

            const [channels, { users }] = await Promise.all([channelResponse, userResponse]);  //instead of waiting for response to be done to go on to the next this will trigger them both at the same time
            if(channels.length) setTeamChannels(channels);
            if(users.length) setDirectChannels(users);
        } catch (error) {
            setQuery('');
        };
    };

    const onSearch = (event) => {
        event.preventDefault();

        setLoading(true);
        setQuery(event.target.value);
        getChannels(event.target.value)
    }

    const setChannel = (channel) => {
        setQuery('');
        setActiveChannel(channel);
    }

    return (
        <div className="channel-search__container">
            <div className="channel-search__input__wrapper">
                <div className="channel-search__input__icon">
                    <SearchIcon />
                </div>
                <input 
                    className="channel-search__input__text" 
                    placeholder="Search" 
                    type="text" 
                    value={query} 
                    onChange={onSearch}
                />
            </div>
            {query && (
                <ResultsDropDown
                    teamChannels={teamChannels}
                    directChannels={directChannels}
                    loading={loading}
                    setChannel={setChannel}
                    setQuery={setQuery}
                    setToggleContainer={setToggleContainer}
                />
            )}
        </div>
    );
};

export default ChannelSearch;
