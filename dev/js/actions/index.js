export const selectUser = (user) => {
    return{
        type: "USER_SELECTED",
        payload: user
    }
};

export const deleteUser = (user) => {
    return{
        type: "USER_DELETED",
        payload: user
    }
};

export const undeleteUser = (user) => {
    return{
        type: "USER_UNDELETED",
        payload: user
    }
};
