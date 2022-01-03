import {
  Container,
  SectionInput,
  SectionLanding,
  BodyContainer,
} from './styles';

import { Button } from '../../components/Button';

import landing from '../../assets/landing.png'

export const Home = () => {
  return (
    <Container>

      <SectionInput>
        <BodyContainer>
          <h2>Warehouse</h2>
          <h1>Seja bem vindo</h1>
          <p>Warehouse é um sistema de organização de estoque</p>
          <div>
            <Button>Cadastrar produto</Button>
            <Button className="stock">Ver estoque</Button>
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