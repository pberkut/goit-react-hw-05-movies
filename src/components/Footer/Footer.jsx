import { FooterStyled, Year } from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyled className="footer">
      <a href="mailto:pavlo.berkut@gmail.com">pavlo.berkut@gmail.com</a>
      <Year>©️ 2023</Year>
    </FooterStyled>
  );
};

export default Footer;
