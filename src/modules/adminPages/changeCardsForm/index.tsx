import { useEffect, useState } from "react";
import { Body, Form, Img, Main, Option, Row, Select, Title } from "./style";
import { Input } from "../../../shared/components/input";
import { useForm } from "react-hook-form";
import { Card } from "../../../shared/models/card";
import { CardService } from "../../../shared/services/card_service";
import { TextArea } from "../../../shared/components/textArea";
import { ButtonToInternalPage } from "../../../shared/components/button";
import { formatText } from "../../../shared/utils/textFormat";
import toast, { Toaster } from "react-hot-toast";
import { sleep } from "../../../shared/utils/sleepFunction";

export function AdminCardsForm() {
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card>(undefined!);

  useEffect(() => {
    CardService.getCards().then((cards) => {
      if (cards) {
        setCards(cards);
        setSelectedCard(cards[0]);
      }
    });
  }, []);

  const myForm = useForm();

  const { handleSubmit } = myForm;

  const onSubmit = async (data: any) => {
    await CardService.updateCard(selectedCard)
      .then(() => {
        toast.success("Card atualizado com sucesso!");
      })
      .catch(() => {
        toast.error("Erro durante o envio. Tente novamente!");
      });

    await sleep(1500);

    window.location.reload();
  };

  const handleSelect = (e: React.SyntheticEvent<HTMLSelectElement, Event>) => {
    const target = e.currentTarget.value as string;

    const selectedCard = cards.find((card) => card.id === target);

    setSelectedCard(selectedCard!);
  };

  const handleChangeCard = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSelectedCard((oldState) => ({
      ...oldState,
      description: e.target.value,
    }));
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedCard((oldState) => ({
          ...oldState,
          image: reader.result as string,
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleCancel = () => {
    window.location.reload();
  };

  return (
    <Main>
      <Toaster
        position="bottom-center"
        toastOptions={{ iconTheme: { primary: "white", secondary: "green" } }}
      />
      <Body>
        <Title>Cards</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Select onChange={handleSelect}>
            {cards.map((card) => (
              <Option key={card.id} value={card.id}>
                {formatText(card.name)}
              </Option>
            ))}
          </Select>
          <Img src={selectedCard?.image} alt={selectedCard?.name} />
          <Input
            type="file"
            name="image"
            byForm={myForm}
            placeholder="Image"
            onChange={(e) => handleChangeImage(e)}
          />
          <TextArea
            name="description"
            byForm={myForm}
            placeholder="Description"
            value={selectedCard?.description}
            onChange={handleChangeCard}
            height={"100%"}
            maxLength={200}
            style={{ height: "100%" }}
          />
          <Row>
            <ButtonToInternalPage
              style={{
                width: "100%",
                justifySelf: "center",
                alignSelf: "center",
                backgroundColor: "green",
              }}
              type="submit"
            >
              Save
            </ButtonToInternalPage>
            <ButtonToInternalPage
              style={{
                width: "100%",
                justifySelf: "center",
                alignSelf: "center",
                backgroundColor: "red",
              }}
              onClick={handleCancel}
            >
              Cancel
            </ButtonToInternalPage>
          </Row>
        </Form>
      </Body>
    </Main>
  );
}
