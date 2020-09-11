import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as actioncreators from './store/actioncreators.js'
import {LoginWrapper,
        LoginBox,
        Input,
        Button} from './style.js';


class Login extends React.Component{
    //console.log(this.props)
    
    render(){
        const {loginstatus}=this.props;
        if(!loginstatus){
            
            return( 
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='Account' ref={(input)=>{this.account=input}} />
                        <Input placeholder='Password' type='password' ref={(input)=>{this.password=input}}/>
                        <Button onClick={()=>this.props.login(this.account,this.password)}>Login</Button>
                        
                    </LoginBox>
                </LoginWrapper>
            )

        }
        else{
            return <Redirect to='/' />
        }
        
    }
   
}
const mapState=(state)=>({
   loginstatus:state.login.get('login')
})

const mapDispatch=(dispatch)=>({
    login(accountElem,passwordElem){
        dispatch(actioncreators.login(accountElem.value,passwordElem.value))
    }
})
export default connect(mapState,mapDispatch)(Login);