import {
  Container,
  SectionInput,
  SectionLanding,
  BodyContainer,
} from './styles';

import { Button } from '../../components/Button';

import landing from '../../assets/landing.png'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Container>

      <SectionInput>
        <BodyContainer>
          <h2>Warehouse</h2>
          <h1>Seja bem vindo</h1>
          <p>Warehouse é um sistema de organização de estoque</p>
          <div className="buttons">
            <Button>
              <Link to="/newProducts" className="newProducts">
                Cadastrar produto
              </Link>
            </Button>
            <Button className="stock">
              <Link to="/products" className="products">
                Ver estoque
              </Link>
            </Button>
          </div>
        </BodyContainer>
      </SectionInput>

      <SectionLanding>
        <BodyContainer>
          <h2>Gerencie o seu Estoque de maneira rápida e prática!</h2>
          <img src={landing} alt="Box" />
        </BodyContainer>
      </SectionLanding>

    </Container>
  )
}