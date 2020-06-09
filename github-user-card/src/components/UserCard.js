import React from "react";
import UserAvatar from "./UserAvatar";
import UserInfo from "./UserInfo";


class UserCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <UserAvatar avatar={this.props.user.avatar_url} />
                <UserInfo user={this.props.user}/>
            </div>
        );
    }
}

export default UserCard;
