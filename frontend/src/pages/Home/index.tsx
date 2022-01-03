import {
  Container,
  Section
} from './styles';

import landing from '../../assets/landing.png'

export const Home = () => {
  return (
    <Container>

      <Section>
        <h2>Gerencie o seu Estoque de maneira rápida e prática!</h2>
        <img src={landing} alt="" />
      </Section>
      
      <Section>
      <img src={landing} alt="" />
        <h2>Warehouse</h2>
        <h1>Seja bem vindo</h1>
        <p>Warehouse é um sistema de organização de estoque</p>
        <div>
          <button>Cadastrar produto</button>
          <button>Ver estoque</button>
        </div>
      </Section>
    </Container>
  )
}