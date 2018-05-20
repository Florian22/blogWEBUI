let defaultState = {};

const mainReducer = (state = defaultState, action ) => {
    switch(action.type){
        case "LOAD_ARTICLES": console.log(state); return {
            ...state,
            articles : action.payload,
        }; break;
        case "LOAD_ARTICLE": console.log(state); return {
            ...state,
            article : action.payload,
        }; break;
        case "UPDATE_ARTICLE": console.log(action.payload); return {
            ...state,
        }; break; 
        case "CREATE_ARTICLE": console.log(action.payload); return {
            ...state,
        }; break; 
        case "UNLOAD_ARTICLE": console.log(state);
        if(state.article){
            var newState = {...state};
            delete newState.article;
            return newState;
        }else{ return {...state}} break;
        case "SIGN_IN": console.log(state); return {
            ...state,
            currentuser: {
                _id: action.payload._id,
                username: action.payload.userName,
                email: action.payload.email,
                token: action.payload.token,
            }
        }; break;
        case "SIGN_OUT": console.log(state);
            if(state.currentuser){
                var newState = {...state};
                delete newState.currentuser;
                return newState;
            }else{ return {...state}} break;
        default:return {...state};
    }

}

export default mainReducer;