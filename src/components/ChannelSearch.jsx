import React, { useEffect, useState } from 'react';
import { useChatContext } from 'stream-chat-react';

import { SearchIcon } from '../assets';

const ChannelSearch = () => {
    return (
        <div className="channel-search__container">
            <div className="channel-search__input__wrapper">
                <div className="channel-search__input__icon">
                    <SearchIcon />
                </div>
            </div>
        </div>
    );
};

export default ChannelSearch;
