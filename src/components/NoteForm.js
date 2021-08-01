import { React, useState }from 'react';

import { addNote } from '../actions/noteAction';
import { connect } from 'react-redux';


function NoteForm(props) {
    const [state, setState] = useState({
        title: "",
        date: "",
        notes:""
    })

    function handleonChange(event){
        setState({...state,
            [event.target.name]:event.target.value
        });
    }

    function handleonSubmit(){
        let noteId = 10000 + Math.random()*10000000;
        let note = {...state, id: noteId}
         props.addNewNote(note)

    }




    return (
        <div>
            <div>
                <label>Title</label><br></br>
                <input type="text" value={state.title} name="title" onChange={handleonChange}></input>
            </div>
            <div>
                <label>Date</label><br></br>
                <input type="date" value={state.date} name="date" onChange={handleonChange}></input>
            </div>
            <div>
                <label>Note</label><br></br>
                <textarea type="text" name="notes" onChange={handleonChange}>{state.notes}</textarea>
            </div>

            <button type="button" onClick={handleonSubmit}>Create Note</button>
            
        </div>
    )
}

let mapDispatchToProps = {addNewNote: addNote};

let mapStateToProps = () => {

}



export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
