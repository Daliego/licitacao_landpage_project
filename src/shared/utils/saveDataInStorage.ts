import { User } from "firebase/auth";

export const saveDataInStorage = (user: User) => {
  const stringJaon = JSON.stringify(user);
  localStorage.setItem("user", stringJaon);
};
