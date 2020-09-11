import React from 'react';
import {ListItem,
        Listinfo,
        Listcontent,
        Loadmore} from '../style.js';
import {connect} from 'react-redux';
import * as actioncreators from '../store/actionCreators';
import {Link} from 'react-router-dom';

class List extends React.Component{
    render(){
        const {list,LoadMore,page}=this.props;
        return(
            <div>
                {
                    list.map((item,index)=>{
                        return(
                            <Link key={index} style={{ textDecoration: 'none' }} to={'/detail/'+item.get('id')}>
                            <ListItem key={index}>
                                <img className='pic' src={item.get('imgurl')} />
                            <Listinfo>
                                <h3  className='title'>{item.get('title')}</h3>    
                            </Listinfo>
                            <Listcontent>
                                <p className='content'>{item.get('desc')}</p>
                            </Listcontent>
                            </ListItem>
                            </Link>
                        )
                    })
                }
                <Loadmore onClick={()=>LoadMore(page)}>More articles</Loadmore>
            </div>
           
        )
    }
}
const mapState=(state)=>({
    list:state.home.get('articlelist'),
    page:state.home.get('articlepage')

});
const mapDispatch=(dispatch)=>({
    LoadMore(page){
        dispatch(actioncreators.LoadMore(page))

    }
})

export default connect(mapState,mapDispatch)(List);