import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div>
      <SurveyList />
      <div className='fixed-action-btn'>
        <Link to='/surveys/new' className='btn-floating btn-large z-depth-5'>
          <i className='large material-icons light-blue darken-4'>add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
