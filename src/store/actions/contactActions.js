export const createContact = (contact) => {
    //console.log("Action called",contact);
    return (dispatch,getState) => {
        dispatch({type: 'CREATE_CONTACT',contact});
    }
} 