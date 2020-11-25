import {
    RECEIVE_DECKS,
    ADD_DECK,
    REMOVE_DECK,
    ADD_CARD
  } from '../actions/decks';
  
  export default function decks(state = {}, action) {
    switch (action.type) {
      case RECEIVE_DECKS:
        return {
          ...state,
          ...action.decks
        };

      case ADD_DECK:
        const { deck } = action;
        return {
          ...state,
          [deck.id]: deck
        };

      case REMOVE_DECK:
        const { id } = action;
        const { [id]: value, ...remainingDecks } = state;
        console.log(remainingDecks);
        return remainingDecks;

      case ADD_CARD:
        const { deckId, card } = action;   //card={question:, answer:}
        return {
          ...state,
          [deckId]: {
            ...state[deckId],
            questions: [...state[deckId].questions].concat([card])
          }
        };
      default:
        return state;
    }
  }