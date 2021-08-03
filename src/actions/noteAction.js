import { getFirestore } from "redux-firestore";


export function getAllNotes (){
    return (dispatch, state, {getFireStore})=>{
        const db = getFireStore();
        db.collection('notes').onSnapshot(
            (results)=>{
                let notes = []
                results.forEach((doc)=>{
                    contacts.push({...doc.data(), id: doc.id})
                    dispatch({type:'ADD_ALL_NOTES', payload: notes})
                })
            },
            (err)=>{
                console.log(err)
            })
    }

}


export function addNote(newNote){
     return async(dispatch, state, {getFirestore} )=>{
         const db = getFirestore();
         try {
            await db.collection('notes').add(newNote)
         } catch (error) {
             console.log(error)
         }
     }
    //  {type:'ADD_NOTE', payload: newNote}
}

export function editNote(id, upDatedNote){
    return async(dispatch, state, {getFirestore})=>{
        const db = getFirestore();
        try {
            await db.collection('notes').doc(id).update(upDatedNote)
        } catch (error) {
            console.log(error)
        }
    }
    // {type: 'EDIT_NOTE', payload: {id:id, upDatedNoteInfo:upDatedNote}}
}

export function deleteNote(newNote){
    return async (dispatch, state, {getFireStore})=>{
        const db = getFireStore();
        try {
            await db.collection('notes').doc(id).delete()
        } catch (error) {
            console.log(error)
        }
    }
    // {type: 'DELETE_NOTE', payload: newNote}
}