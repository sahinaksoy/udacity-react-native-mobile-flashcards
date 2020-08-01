import { AsyncStorage } from "react-native";
const FLASHCARD_DECK_STORAGE_KEY = "UdacityFlashcardAppStorage:decks";
import { decks } from "./_DATA";

export const getDecks = async () => {
  const decksByStore = await AsyncStorage.getItem(FLASHCARD_DECK_STORAGE_KEY);
 
  //Set initial data
  if (decksByStore == null) {
    AsyncStorage.setItem(FLASHCARD_DECK_STORAGE_KEY, JSON.stringify(decks));
  }
  return decksByStore == null ? decks : JSON.parse(decksByStore);
};

export const getDeck = async (id) => {
  const decksByStore = await AsyncStorage.getItem(FLASHCARD_DECK_STORAGE_KEY);
  return JSON.parse(decksByStore)[id];
};

export const saveDeckTitle = async (title) => {
  await AsyncStorage.mergeItem(
    FLASHCARD_DECK_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title,
        questions: [],
      },
    })
  );
};

export const addCardToDeck = async (title, card) => {
  const deck = await getDeck(title);
  await AsyncStorage.mergeItem(
    FLASHCARD_DECK_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        questions: [...deck.questions].concat(card),
      },
    })
  );
};
