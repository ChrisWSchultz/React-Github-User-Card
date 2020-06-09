import React from "react";


class UserAvatar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src={this.props.avatar} alt="user avatar" />
            </div>
        );
    }
}

export default UserAvatar;
