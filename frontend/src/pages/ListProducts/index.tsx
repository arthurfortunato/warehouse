import {
  Container,
  Header,
  BodyContainer,
  Table
} from './styles';

import { Button } from '../../components/Button';
import { FaPencilAlt } from 'react-icons/fa';
import { BsFillTrashFill } from 'react-icons/bs';

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Link } from 'react-router-dom';

type Product = {
  id: string;
  name: string;
  code: string;
  sector: string;
  price: string;
}

export const ListProducts = () => {
  const [productsList, setProductsList] = useState<Product[]>([])

  useEffect(() => {
    api.get<Product[]>('/product/myproducts').then(response => {
      setProductsList(response.data)
    })
  }, []);

  return (
    <Container>
      <Header>
        <h1>Produtos cadastrados em seu estoque</h1>
        <Button>
          <Link to="/newproducts" className="return">
            Adicionar novos produtos
          </Link>
        </Button>
      </Header>

      <BodyContainer>
        <Table>
          <thead>
            <tr>
              <th>Nome do Produto</th>
              <th>Código</th>
              <th>Valor</th>
              <th>Setor</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>

          <tbody>
            {productsList.map(product => {
              return (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.code}</td>
                  <td>{product.price}</td>
                  <td>{product.sector}</td>
                  <td>
                    <button className="edit">
                      <FaPencilAlt size={"15px"} />
                    </button>
                  </td>
                  <td>
                    <button className="delete">
                      <BsFillTrashFill size={"15px"} color={"#fff"}/>
                    </button>
                  </td>
                </tr>
              )
            })}
            <tr>

            </tr>
          </tbody>
        </Table>
      </BodyContainer>
    </Container>
  )
}