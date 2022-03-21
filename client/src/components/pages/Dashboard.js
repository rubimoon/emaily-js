import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      Dashboard{' '}
      <div className='fixed-action-btn'>
        <Link to='/surveys/new' className='btn-floating btn-large red' href='/'>
          <i className='material-icons'>+</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
