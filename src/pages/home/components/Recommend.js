import React from 'react';
import {Recommendwrapper,
        RecommendItem} from '../style.js';
import {connect} from 'react-redux';


class Recommend extends React.Component{
    render(){
        const{recommend}=this.props;
        return(
            <div>
            {
                recommend.map((item)=>{
                    return(
                        <Recommendwrapper>
                        <RecommendItem imgUrl={item.get('imgurl')} key={item.get('id')}></RecommendItem>
                        </Recommendwrapper>
                    )
                })
            }
            </div>
            
        )
    }
}
const mapState=(state)=>({
    recommend:state.home.get('recommendlist')
})

const mapDispatch=(dispatch)=>({

})
export default connect(mapState,mapDispatch)(Recommend);