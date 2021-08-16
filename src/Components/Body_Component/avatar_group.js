import React from 'react';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import maylee from '../Images/maylee.png'
import hale from '../Images/hale.png'
import Jody from '../Images/Jody.png'
import Alex from '../Images/Alex.png'

export default function GroupAvatars() {
    return (
        <AvatarGroup max={4}>
            <img alt="Remy Sharp" src={maylee} />
            <img alt="Travis Howard" src={hale} />
            <img alt="Cindy Baker" src={Jody} />
            <img alt="Agnes Walker" src={Alex} />
            <img alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
    );
}
