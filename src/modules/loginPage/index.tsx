import toast, { Toaster } from "react-hot-toast";
import { Input } from "../../shared/components/input";
import { useForm } from "react-hook-form";
import { Form, LoginContainer, Title } from "./style";
import { AuthService } from "../../shared/services/auth_service";
import { useNavigate } from "react-router-dom";
import { ButtonToInternalPage } from "../../shared/components/button";
import { useAuth } from "../../shared/hooks/useAuth";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { saveDataInStorage } from "../../shared/utils/saveDataInStorage";

export const LoginPage = () => {
  const formController = useForm();
  const { handleSubmit } = formController;
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      const userCredential: User = await AuthService.login({
        user: data.user,
        password: data.password,
      });

      if (userCredential) {
        saveDataInStorage(userCredential);
        navigate("/products");
      }
    } catch (e) {
      toast.error("Usuário ou senha inválidos");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Toaster position="top-center" />
      <LoginContainer>
        <Title>Login</Title>
        <Input
          placeholder="Usuário"
          byForm={formController}
          name="user"
          style={{
            borderBottomColor: `white`,
            backgroundColor: "transparent",
          }}
        />
        <Input
          placeholder="Senha"
          byForm={formController}
          name="password"
          type="password"
          style={{
            borderBottomColor: `white`,
            backgroundColor: "transparent",
          }}
        />
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <ButtonToInternalPage>Login</ButtonToInternalPage>
        </div>
      </LoginContainer>
    </Form>
  );
};
