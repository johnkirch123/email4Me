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
    if (surveyStatus === 'idle') {
      dispatch(fetchSurveys());
    }
  }, [surveyStatus, dispatch]);

  let content;
  if (surveyStatus === 'loading') {
    content = <p>"Loading..."</p>;
  } else if (surveyStatus === 'succeeded') {
    content = [...surveys].reverse().map((survey) => {
      return (
        <div className='card light-blue darken-1 z-depth-2' key={survey._id}>
          <div className='card-content white'>
            <span className='card-title'>{survey.title}</span>
            <p>{survey.body}</p>

            <p className='right'>
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className='card-action'>
            <a className=' white-text'>Yes: {survey.yes}</a>
            <a className=' white-text'>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  } else if (surveyStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return <div className='container'>{content}</div>;
};

export default SurveyList;
