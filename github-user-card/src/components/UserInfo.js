import React from "react";


class UserInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Username: {this.props.user.login}</h2>
                <h3>Name: {this.props.user.name}</h3>
                <p>Public Repos: {this.props.user.public_repos}</p>
                <p>Followers: {this.props.user.followers}</p>
                <p>Following: {this.props.user.following}</p>
            </div>
        );
    }
}

export default UserInfo;
