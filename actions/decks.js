import { getDecks, saveDeckTitle, saveCardToDeck, getDeck, removeDeck } from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
export const ADD_CARD = 'ADD_CARD';
export const RESET_NEW_DECK_ID = 'RESET_NEW_DECK_ID';

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  };
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  };
}

export function removeADeck(id) {
  return {
    type: REMOVE_DECK,
    id
  };
}

export function addCardToDeck(deckId, card) {
  return {
    type: ADD_CARD,
    deckId,
    card
  };
}

export function resetNewDeckId() {
  return {
    type: RESET_NEW_DECK_ID
  };
}

export function handleRemoveDeck(deckId){
  return dispatch => {
    dispatch(removeADeck(deckId));
    return removeDeck(deckId).catch(() => {
      const deck = getDeck(deckId)
      dispatch(addDeck(deck));
    });
  };
}

export function handleAddCardToDeck(deckId, card){
  return dispatch => {
    return saveCardToDeck(deckId, card).then(card => {
      dispatch(addCardToDeck(deckId, card));
    });
  };
}

export function handleAddDeck(title){
  return dispatch => {
    return saveDeckTitle(title).then(deck => {
      dispatch(addDeck(deck));
    });
  };
}


export function handleInitData() {
  return dispatch => {
    return getDecks().then(decks => {
      dispatch(receiveDecks(decks));
    });
  };
}