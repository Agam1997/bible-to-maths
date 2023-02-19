import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 80px 60px;
  background: #d8d3c9;
  width: 100%;
  
   
  @media (max-width: 934px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin-left: 60%;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 934px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: black;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: #c281d1;
      transition: 200ms ease-in;
  }
  @media (max-width: 934px) {
    font-size: 18px;
  }
`;
   
export const Heading = styled.p`
  
  color: black;
  margin-bottom: 40px;
`;