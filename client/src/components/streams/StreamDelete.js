import React from 'react';
import {Link} from 'react-router-dom';


import {connect} from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import {fetchStream , deleteStream} from '../../actions';

class  StreamDelete extends React.Component {
 
    componentDidMount(){
            console.log(this.props.match.params.id)
            this.props.fetchStream(this.props.match.params.id);
    }



    renderActions() {
        const {id} = this.props.match.params;
   return(
        <React.Fragment>
            <button onClick ={() => this.props.deleteStream(id)}  className="ui negative button">Delete</button>
            <Link to = "/" className="ui button">Cancel</Link>     
        </React.Fragment>
        // to avoid div <React.Fragment or <> is used 
    )}

 
    
    renderContent(){
        if(!this.props.stream){
             return 'Are you sure want to delete this stream?'
        }
        return `Are you sure want to delete this stream with title: ${this.props.stream.title}`
    };
    
    
    render(){   
        return(  
            <Modal   
                title="Delete Stream"
                content = {this.renderContent()} 
                actions = {this.renderActions()}
                onDismiss={() => history.push('/')}
            />
            );  
    }
}



const mapsStateToProps = (state, ownProps ) => {
    return  { stream :  state.streams[ownProps.match.params.id]}
}


export default  connect (mapsStateToProps, {fetchStream , deleteStream})(StreamDelete);