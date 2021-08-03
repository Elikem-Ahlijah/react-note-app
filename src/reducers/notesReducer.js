const initialState = {
    notes:[]
}


const notesReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'ADD_ALL_NOTES':
            let notes = action.payload
            return {notes:notes}
            
        case 'ADD_NOTE':
            console.log(action.payload)
            let newNotes =  [...state.notes, action.payload]
            return { notes: newNotes };

        case 'EDIT_NOTE':
            var id = action.payload.id;
            let upDatedNoteInfo = action.payload.upDatedNoteInfo;
            console.log('notesAfterUpdate',upDatedNoteInfo);
            let notesAfterUpdate = state.notes.map((note)=>{
                if(note.id === id){
                    return upDatedNoteInfo
                }
                return note;
            });
    
            return {notes: notesAfterUpdate};
        
        case 'DELETE_NOTE':
            var id = action.payload
            let notesAfterDelete = state.notes.filter((note)=>note.id !== id);
            return {notes: notesAfterDelete};

            
            
    
        default:
            return state;
    }
}

export default notesReducer;