import { combineReducers } from 'redux';
import decks from './decks';
import newDeckId from './newdecks';

export default combineReducers({
    decks,
    newDeckId
});