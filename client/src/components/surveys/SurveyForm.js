import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

const SurveyForm = ({ handleSubmit, onSurveySubmit }) => {
  const renderFields = () => {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={label}
          component={SurveyField}
          type='text'
          label={label}
          name={name}
        />
      );
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSurveySubmit)}>
        {renderFields()}
        <Link to='/surveys' className='red btn-flat white-text' type='submit'>
          Cancel
        </Link>
        <button className='teal btn-flat right white-text' type='submit'>
          Next <i className='material-icons right'>done</i>
        </button>
      </form>
    </div>
  );
};

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name, label }) => {
    if (!values[name]) {
      errors[name] = `Please provide the ${label}`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
