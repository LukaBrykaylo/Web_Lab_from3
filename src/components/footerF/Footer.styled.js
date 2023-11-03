import styled from '../styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  background-color: #242424;
  color: #fff;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 1;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
`;

const FooterLogo = styled.img`
  max-width: 50px;
  padding-right: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;

  padding-left: 510px;
  padding-right: 100px;

  a {
    color: #fff;
    text-decoration: none;
    margin-right: 10px;
  }
`;

const FacebookIcon = styled(FontAwesomeIcon).attrs({ icon: faFacebook })`
  font-size: 24px;
`;

const TwitterIcon = styled(FontAwesomeIcon).attrs({ icon: faTwitter })`
  font-size: 24px;
  padding-left: 20px;
`;

const YoutubeIcon = styled(FontAwesomeIcon).attrs({ icon: faYoutube })`
  font-size: 24px;
  padding-left: 20px;
`;


export { YoutubeIcon, TwitterIcon, FacebookIcon, SocialIcons, FooterContainer, FooterLogo };
