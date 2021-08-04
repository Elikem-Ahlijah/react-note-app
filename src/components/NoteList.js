import React ,{useEffect} from 'react';

import NoteItem from '../components/NoteItem';

import { connect } from 'react-redux';
import { getAllNotes } from '../actions/noteAction';



function NoteList(props) {

  useEffect(()=>{
    props.getAllNotes()
    },[])
    return (
        <div>
            {props.notesData.map((note) => (
          <NoteItem  note={note} />
        ))}
        </div>
    )
}

function mapStateToProps (state) {
    return {notesData: state.noteState.notes}
  }




const mapDispatchToProps = {
  getAllNotes,

}


export default connect(mapStateToProps, mapDispatchToProps) (NoteList)
