import React from 'react';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import { getForm, submitSurvey } from '../../features/surveys/surveySlice';
import { useSelector, useDispatch } from 'react-redux';

const SurveyFormReview = ({ history, onCancel }) => {
  const dispatch = useDispatch();
  const { values } = useSelector(getForm);

  const renderContent = () => {
    return formFields.map(({ name, label }) => {
      return (
        <div key={name}>
          <label>{label}</label>
          <div>{values[name]}</div>
        </div>
      );
    });
  };
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>{renderContent()}</div>
      <button
        className='yellow darken-3 white-text btn-flat'
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className='green btn-flat right white-text'
        onClick={() => dispatch(submitSurvey({ values, history }))}
      >
        Send Survey <i className='material-icons right'>email</i>
      </button>
    </div>
  );
};

export default withRouter(SurveyFormReview);
