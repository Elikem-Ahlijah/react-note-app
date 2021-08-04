import '../App.css';

import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../actions/authActions';

function display(props) {
    function handleLogout(){
        props.logout()
    } 
  return (
    <div className="container-flex App form">
        
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        
      <div className="row ">
        <div className="col-md-6">
        <button type="button" style={{ backgroundColor: 'red', color: 'white' }} onClick={handleLogout}>
            Logout
        </button>
          <NoteForm />
        </div>
        <div className="col-md-6">
           <NoteList /> 
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {logout}

export default connect(null, mapDispatchToProps) (display);
