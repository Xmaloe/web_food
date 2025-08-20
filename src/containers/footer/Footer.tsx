import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, FooterLogo, FooterText, SocialLinks, SocialLinksItens } from './FooterStyles'

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLogo src="/images/logo.png" alt="Logo" />
      <SocialLinks>
        <SocialLinksItens href="https://github.com/Xmaloe" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialLinksItens>
        <SocialLinksItens href="https://www.linkedin.com/in/karen-aprigio-moraes/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialLinksItens>
        <SocialLinksItens href="https://www.instagram.com/_xmaloe/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialLinksItens>
      </SocialLinks>
      <FooterText>
        A efood é uma plataforma para fins acadêmicos. 
      </FooterText>
    </FooterContainer>
  )
}
