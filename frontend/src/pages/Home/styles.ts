import styled from 'styled-components';

export const Container = styled.main`
  
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SectionInput = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1A202C;
`

export const SectionLanding = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #2D3748;

  @media(max-width: 800px) {
    display: none;
  }
`

export const BodyContainer = styled.main`
  display: flex;
  height: 70%;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;

  h1 { 
    font-size: 3rem;
    color: #fff;
  }

  h2 { 
    text-align: center;
    font-size: 2.2rem;
    font-weight: 400;
    color: #fff;
  }

  p { 
    font-size: 1.5rem;
    color: #fff;
  }

  img { 
    align-self: center;
    width: 300px;
  }

  .stock {
    background: #38A169;

    &:hover {
    background: #2F855A;
    }
  }

  @media(max-width: 920px) {
    text-align: center;

    button {
      display: flex;
      margin: 10px auto;
      width: 60%;
      justify-content: center;
    }
  }

  @media(max-width: 500px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.2rem;
    }

    button {
      font-size: 1rem;
    }
  }
`

