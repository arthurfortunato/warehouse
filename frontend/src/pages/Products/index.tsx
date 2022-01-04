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
import { useEffect, useState } from 'react';

type Product = {
  id: string;
  name: string;
  code: string;
  sector: string;
  price: string;
}

export const Products = () => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [sector, setSector] = useState('');
  const [price, setPrice] = useState('');

  const [productsList, setProductsList] = useState<Product[]>([])

  async function getProducts(name: string, code: string, sector: string, price: string) {
    await api.post('/product/newproducts', {
      name: name,
      code: code,
      sector: sector,
      price: price
    }).then(response => {
      const list = getUpdateList(response.data, true);
      setProductsList(list)
    })
  }

  function getUpdateList(product: Product, add = true) {
    const list = productsList.filter(e => e.id !== product.id);
    if (add) list.unshift(product);
    return list;
  }

  async function saveProduct() {
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
  }

  useEffect(() => {
    api.get<Product[]>('/product/myproducts').then(response => {
      setProductsList(response.data)
    })
  }, []);

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
            value={name}
            onChange={(event) => {setName(event.target.value)}}
          />
          <Label>Código <p>*</p></Label>
          <Input
            placeholder="5002"
            value={code}
            onChange={(event) => {setCode(event.target.value)}}
          />
        </InputContainer>

        <InputContainer>
          <Label>Setor<p>*</p></Label>
          <Input
            placeholder="Patrimônio"
            value={sector}
            onChange={(event) => {setSector(event.target.value)}}
          />
          <Label>Valor unitário<p>*</p></Label>
          <Input
            placeholder="450.55"
            value={price}
            onChange={(event) => {setPrice(event.target.value)}}
          />
        </InputContainer>
      </BodyContainer>
      <Buttons>
        <Button onClick={saveProduct}>Cadastrar</Button>
        <Button className="cancel">
          <Link to="/" className="return">
            Cancelar
          </Link>
        </Button>
      </Buttons>
    </Container>
  )
}