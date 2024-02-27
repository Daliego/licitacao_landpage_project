import { firestore } from "../config/firebaseConfig";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { User } from "../models/user";
import { LoginUserDto } from "../models/genericModels/loginUserDto";

async function login(user: LoginUserDto): Promise<string | undefined> {
  const reference = collection(firestore, "users");

  const snapshot = await getDocs(reference);

  const users = snapshot.docs.map((doc) => doc.data()) as User[];

  const loggedUser = users.find(
    (u) => u.user === user.user && u.password === user.password
  );

  return loggedUser ? loggedUser.id : undefined;
}

export const AuthService = { login };
