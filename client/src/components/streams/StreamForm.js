import React from 'react';
import {Field, reduxForm} from 'redux-form';

class  StreamForm extends React.Component{
    renderError = ({error , touched}) => {
        if(touched && error){
            return(
                <div className = "ui error message">
                        <div className="header">{error}</div>
                </div>
            )
        }
    }
  
    renderInput = (  {input , label , meta }    ) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
         return (
              <div className= {className}>
                 <label> {label}  </label>
                <input {...input} type={input.type} className="" autoComplete = "off" />
                  {this.renderError(meta)}
            </div>
        )
    }


onSubmit = formvalues => {
    console.log("stream form  ", formvalues )
        this.props.onSubmit(formvalues)
}

render(){
        const { handleSubmit   } = this.props;
        console.log(this.props);
        // onSubmit = {this.props.handleSubmit(this.onSubmit)}
        return ( <form  className="ui form error"  onSubmit = { handleSubmit(this.onSubmit.bind(this))} >
            <Field name="title"   type="text"        component={this.renderInput}  label = 'Enter Title' />
            <Field name="description"   type="text"   component={this.renderInput}  label = "Enter Description"   /> 
            <button  className="ui button primary">Submit</button>
        </form>)
    }
}

const validate = (formValues) =>{
    const errors = {};

    if (!formValues.title ) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.description ) {
        errors.description = 'You must enter a description';
    }
    return errors;
}

const formWrapped =  reduxForm({   form:'streamform'  ,
// fields: ['title', 'description'] ,
validate : validate
})(StreamForm);

export default formWrapped;
