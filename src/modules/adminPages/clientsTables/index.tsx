import { useEffect, useState } from "react";
import {
  Body,
  Main,
  Table,
  TableHeader,
  Title,
  TableData,
  TableRow,
  TableBody,
  Button,
} from "./style";
import { BsFillTrashFill } from "react-icons/bs";
import { Client } from "../../../shared/models/client";
import { ClientService } from "../../../shared/services/client_service";

export function AdminShowClientsForm() {
  const [clients, setClients] = useState<Client[] | undefined>(undefined);

  useEffect(() => {
    ClientService.getClients().then((clients) => {
      setClients(clients);
      console.log(clients);
    });
  }, []);

  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    client: Client
  ) => {
    e.preventDefault();

    ClientService.deleteClient(client).then(() => {
      setClients(clients?.filter((c) => c.id !== client.id));
    });
  };

  return (
    <Main>
      <Body>
        <Title>Clientes</Title>
        <Table>
          <TableHeader>
            <TableRow>
              <TableData>Nome</TableData>
              <TableData>Whatsapp</TableData>
              <TableData>Email</TableData>
              <TableData>CNPJ</TableData>
              <TableData></TableData>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients?.map((client) => (
              <TableRow key={client.id}>
                <TableData>{client.name}</TableData>
                <TableData>{client.whatsapp}</TableData>
                <TableData>{client.email}</TableData>
                <TableData>{client.cnpj}</TableData>
                <TableData>
                  <Button onClick={(e) => handleDelete(e, client)}>
                    <BsFillTrashFill />
                  </Button>
                </TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Body>
    </Main>
  );
}
