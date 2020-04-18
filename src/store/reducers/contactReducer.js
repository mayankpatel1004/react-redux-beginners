const initState = {}

const contactReducer = (state = initState, action) => {

    switch(action.type) {
        case 'CREATE_CONTACT':
            console.log("Action called........",action.contact);
        default:
            return state;
    }
}
export default contactReducer;