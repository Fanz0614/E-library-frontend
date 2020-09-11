import React from 'react';
import {connect} from 'react-redux';
import {DetailWrapper,
        Header,
        Content} from './style.js';
import * as actionCreators from './store/actioncreators.js'

class Detail extends React.Component{
    //console.log(this.props)
    
    render(){
        const {title,content} =this.props
        return(
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html:content}}>
                </Content>
            </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getDeatil(this.props.match.params.id);
    }
}
const mapState=(state)=>({
    title:state.detail.get('title'),
    content:state.detail.get('content')
})

const mapDispatch=(dispatch)=>({
    getDeatil(id){
        dispatch(actionCreators.getDetail(id))
    }
})
export default connect(mapState,mapDispatch)(Detail);