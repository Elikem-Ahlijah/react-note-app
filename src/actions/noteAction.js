export function addNote(newNote){
    return {type:'ADD_NOTE', payload: newNote}
}

export function editNote(id, upDatedNote){
    return {type: 'EDIT_NOTE', payload: {id:id, upDatedNoteInfo:upDatedNote}}
}

export function deleteNote(newNote){
    return {type: 'DELETE_NOTE', payload: newNote}
}