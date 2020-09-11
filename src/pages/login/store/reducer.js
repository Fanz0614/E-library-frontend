import {fromJS} from 'immutable';
const defaultState=fromJS({
    login:false,

})

export default (state=defaultState, action)=>{
    if(action.type==='change_login'){
        return state.set('login',action.value);
    }
    return state;
}