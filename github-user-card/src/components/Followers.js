import React from "react";

import UserAvatar from "./UserAvatar";

import './Followers.css'


const Followers = (props) => {

    if (props.followers.length > 0) {
        return (
            <div className="follower-wrapper">
                {props.followers.map((follower) => {
                    return (
                        <div className="follower">
                            <UserAvatar avatar={follower.avatar_url} />
                            <h3>{follower.login}</h3>
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return (
            <div>

            </div>
        );
    }
}

export default Followers;
