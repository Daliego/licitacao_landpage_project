import toast, { Toaster } from "react-hot-toast";
import { Input } from "../../shared/components/input";
import { useForm } from "react-hook-form";
import { Form, LoginContainer, Title } from "./style";
import { AuthService } from "../../shared/services/auth_service";
import { useNavigate } from "react-router-dom";
import { ButtonToInternalPage } from "../../shared/components/button";

export const LoginPage = () => {
  const formController = useForm();
  const { handleSubmit } = formController;
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    //requisição para o firebase
    console.log(data);

    const userId = await AuthService.login({
      user: data.user,
      password: data.password,
    });

    if (userId) {
      navigate("/products");
      localStorage.setItem("userId", userId);
    }

    toast.error("Usuário ou senha inválidos");
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
          <ButtonToInternalPage
          // style={{
          //   justifyContent: "center",
          //   justifySelf: "center",
          //   justifyItems: "center",
          //   display: "flex",
          // }}
          >
            Login
          </ButtonToInternalPage>
        </div>
      </LoginContainer>
    </Form>
  );
};
