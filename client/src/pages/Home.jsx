import React from 'react';

const Home = (props) => {


    return (
        <div>
            {props.name ? 'Hi ' + props.name : 'You arent logged in'}
        </div>
    )
}

export default Home;