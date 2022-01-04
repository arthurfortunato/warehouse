import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background: #1A202C;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;

  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    color: #fff;
  }

  button {
    padding: 12px 24px;
  }

  .return {
    text-decoration: none;
    color: #fff;
  }
`
export const BodyContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Table = styled.table`
 width: 90%;
 text-align: left;
 border-collapse: collapse;
 
 thead th{
   color: #485564;
   font-weight: normal;
   font-size: 1.2rem;
   padding: 1rem 2rem;
   text-align: left;
  }
  
  tbody td{
  border-top: 1px solid #485564;
  color: #fff;
  font-weight: normal;
  padding: 1rem 2rem;
 }

 td button {
   display: flex;
   align-items: center;
   padding: 12px 15px;
 
   border: 0;
   border-radius: 5px;
   cursor: pointer;
   transition: 0.4s;
  }

  .edit {
    background: #ECC94B;
    &:hover {
      background: #D69E2E;
    }
 }
  .delete {
    background: #e53e3e;
    &:hover {
      background: #C53030;
    }
 }

`



