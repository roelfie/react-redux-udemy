import React from "react";
import { Field, reduxForm } from "redux-form";
import history from "../../../history";

class StreamForm extends React.Component {
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

  onSubmit = (formValues) => {
    // // Form is already stored in Redux store. At this point we can submit to backend server etc.
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
        <Field name='title' component={this.renderInput} label='Title' />
        <Field name='description' component={this.renderInput} label='Description' />
        <button className='ui primary button'>Submit</button>
        <button className='ui button' onClick={history.goBack}>
          Cancel
        </button>
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
  // This form will show up under "form.streamForm" in the Redux store.
  form: "streamForm",
  // Reference to the form validation method
  validate: validate
})(StreamForm);
