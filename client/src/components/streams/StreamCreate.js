 
import React from 'react';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm';


class  StreamCreate extends React.Component{
  
    onSubmit  = formvalues => {
    console.log("input", formvalues );
        this.props.createStream(formvalues);
    }

    render(){
       // const { handleSubmit   } = this.props;
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit = {this.onSubmit}/>
            </div>

         );
    }
}



// const validate = (formValues) =>{
// const errors = {};
//      if (!formValues.title ) {
//         errors.title = 'You must enter a title';
//     }
     
//     if (!formValues.description ) {
//         errors.description = 'You must enter a description';
//  }
//     return errors;
// }


// const formWrappeed =  reduxForm({   form:'streamCreate'  ,
// // fields: ['title', 'description'] ,
// validate : validate
// })(StreamCreate);




export default connect(null,{createStream})(StreamCreate);

// export default  connect (reduxForm({   form:'streamCreate'  ,
// // fields: ['title', 'description'] ,
// validate : validate
// })(StreamCreate));


//  {formProps.meta.touched && formProps.meta.error}      
          //  {/* <span>{formProps.meta.error}</span> */}
          // <input   {...formProps.input}   />   // jsx syntax 0f below syntax
          // <input   onChange ={formProps.input.onChange}  value= {formProps.input.value}  />





        //   <form  
        //             className="ui form error" 
        //             onSubmit = { handleSubmit(this.onSubmit.bind(this))} >
        //             <Field name="title"   type="text"        component={this.renderInput}  label = 'Enter Title' />
        //             <Field name="description"   type="text"   component={this.renderInput}  label = "Enter Description"   /> 
        //             <button  className="ui button primary">Submit</button>
        // </form>