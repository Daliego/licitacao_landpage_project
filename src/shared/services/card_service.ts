import {
  collection,
  doc,
  getDocs,
  updateDoc,
  where,
  query,
} from "firebase/firestore";
import { firestore } from "../config/firebaseConfig";
import { Card } from "../models/card";

async function getCards(): Promise<Card[] | undefined> {
  const reference = collection(firestore, "cards");

  const snapshot = await getDocs(reference);

  const cards = snapshot.docs.map((doc) => doc.data()) as Card[];

  return cards;
}

async function updateCard(card: Card): Promise<void> {
  console.log("Chamou o update");
  const reference = collection(firestore, "cards");

  const condition = where("id", "==", card.id);

  const querySnapshot = await getDocs(query(reference, condition));

  if (querySnapshot.empty) {
    throw new Error("Card not found");
  }

  const document = doc(firestore, "cards", querySnapshot.docs[0].id);
  await updateDoc(document, { ...card });
}

export const CardService = { getCards, updateCard };
