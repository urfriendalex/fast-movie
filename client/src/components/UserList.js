import React, { Component } from 'react'
import ApiService from "../ApiService";

class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userList: [],
            message: null
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        ApiService.fetchUsers()
            .then((res) => {
                console.log(res);
                this.setState({userList: res.data.data})
            });
    }

    deleteUser(userId) {
        ApiService.deleteUser(userId)
           .then(res => {
               this.setState({message : res.data.message});
               this.setState({userList: this.state.userList.filter(user => user.id !== userId)});
           })

    }

    editUser(userId) {
        window.localStorage.setItem("userId", userId);
        this.props.history.push('edit-user');
    }

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('add-user');
    }

    render() {
        return (
            <div>
                <h2 className="page-title">List of Users</h2>
                <button className="btn-add" onClick={() => this.addUser()}> Add User</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="d-none">Id</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.userList.map(
                                user =>
                                    <tr key={user.id}>
                                        <td>{user.username}</td>
                                        <td>{user.password}</td>
                                        <td>
                                            <button className="btn-edit" onClick={() => this.editUser(user.id)}> Edit</button>
                                            <button className="btn-delete" onClick={() => this.deleteUser(user.id)}> Delete</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default UserList;