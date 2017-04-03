import React from 'react';
require('../../scss/style.scss');
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import DeletedUserList from '../containers/user-deleted-list';

const App = () => (
    <div>
        <h2>Active users:</h2>
        <UserList />
        <hr />
        <h2>Deleted users:</h2>
        <DeletedUserList />
        <hr />
        <h2>User Details:</h2>
        <UserDetail />

    </div>
);

export default App;