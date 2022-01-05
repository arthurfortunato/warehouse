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

import toast, { Toaster } from 'react-hot-toast'

import { api } from '../../services/api';
import { useEffect, useState } from 'react';

interface IProduct {
  id: string;
  name: string;
  code: string;
  sector: string;
  amount: string;
}

const EditProducts = (product: Partial<IProduct>) => {

  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [sector, setSector] = useState('');
  const [amount, setAmount] = useState('');

  const getProducts = async (name: string, code: string, sector: string, amount: string) => {

    await api.put(`/product/edit/${localStorage.getItem('idCode')}`, {
      name: name,
      code: code,
      sector: sector,
      amount: amount
    })
  }

  const saveProduct = async () => {
    try {
      await getProducts(
        name,
        code,
        sector,
        amount
      ).then(() => {
        window.location.reload()
      })
    } catch (error) {
      toast.error('Preencha todas as informações')
    }
  }

  useEffect(() => {
    const url = window.location.href;
    const hasIdCode = url.includes('editproducts/');

    if (hasIdCode) {
      const [urlWithoutCode, idCode] = url.split('editproducts/')

      window.history.pushState({}, '', urlWithoutCode);

      localStorage.setItem('idCode', idCode)
    }
  }, [])


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
            placeholder={sector}
            value={sector}
            onChange={(event) => { setSector(event.target.value) }}
          />
          <Label>Quantidade<p>*</p></Label>
          <Input
            value={amount}
            onChange={(event) => { setAmount(event.target.value) }}
          />
        </InputContainer>
      </BodyContainer>
      <Buttons>
        <Button onClick={saveProduct} className="edit">
          <Link to="/products">
            Editar
          </Link>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
        </Button>
        <Button className="cancel">
          <Link to="/">
            Cancelar
          </Link>
        </Button>
      </Buttons>
    </Container>
  )
}

export default EditProducts;