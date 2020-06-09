import React from 'react';
import './App.css';

import axios from 'axios';
import UserCard from "./components/UserCard";
import Followers from "./components/Followers";

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            followers: ''
        };
    }

    componentDidMount() {
        console.log("Component Did Mount");
        axios
            .get('https://api.github.com/users/chriswschultz')
            .then((response) => {
                console.log(response);
                this.setState({user: response.data});
            })
            .catch((error) => {console.log(error)});

        axios
            .get('https://api.github.com/users/chriswschultz/followers')
            .then((response) => {
                console.log(response.data);
                this.setState({followers: response.data});
            })
            .catch((error) => {console.log(error)});
    }

    render() {
        return (
            <div>
                Github User Card
                <UserCard user={this.state.user} />
                <Followers followers={this.state.followers}/>
            </div>
        );
    }
}

export default App;
