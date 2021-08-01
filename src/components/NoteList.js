import React from 'react';

import NoteItem from '../components/NoteItem';

import { connect } from 'react-redux';



function NoteList(props) {
    return (
        <div>
            {props.notesData.map((note) => (
          <NoteItem  note={note} />
        ))}
        </div>
    )
}

function mapStateToProps (state) {
    return {notesData: state.notes}
  }

export default connect(mapStateToProps) (NoteList)
