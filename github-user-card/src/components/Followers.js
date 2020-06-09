import React from "react";

import UserAvatar from "./UserAvatar";


const Followers = (props) => {

    if (props.followers.length > 0) {
        return (
            <div>
                {props.followers.map((follower) => {
                    return (
                        <div>
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
