import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser, undeleteUser} from '../actions/index';
import ListItem from '../component/list-items';

class DeletedUserList extends Component{    

    createListItems() {

        return this.props.users.map((user) => {
            return(
               <div key={user.first}>
                    <ListItem item={user} itemText={user.first + " " + user.last} itemClickAction={this.props.selectUser} buttonClickAction={this.props.undeleteUser} buttonText={" + "}/>
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
        users: state.deletedUser
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({undeleteUser: undeleteUser, selectUser: selectUser}, dispatch)   
}

export default connect(mapStateToProps, matchDispatchToProps)(DeletedUserList);
