import React, { Children, useEffect, useState } from 'react';
import { Avatar, useChatChannel } from 'stream-chat-react';

import { InviteIcon } from '../assets';

const ListContainer = ( { children }) => {
    return (
        <div className='user-list__container'>
            <div className='user-list__header'>
                <p>User</p>
                <p>Invite</p>
            </div>
            {Children}
        </div>
    );
};

const UserItem = () => {
    return (
        <div className='user-item__wrapper'>
            <div className='user-item__name__wrapper'>

            </div>
        </div>
    )
};

const UserList = () => {

    return (
        <ListContainer>
            User List
        </ListContainer>
    );
};

export default UserList;