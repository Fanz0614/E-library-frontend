import axios from 'axios';
const changeLogin=(value)=>({
    type:'change_login',
    value:true
})
export const login=(account,password)=>{
    return(dispatch)=>{
        axios.get('/API/login.json?account='+account+'&password='+password).
        then((res)=>{
            const result=res.data.data;
            if(result){
                dispatch(changeLogin())
            }else{
                alert('登陆失败')
            }

        })
    }
}