import React from 'react';
import userIcon from '../logo.png';



const UserItem = ({ id, name, email }) => {
    return (

        <div className='wrapper'>
            <div className="product-img">
                <img src={userIcon} height="250" width="250" alt="" />
            </div>
            <div className="product-info">
                <div className="product-text">
                    <h1>Имя: {name}</h1>
                    <h2>Почта: {email}</h2>
                </div>
            </div>
        </div>

    )
}

export default UserItem;