import { useContext } from "react";
import { useController } from "react-hook-form";
import { AuthContext } from "../contexts/auth_context";

export function useAuth() {
  return useContext(AuthContext);
}
