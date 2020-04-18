const initState = {
    blogs : [
        {id:'1',title : 'First Record',content: 'This is first content'},
        {id:'2',title : 'Second Record',content: 'This is second content'},
        {id:'3',title : 'Third Record',content: 'This is third content'}
    ]
}

const blogReducer = (state = initState, action) => {
    return state;   
}
export default blogReducer;