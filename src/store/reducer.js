import { combineReducers } from 'redux';
import headerReducer from '../Common/Header/store/reducer.js';
import homeReducer from '../pages/home/store/reducer.js';
import detailReducer from '../pages/detail/store/reducer.js';
import loginReducer from '../pages/login/store/reducer.js';
//import listReducer from '../Common/pages/home/store/reducer.js';


//header和headerReducer随便起名，只是要把reducer从header文件夹下的reducer里引用出来
//使用combinReducers建一个新的reducer把从各个部分的reducer整合到新的reducer里面
const reducer=combineReducers({
    header:headerReducer,
    home:homeReducer,
    detail:detailReducer,
    login:loginReducer,
    
})
   
export default reducer;