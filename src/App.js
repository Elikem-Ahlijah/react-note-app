import './App.css';

import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  return (
    <div className="container App">
      <div className="row">
        <div className="col-md-4">
          <NoteForm />
        </div>
        <div className="col-md-8">
           <NoteList /> 
        </div>
      </div>
    </div>
  );
}

export default App;
