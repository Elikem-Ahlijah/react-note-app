import {React, useState} from 'react';

import {editNote} from '../actions/noteAction';
import {connect} from 'react-redux';

function EditNotesForm(props) {
    const [state, setState] = useState({
        title: props.note.title,
        date: props.note.date,
        notes: props.note.notes
    })

    function handleonChange(event){
        setState({...state,
            [event.target.name]:event.target.value
        });
    }

    function handleonSubmit(){
        let note = {...state, id: props.note.id}
        props.editNote(props.note.id, note);
        props.hideModal()

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
                <textarea type="text"  name="notes" onChange={handleonChange}>{state.notes}</textarea>
            </div>

            <button type="button" onClick={handleonSubmit}>Update Note</button>
            
        </div>
    )
}

let mapDispatchToProps = {
    editNote
}

let mapStateToProps = () => {}

export default connect(mapStateToProps, mapDispatchToProps) (EditNotesForm);
