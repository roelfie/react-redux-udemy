import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderError(error, touched) {
    if (error && touched) {
      return <div className='ui error message'>{error}</div>;
    }
  }

  renderInput = (fieldProps) => {
    // fieldProps.input & fieldProps.meta are provided by the redux-forms framrwork.
    // Custom Field attributes (like label) are also made available on the fieldProps object.
    const error = fieldProps.meta.error;
    const touched = fieldProps.meta.touched;
    const cssClass = error && touched ? "field error" : "field";
    return (
      <div className={cssClass}>
        <label>{fieldProps.label}</label>
        <input {...fieldProps.input} autoComplete='off' />
        {this.renderError(error, touched)}
      </div>
    );
  };

  onSubmit(formValues) {
    // Form is already stored in Redux store. At this point we can submit to backend server etc.
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
        <Field name='title' component={this.renderInput} label='Title' />
        <Field name='description' component={this.renderInput} label='Description' />
        <button className='ui button'>Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Invalid title";
  }
  if (!formValues.description) {
    errors.description = "Invalid description";
  }
  return errors;
};

export default reduxForm({
  // Name to identify this component's form in the Redux store
  form: "createStream",
  // Reference to the form validation method
  validate: validate
})(StreamCreate);
