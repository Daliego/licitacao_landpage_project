import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { firestore } from "../config/firebaseConfig";
import { Client } from "../models/client";

async function addClient(client: Client): Promise<void> {
  const reference = collection(firestore, "clients");

  await addDoc(reference, client);
}

async function getClients(): Promise<Client[] | undefined> {
  const reference = collection(firestore, "clients");

  const snapshot = await getDocs(reference);
  console.log("Get clients were called");
  console.log(snapshot.docs.map((doc) => doc.data()));

  const clients = snapshot.docs.map((doc) => doc.data()) as Client[];

  return clients;
}

async function deleteClient(client: Client): Promise<void> {
  const reference = doc(firestore, "clients", client.id);

  await deleteDoc(reference);
  console.log("Client deleted");
}

export const ClientService = { addClient, getClients, deleteClient };
