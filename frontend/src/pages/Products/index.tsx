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
import { Link } from 'react-router-dom';

import { api } from '../../services/api';
import { useState } from 'react';

export const Products = () => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [sector, setSector] = useState('');
  const [price, setPrice] = useState('');

  const getProducts = async (name: string, code: string, sector: string, price: string) => {
    await api.post('/product/newproducts', {
      name: name,
      code: code,
      sector: sector,
      price: price
    })
  }

  const saveProduct = async () => {
    try {
      await getProducts(
        name,
        code,
        sector,
        price
      )
      setName('')
      setCode('')
      setSector('')
      setPrice('')
    } catch (error) {
      alert('Preencha todas as informações')
    }
  }

  return (
    <Container>
      <Header>
        <h1>Adicione um novo produto a seu estoque</h1>
        <Button className="registeredProducts">
          <Link to="/products">
            Ver produtos cadastrados
          </Link>
        </Button>
      </Header>

      <BodyContainer>
        <InputContainer>
          <Label>Digite o nome do produto <p>*</p></Label>
          <Input
            placeholder="Cadeira"
            value={name}
            onChange={(event) => { setName(event.target.value) }}
          />
          <Label>Código <p>*</p></Label>
          <Input
            placeholder="5002"
            value={code}
            onChange={(event) => { setCode(event.target.value) }}
          />
        </InputContainer>

        <InputContainer>
          <Label>Setor<p>*</p></Label>
          <Input
            placeholder="Patrimônio"
            value={sector}
            onChange={(event) => { setSector(event.target.value) }}
          />
          <Label>Valor unitário<p>*</p></Label>
          <Input
            placeholder="450.55"
            value={price}
            onChange={(event) => { setPrice(event.target.value) }}
          />
        </InputContainer>
      </BodyContainer>
      <Buttons>
        <Button onClick={saveProduct}>Cadastrar</Button>
        <Button className="cancel">
          <Link to="/">
            Cancelar
          </Link>
        </Button>
      </Buttons>
    </Container>
  )
}