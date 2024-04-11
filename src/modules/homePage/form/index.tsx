import { useForm } from "react-hook-form";
import { Form, InputCheckbox, Label, Row } from "./style";
import { Input } from "../components/formInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "../../../shared/schemas/contactSchema";
import { ButtonToInternalPage } from "../../../shared/components/button";
import { useEffect, useState } from "react";
import { ClientService } from "../../../shared/services/client_service";
import { Client } from "../../../shared/models/client";
import { ulid } from "ulidx";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { collorPallete } from "../../../assets/colors/colors";
import { sizes } from "../../../assets/staticSizes/size";
import "./style.css";

export function ContactForm() {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<Inputs>();

  const myForm = useForm({ resolver: yupResolver(contactFormSchema) });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = myForm;
  const [hasCnpj, setHasCnpj] = useState(false);

  const handleChange = (e) => {
    if (e.target.checked) {
      setHasCnpj(true);
    } else {
      setHasCnpj(false);
    }

    console.log(e.target.checked);
  };

  useEffect(() => {
    console.log(hasCnpj);
  }, [hasCnpj]);

  const onSubmit = (data: any) => {
    // console.log(data);
    // console.log(data.cnpj ?? null);
    const client: Client = {
      id: ulid(),
      name: data.name,
      email: data.email,
      whatsapp: data.whatsapp,
      cnpj: data.cnpj ?? null,
      updatedAt: new Date(),
    };

    ClientService.addClient(client)
      .then(() => {
        toast.success("Formulário cadastrado com sucesso!");
      })
      .catch((error) => {
        toast.error("Erro durante o envio. Tente novamente!");
      });

    // ClientService.getClients().then((clients) => {
    //   console.log(clients);
    // });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Toaster
        position="bottom-center"
        toastOptions={{ iconTheme: { primary: "white", secondary: "green" } }}
      />
      <Row id="name_whatsapp">
        <Input
          name="name"
          placeholder="Nome*"
          byForm={myForm}
          style={{ borderColor: collorPallete.yellow }}
        />
        <Input
          name="whatsapp"
          placeholder="Whatsapp*"
          byForm={myForm}
          style={{ borderColor: collorPallete.yellow }}
        />
      </Row>
      <Row>
        <Input
          name="email"
          placeholder="Email"
          byForm={myForm}
          style={{ borderColor: collorPallete.yellow }}
        />
      </Row>
      <Row
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "row",
          gap: "0",
        }}
      >
        <Label htmlFor="hasCnpf">Possui CNPJ</Label>
        <InputCheckbox id="hasCnpf" type="checkbox" onChange={handleChange} />
      </Row>
      {/* <Row style={{ display: `${hasCnpj ? "flex" : "none"}`}}>
        <Input name="cnpj" placeholder="CNPJ" byForm={myForm} />
      </Row> */}
      {hasCnpj && (
        <Row>
          <Input
            name="cnpj"
            placeholder="CNPJ"
            byForm={myForm}
            style={{ borderColor: collorPallete.yellow }}
          />
        </Row>
      )}
      <Row>
        <ButtonToInternalPage
          type="submit"
          disabled={isSubmitting}
          style={{ width: sizes.buttonSize }}
        >
          Enviar
        </ButtonToInternalPage>
      </Row>
    </Form>
  );
}
