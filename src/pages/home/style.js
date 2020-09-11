import styled from 'styled-components';
import { Button, Dropdown } from 'antd';

//home
export const HomeWrapper=styled.div`
    width:1000px;
    margin:0 auto;
    overflow:hidden;
    height:auto;
    
    
    

`;
export const HomeTop=styled.div`
    padding-top:30px;
    width:1202px;
    
    .banner-image{
        width:1202px;
        height:250px;
        
    }
    
`

export const HomeLeft=styled.div`
    float:left;
    margin-left:20px;
    padding-top:30px;
    width:625px;
    .banner-image{
        width:625px;
        height:230px;
    }
    
`

export const HomeRight=styled.div`
    width:240px;
    float:right;
    
    
`
//topic

export const TopicWrapper=styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    

`

export const TopicItem=styled.div`
    float:left;
    background:red;
    
`
//list
export const ListItem=styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .pic{
        width:125px;
        height:100px;
        display:block;
        float:right;
        border-radius:10px;
    }
    
`
export const Listinfo=styled.a`
    width:500px;
    float:left;

    .title{
        font-size:18px;
        font-weight:bold;
        line-height:27px;
        color:#333;
    }
   
    
`
export const Listcontent=styled.div`
    .content{
        line-height:24px;
        font-size:13px;
        color:#999;
}
`
export const Recommendwrapper=styled.div`
    margin:5px 0;
    width:280px;
    
    
`
export const RecommendItem=styled.div`
    
    width:280px;
    height:50px;
    background:url(${(props)=>props.imgUrl});
    background-size:contain;
`
export const WriterWrapper=styled.div`
    width:278px;
    
    border-radius:3px;
    height:300px;
    line-height:30px;
    text-align:center;

`

export const Loadmore=styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    margin:30px 0;
    cursor:pointer;

`
export const Backtotop=styled(Button)`
    position:fixed;
    right:100px;
    bottom:100px;
    line-height:20px;
    font-size:20px;
    cursor:pointer;

`
//writer
export const Recommondwriter=styled.div`
    float:left;
    width:56px;
    height:16px;
    color:#969696;
    cursor:pointer;
`

export const Changewriter=styled.div`
    position:relative;
    float:right;
    right:50px;
    width:56px;
    height:19.2px;
    color:#969696;
    cursor:pointer;
`
export const Writerdetail=styled.div`
    width:auto;
    height:55px;
    color:#333333;
    margin:15px 0px 0px;
    cursor:pointer;
    text-align:left;
    line-height:55px;
    background:red;
    
`
export const Picwrapper=styled.div`
    position:relative;
    float:left;
    left:-55px;
    width:48px;
    height:10px;
    cursor:pointer;
    background-size:contain;
    &.circle{
        width:30px; 
        height:30px; 
        border-radius:50%; 
        overflow:hidden;
    }
    &.circle > img{
        width: 100%;
        height: 100%;
    }

`