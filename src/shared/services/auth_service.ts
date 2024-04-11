
import { authenication } from "../config/firebaseConfig";
import { LoginUserDto } from "../models/genericModels/loginUserDto";
import { User, signInWithEmailAndPassword } from "firebase/auth";

// async function login(user: LoginUserDto): Promise<string | undefined> {
//   const reference = collection(firestore, "users");

//   const snapshot = await getDocs(reference);

//   const users = snapshot.docs.map((doc) => doc.data()) as User[];

//   const loggedUser = users.find(
//     (u) => u.user === user.user && u.password === user.password
//   );

//   return loggedUser ? loggedUser.id : undefined;
// }

async function login(user: LoginUserDto): Promise<User> {
  const userCredential = await signInWithEmailAndPassword(
    authenication,
    user.user,
    user.password
  );
  return userCredential.user;
  // .then((userCredential) => userCredential.user)
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  // });
}

export const AuthService = { login };
