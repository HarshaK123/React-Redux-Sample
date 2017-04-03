import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser, deleteUser} from '../actions/index';
import ListItem from '../component/list-items';

class UserList extends Component{
    
    createListItems() {
        return this.props.users.map((user) => {
            return(
                /*<div key={user.first}>
                    <li 
                        key={user.id}
                        onClick={() => this.props.selectUser(user)}
                    >
                        {user.first} {user.last}
                    </li>
                    <button id={user.first} 
                        onClick={() => this.props.deleteUser(user)}>{"X"}</button>
                </div>*/
                <div key={user.first}>
                    <ListItem 
                        item={user} 
                        itemText={user.first + " " + user.last} 
                        itemClickAction={this.props.selectUser} 
                        buttonClickAction={this.props.deleteUser}
                        buttonText={" X "}
                    />
                </div>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({selectUser: selectUser, deleteUser: deleteUser}, dispatch)   
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
