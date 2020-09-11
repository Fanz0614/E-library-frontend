import axios from "axios";
import { fromJS } from 'immutable';
//非导出，自用
const changeList =(data)=>({
    type:'change_list',
    //将data变成immutable，否则返回的是普通数组 
    data:fromJS(data),
    //Math.ceil取整
    totalpage:Math.ceil(data.length/5)
})

export const searchFocus=()=>({
    type:'search_focus'
});

export const searchBlur=()=>({
    type:'search_blur'
})

//使用redux-thunk返回一个函数而不是js对象
export const searchList=()=>{
    return(dispatch)=>{
        axios.get('/API/headerList.json').then((res)=>{
            const data=res.data;
            const action=changeList(data.data);
            dispatch(action);
            //console.log(data)
        }).catch(()=>{
            alert('erro');
        })

    }
}

export const mouseEnter=()=>({
    type:'mouse_enter'
})
export const mouseLeave=()=>({
    type:'mouse_leave'
})

export const mouseclick=(page)=>({
    type:'mouse_click',
    page
})
