const initState = {}
const contactReducer = (state = initState,action) => {
    //console.log("Reducer Called..........",action.type);
    switch(action.type) {
        case 'CREATE_CONTACT':
            console.log("Create Contact Recucer called........",action.contact);
        default:
            return state;
    }
}
export default contactReducer;