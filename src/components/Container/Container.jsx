import { ContainerStyled } from './Container.styled';

const Container = ({ children }) => (
  <ContainerStyled className="Container">{children}</ContainerStyled>
);

export default Container;
