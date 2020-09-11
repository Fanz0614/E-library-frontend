import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {HeaderWrapper, 
        Logo, 
        Nav, 
        NavItem, 
        NavSearch, 
        Addition, 
        Button,
        SearchWrapper,
        SearchInfoTitle,
        SearchInfoSwitch,
        SearchInfoItem,
        SearchInfoList,
        SearchInfo} from './style.js';
//使用connect方法让header和app做链接
import {connect} from 'react-redux';
import * as actionCreators from './store/actionCreators.js';
import {Link} from 'react-router-dom';


class Header extends React.Component{
    //定义一个getListarea函数来实现鼠标点击搜索框展示搜索列表
    getListarea(){
        const{page,totalpage, focused,list,mouseIn,changeList}=this.props;
        //把immutable的列表转换成JS
        const newList=list.toJS();
        const pagelist=[];
        if(newList.length){
            for(let i=(page-1)*5;i<page*5;i++){
                pagelist.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
            }
        }
        
        if(focused||mouseIn){
            return(
                <div>
                    <SearchInfo 
                        onMouseEnter={this.props.handleMouseenter}
                        onMouseLeave={this.props.handleMouseleave}
                    >
                        <SearchInfoTitle>
                             hot
                        <SearchInfoSwitch onClick={()=>changeList(page,totalpage,this.spinIcon)}>
                        <i ref={(icon)=>{this.spinIcon=icon}}className="iconfont spin">&#xe851;</i>
                            change
                        </SearchInfoSwitch>
                        </SearchInfoTitle>
                        
                        <div>
                      
                        { pagelist}
                            
                        </div>
                    </SearchInfo>
                
                </div>
            )
        }
        else{
            return null;
        }
    }
    
    
    
    render(){
        return(
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className='left active'>
                    home
                    </NavItem>
                    <NavItem className='left'>Download App</NavItem>
                    {this.props.login ? <NavItem className='right'>Log out</NavItem> 
                    :<Link to='/login'><NavItem className='right'>Log in</NavItem></Link>
                    }
                    
                    <NavItem className='right'>
                    <i className="iconfont">&#xe636;</i>
                    </NavItem>  
                    <SearchWrapper> 
                        <CSSTransition in={this.props.focused} timeout={200} classNames='slide'>
                            <NavSearch 
                                className={this.props.focused ?'focused': ''}
                                onFocus={this.props.HandleInputFocus}
                                onBlur={this.props.HandleInputBlur}
                            ></NavSearch>   
                        </CSSTransition>
                        <i className={this.props.focused ?'focused iconfont zoom': 'iconfont zoom'}>&#xe60b;</i>
                        { this.getListarea() }
                    
                    </SearchWrapper>    
                    
                    
                    
                </Nav>
                <Addition>
                    <Button className='writing'>
                    <span className="iconfont">&#xe708;</span>Articles</Button>
                    <Button className='reg'>Sign up</Button>
                   
                </Addition>
            </HeaderWrapper>
        )
    }
    
}

const mapStateToProps=(state)=>{
    return{
        //使用combine-reducer之后focused变成了header下的focused
        //使用immutable里面的get方法调用state数据
        focused:state.header.get('focused'),
        list:state.header.get('list'),
        page:state.header.get('page'),  
        totalpage:state.header.get('totalpage'),
        mouseIn:state.header.get('mouseIn'),
        login:state.login.get('login')
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        HandleInputFocus(){
            dispatch(actionCreators.searchList())
            dispatch(actionCreators.searchFocus())  
        },
        HandleInputBlur(){
            
            dispatch(actionCreators.searchBlur())

        },
        handleMouseenter(){
            dispatch(actionCreators.mouseEnter())

        },

        handleMouseleave(){
            dispatch(actionCreators.mouseLeave())
        },

        changeList(page,totalpage,spin){
            //实现图标360度旋转
            let originangle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originangle){
                originangle=parseInt(originangle,10);
            }else{
                originangle=0;
            }
            spin.style.transform='rotate('+(originangle+360)+'deg)';

            if(page<totalpage){
                dispatch(actionCreators.mouseclick(page+1))
            }else{
                dispatch(actionCreators.mouseclick(1))
            }
            
        }
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);  