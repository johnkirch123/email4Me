import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSurveys,
  getAllSurveys,
  getSurveyStatus,
  getSurveyError
} from '../../features/surveys/surveySlice';

const SurveyList = () => {
  const dispatch = useDispatch();
  // const [surveys, setSurveys] = useState([]);
  const surveys = useSelector(getAllSurveys);
  const surveyStatus = useSelector(getSurveyStatus);
  const error = useSelector(getSurveyError);

  useEffect(() => {
    dispatch(fetchSurveys());
  }, [dispatch]);

  let content;
  if (surveyStatus === 'loading') {
    content = <p>"Loading..."</p>;
  } else if (surveyStatus === 'succeeded') {
    content = [...surveys].reverse().map((survey) => {
      return (
        <div className='card blue-grey darken-1' key={survey._id}>
          <div className='card-content white'>
            <span className='card-title'>{survey.title}</span>
            <p>{survey.body}</p>

            <p className='right'>
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className='card-action'>
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  } else if (surveyStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return <div>{content}</div>;
};

export default SurveyList;
