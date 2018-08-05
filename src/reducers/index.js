let defaultState = {};

//const mainReducer = (state = defaultState, action ) => {
export default (state = defaultState, action ) => {
switch(action.type){
        case "LOAD_ARTICLES": return {
            ...state,
            articles : action.payload,
        }; break;
        case "LOAD_ARTICLE":  return {
            ...state,
            article : action.payload,
        }; break;
        case "UPDATE_ARTICLE":  return {
            ...state,
        }; break; 
        case "CREATE_ARTICLE":  return {
            ...state,
        }; break; 
        case "UNLOAD_ARTICLE": 
        if(state.article){
            var newState = {...state};
            delete newState.article;
            return newState;
        }else{ return {...state}} break;
        case "SIGN_IN":  return {
            ...state,
            currentuser: {
                _id: action.payload._id,
                username: action.payload.userName,
                email: action.payload.email,
                token: action.payload.token,
            }
        }; break;
        case "SIGN_OUT": 
        console.log("state");console.log(state);
            if(state.currentuser){
                var newState = {...state};
                delete newState.currentuser;
                return newState;
            }else{ return {...state}} break;
        default:return {...state};
    }

}

//export default mainReducer;