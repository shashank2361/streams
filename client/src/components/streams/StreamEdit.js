import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {fetchStream , editStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  

    componentDidMount(){

      this.props.fetchStream(this.props.match.params.id);

    }

    onSubmit = (formValues) => {
      console.log("StreamEdit" , formValues);
      this.props.editStream( this.props.match.params.id , formValues)
    }

    render (){
      console.log(this.props)
      if(!this.props.stream){
          return <div>Loading...</div>
      }
    return ( <div>
      <h3>Edit a Stream</h3>
      <StreamForm  initialValues ={ _.pick(this.props.stream, 'title' ,'description') 
        //this.props.stream 
    //  { title :'EDIT ME' , description : 'Change me too'} 
    }
           onSubmit ={this.onSubmit}/>
      
       </div>)
  }
}



 
const mapStateToProps = (state , ownProps ) => {
return {stream :  state.streams[ownProps.match.params.id]}

};



export default connect (mapStateToProps,{ fetchStream , editStream})(StreamEdit);


//With react-route each component needs to designed to work in isolation ( fetch its own data)