import React from "react";
import UserAvatar from "./UserAvatar";
import UserInfo from "./UserInfo";

import './UserCard.css';


class UserCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user-card">
                <div className="avatar">
                    <UserAvatar avatar={this.props.user.avatar_url} />
                </div>
                <div className="info">
                    <UserInfo className="info" user={this.props.user}/>
                </div>
            </div>
        );
    }
}

export default UserCard;
