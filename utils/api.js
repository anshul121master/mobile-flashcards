import AsyncStorage from "@react-native-async-storage/async-storage";
import { generateUID } from "./helper";

const FC_STORAGE_KEY = "flashcards";

function initData() {
  return {
    "234mgp7hm68vzvg2amz1hq": {
      id: "234mgp7hm68vzvg2amz1hq",
      title: "React",
      questions: [
        {
          question: "What is ReactJS?",
          answer:
            "ReactJS is an open-source frontend JavaScript library which is used for building user interfaces, specifically for single page applications."
        },
        {
          question: "What is JSX?",
          answer:
            "JSX is a syntax notation for JavaScript XML(XML-like syntax extension to ECMAScript). It stands for JavaScript XML."
        },
        {
          question: "What is virtual DOM?",
          answer:
            "The virtual DOM (VDOM) is an in-memory representation of Real DOM."
        },
        {
          question: "What is Babel?",
          answer: "Babel is a JavaScript compiler"
        }
      ]
    },
    "290mgp7hm68vzvg2amz1hq": {
      id: "290mgp7hm68vzvg2amz1hq",
      title: "HTML",
      questions: [
        {
          question: "What does HTML stand for?",
          answer: "Hyper Text Markup Language"
        },
        {
          question: "What should values always be enclosed in?",
          answer: "Quotation marks"
        },
        {
          question:
            "Where do all items for the same web site need to be saved?",
          answer: "In the same folder"
        },
        {
          question:
            "What is always a welcome page, and explains the purpose or topic of the site?",
          answer: "Home Page"
        }
      ]
    },
    "454jgrwdbhf58lxznh9q79": {
      id: "454jgrwdbhf58lxznh9q79",
      title: "CSS",
      questions: [
        {
          question: "What is CSS?",
          answer: "It describes how the HTML content will be shown on screen."
        },
        {
          question: "What are gradients in CSS?",
          answer:
            "It is a property of CSS which allows you to display a smooth transformation between two or more than two specified colors."
        },
        {
          question: "What is a CSS pseudo-class?",
          answer:
            "It is a class that is used to define a special state of an HTML element."
        },
        {
          question: "What is CSS opacity?",
          answer:
            "It is the property that elaborates on the transparency of an element."
        }
      ]
    }
  };
}

export async function getDecks() {
  try {
    const results = await AsyncStorage.getItem(FC_STORAGE_KEY);
    if (results) {
      const data = JSON.parse(results);
      return data;
    } else {
      await AsyncStorage.setItem(FC_STORAGE_KEY, JSON.stringify(initData()));
      return initData();
    }
  } catch (error) {
    await AsyncStorage.setItem(FC_STORAGE_KEY, JSON.stringify(initData()));
    return initData();
  }
}

export async function getDeck(deckId){
    const results = await AsyncStorage.getItem(FC_STORAGE_KEY);
    if(results){
        const data = JSON.parse(results);
        const deck = data[deckId];
        return deck
    }else return {}
}

export async function saveDeckTitle(title) {
  const id = generateUID();
  const deck = {
    id: id,
    title: title,
    questions: []
  };

  await AsyncStorage.mergeItem(
    FC_STORAGE_KEY,
    JSON.stringify({
      [id]: deck
    })
  );
  return deck;
}

export async function saveCardToDeck(deckId, card) {
  // card:{ question:, answer:}
  const results = await AsyncStorage.getItem(FC_STORAGE_KEY);
  if (results) {
    const data = JSON.parse(results);
    const deck = data[deckId];
    deck.questions = deck.questions.concat([card]);
    await AsyncStorage.mergeItem(
      FC_STORAGE_KEY,
      JSON.stringify({
        [deckId]: deck
      })
    );
    return card;
  }
}

export async function removeDeck(deckId) {
    const results = await AsyncStorage.getItem(FC_STORAGE_KEY);
    if (results) {
      const data = JSON.parse(results);
      delete data[deckId];

      await AsyncStorage.setItem(FC_STORAGE_KEY, JSON.stringify(data));
      //return data;
    }
  // return {};
}
