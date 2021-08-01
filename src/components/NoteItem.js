import {React, useState} from 'react';
import {Modal} from 'react-bootstrap';

import EditNotesForm from '../components/EditNotesForm';

import {deleteNote} from '../actions/noteAction';
import {connect} from 'react-redux'

function NoteItem(props) {
    const [isModalVisible, setShowModal]=useState(false)

    function showModal(){
        setShowModal(true)
    }

    function hideModal(){
        setShowModal(false)
    }


    return (
        <div className="item">
            <div>TITLE: {props.note.title} DATE: {props.note.date}</div>
            <div><p>{props.note.notes}</p></div>
            <div><button onClick={showModal}>Edit</button>
            <Modal show={isModalVisible} onHide={hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Note</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditNotesForm hideModal={hideModal} note={props.note} />
                    </Modal.Body>
                </Modal>
            <button     onClick={()=>{
                        props.deleteNote(props.note.id)
                    }}>Delete</button></div>
        </div>
    )
}

let mapDispatchToProps = {deleteNote};
let mapStateToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);
