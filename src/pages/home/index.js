import React from 'react';
import List from './components/List.js';
import Recommend from './components/Recommend.js';
import Writer from './components/writer.js';
import {
    HomeWrapper,
    HomeLeft,
    HomeTop,
    HomeRight,
    Backtotop
} from './style.js';

import {connect} from 'react-redux';
import * as actionCreators from './store/actionCreators.js';

class Home extends React.Component{
    
    backtotop(){
        window.scrollTo(0,0);
    }
    render(){
        const {showScroll}=this.props
        return(
            <HomeWrapper>
                <HomeTop>
                <img className='banner-image' src='https://public.oed.com/wp-content/uploads/rainbow-research-reading-blog-header-1130x400.jpg' />
                </HomeTop>
                
                <HomeLeft>
                    <List />
                </HomeLeft>
                <HomeRight>
                    
                </HomeRight>
                {showScroll ? <Backtotop type="primary" size='large' onClick={this.backtotop}>Top</Backtotop>: null} 
                <div class="btn-group" role="group" aria-label="...">
  
               
  
</div>
                
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
 
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }  
    bindEvents(){
       window.addEventListener('scroll',this.props.changeScrollTopShow)
   }
}

const mapState=(state)=>({
    showScroll:state.home.get('showScroll')
})


const mapDispatch=(dispatch)=>({
    changeHomeData(){
        dispatch(actionCreators.change_home_data())
           
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop>100){
            dispatch(actionCreators.showScroll_action(true))
        }else{
            dispatch(actionCreators.showScroll_action(false))
        }
    }

})

export default connect(mapState,mapDispatch)(Home);