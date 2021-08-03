import {createStore, compose, applyMiddleware, combineReducers} from 'redux';

import notesReducer from '../reducers/notesReducer';
import { getFirebase, reduxReactFirebase, firebaseReducer } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import firebase from "../firebase/config";
import thunk from "redux-thunk";


const allReducers = combineReducers({
    noteState: notesReducer,
    firebaseState: firebaseReducer
})


const store = createStore(allReducers,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxReactFirebase(firebase),
        reduxFirestore(firebase)
      ))



export default store;