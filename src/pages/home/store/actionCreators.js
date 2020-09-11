import axios from "axios";
import { fromJS } from "immutable";

const addHomeData=(list,nextPage)=>({
    type:'add_home_data',
    list:fromJS(list),
    articlelist:list.articlelist,
    nextPage
})
const changeHomeData=(result)=>({
    type:'change_home_data',
    result:fromJS(result),
    articlelist:result.articlelist,
    recommendlist:result.recommendlist
})

export const change_home_data=()=>{
    return(dispatch)=>{
        axios.get('/API/body.json').then((res)=>{
            const result=res.data;
            const action=changeHomeData(result.data)
            dispatch(action);
        })
    }
}

export const LoadMore=(page)=>{
    return(dispatch)=>{
        axios.get('/API/changelist.json?page='+ page).then((res)=>{
            const result=res.data;
            //console.log(result)
            const action=addHomeData(result.data,page+1)
            //page+1
            dispatch(action);
        })
    }
}

export const showScroll_action=(show)=>({
    type:'showScroll_change',
    show
})

