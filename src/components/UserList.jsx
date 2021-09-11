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


const UserList = () => {

    return (
        <div>
            User List
        </div>
    );
};

export default UserList;