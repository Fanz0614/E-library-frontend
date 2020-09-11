import {fromJS} from 'immutable';
const defaultState=fromJS({
    title:'',
    content:''
})

export default (state=defaultState, action)=>{
    if(action.type==='change_detail'){
        return state.merge({
            'title':action.title,
            'content':action.content
        })
    }

    
    return state;
}