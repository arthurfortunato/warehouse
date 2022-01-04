import {
  Container,
  Header,
  BodyContainer,
  InputContainer,
  Label,
  Buttons
} from './styles';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export const Products = () => {
  return (
    <Container>
      <Header>
        <h1>Adicione um novo produto a seu estoque</h1>
        <Button className="registeredProducts">Ver produtos cadastrados</Button>
      </Header>

      <BodyContainer>
        <InputContainer>
          <Label>Digite o nome do produto <p>*</p></Label>
          <Input
            placeholder="Cadeira"
          />
          <Label>Quantidade <p>*</p></Label>
          <Input
            placeholder="150"
          />
          <Label>Código <p>*</p></Label>
          <Input
            placeholder="5002"
          />
        </InputContainer>

        <InputContainer>
          <Label>Setor<p>*</p></Label>
          <Input
            placeholder="Patrimônio"
          />
          <Label>Valor unitário<p>*</p></Label>
          <Input
            placeholder="450.55"
          />
          <Label>Data de entrada<p>*</p></Label>
          <Input
            placeholder="dd/mm/aaaa"
          />
        </InputContainer>
      </BodyContainer>
      <Buttons>
        <Button>Cadastrar</Button>
        <Button className="cancel">Cancelar</Button>
      </Buttons>
    </Container>
  )
}