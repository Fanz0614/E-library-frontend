import { fromJS} from 'immutable';

//immutable 库
//把state变成immutable对象
//list数组为immutable，需要在action中把data变成immutable(fromJS(data))
const defaultState=fromJS({
    //此数组应为空，API以固定形式传数据并由ajax读取，
    articlelist:[],
    recommendlist:[],
    articlepage:1,
    showScroll:false
   
});
//使用immutable中set方法改变state值
//if 判定也可以用switch，case语句来写   
export default (state=defaultState, action)=>{
    if(action.type==='change_home_data'){
        //fromJS把普通对象转化成immutable对象
        return state.merge({
            'articlelist':fromJS(action.articlelist),
            'recommendlist':fromJS(action.recommendlist)
        })   
    }
    if(action.type==='add_home_data'){
        return state.merge({
            'articlelist':state.get('articlelist').concat(fromJS(action.articlelist)),
            'articlepage':action.nextPage
        })
        
       // return state.set('articlelist',state.get('articlelist').concat(fromJS(action.articlelist)))
    }
    if(action.type==='showScroll_change'){
        return state.set('showScroll',action.show)
    }
   

    
    return state;
}
