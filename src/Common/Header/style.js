import styled from 'styled-components';
import  logoPic  from '../Statics/logo.png';

//创建一个组件，使用styled对div标签进行css渲染
export const HeaderWrapper = styled.div`
    z-index:1;
    position:relative;
    height:56px;
    border-bottom: 1px solid #f0f0f0;

`

export const Logo =styled.div`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
`

export const Nav=styled.div`
width:880px;
height:58px;
margin:0 auto;  
padding-right:70px;
box-sizing:border-box;

`
export const NavItem=styled.div`
padding:0 15px;
cursor:pointer;
color:#333;
line-height:56px;
&.left{
    float:left;
}
&.right{
    float:right;
    color:#969696;
}
&.active{
    color:#ea6f5a;
}
`
export const NavSearch=styled.input.attrs({
    placeholder:'Search'
})`
    width:160px;
    height:38px;
    padding:0 30px 0 20px;
    margin-top:9px;
    margin-left:20px;
    box-sizing:border-box;
    border:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    color:#666;
    &::placeholder{
        color:#999
    }
    &.focused{
        width:240px;
    }
`
export const Addition=styled.div`
position:absolute;
cursor:pointer;
right:0;
top:0;
height:56px;
`
export const Button=styled.div`
float:right;
margin-top:9px;
margin-right:20px;
padding:0 20px;
line-height:38px;
border-radius:19px;
border:1px solid #ec6149;
font-size:14px;
&.reg{
    color:#ec6149;
}
&.writing{
    color:#fff;
    background:#ec6149;
}
`
export const SearchWrapper=styled.div`
position:relative;
float:left;
.slide-enter{
    transition:all .2s ease-out;
}
.slide-enter-active{
    width:240px;
}
.slide-exit{
    transition:all .2s ease-out;
}
.slide-exit-active{
    width:160px;
}
.zoom{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    line-height:30px;
    border-radius:15px;
    text-align:center;
    &.focused{
        background:#777;
        color:#fff;
        cursor:pointer;
    }
}
`

export const SearchInfo=styled.div`
position:absolute;
left:0;
top:56px;
width:240px;
padding:0 20px;
height:100px;
box-shadow:0 0 8px rgba(0,0,0,.2);
background:rgba(255,255,255,1);
`
export const SearchInfoTitle=styled.div`
margin-top:20px,
margin-bottome:15px;
line-height:20px;
font-size:14px;
color:#969696;
`



export const SearchInfoSwitch=styled.span`
float:right;
font-size:13px;
cursor:pointer;
.spin{
    display:block;
    float:left;
    font-size:12px;
    margin-right:2px;
    transition:all .2s ease-in;
    transform-origin:center center;
}
`

export const SearchInfoItem=styled.a`
display:block;
float:left;
line-height:20px;
padding:0 5px;
font-size:12px;
border:1px solid #ddd;
color:#787878   ; 
boarder-radius:2px;
margin-right:10px; 
margin-top:15px;
`
export const SearchInfoList=styled.div`
overflow:hidden;
`