import { fromJS } from 'immutable';

//immutable 库
//把state变成immutable对象
//list数组为immutable，需要在action中把data变成immutable(fromJS(data))
const defaultState=fromJS({
    focused:false,
    mouseIn:false,
    list:[],
    page:1,
    totalpage:1

});
//使用immutable中set方法改变state值
//if 判定也可以用switch，case语句来写   
export default (state=defaultState, action)=>{
    if (action.type==='search_focus'){
        return state.set('focused',true)
    }
    if(action.type==='search_blur'){
        return state.set('focused',false)
    }
    if(action.type==='change_list'){
        //使用merge可以同时改变多个内容，性能更高
        return state.merge({
            'list':action.data,
            'totalpage':action.totalpage
        })
        //return state.set('list',action.data).set('totalpage',action.totalpage);
        
    }
    if(action.type==='mouse_enter'){
        return state.set('mouseIn',true)
    }

    if(action.type==='mouse_leave'){
        return state.set('mouseIn',false)
    }

    if(action.type==='mouse_click'){
        return state.set('page',action.page)
    }


    return state;
}