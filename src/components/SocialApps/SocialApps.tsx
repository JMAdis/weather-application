import "./SocialApps.scss";
import { SocialIcon } from "react-social-icons";
import 'react-social-icons/facebook'
import 'react-social-icons/twitter'
import 'react-social-icons/linkedin'
import 'react-social-icons/youtube'
import 'react-social-icons/instagram'
import 'react-social-icons/pinterest'

const SocialApps = () => {
  return (
    <div className="app-container">
        <SocialIcon url="https://en-gb.facebook.com/" target="_blank" />
        <SocialIcon url="https://twitter.com/?lang=en" target="_blank"/>
        <SocialIcon url="https://www.linkedin.com/feed/" target="_blank"/>
        <SocialIcon url="https://www.youtube.co.uk/" target="_blank"/>
        <SocialIcon url="https://www.instagram.com/" target="_blank"/>
        <SocialIcon url="https://www.pinterest.co.uk/" target="_blank"/>
        <SocialIcon network="email" href="mailto:jessicaadis7@gmail.com?subject=Great Job!&body=I really like your project!" target="_blank" rel="noopener noreferrer" />
        <SocialIcon url="https://github.com/JMAdis" target="_blank"/>
        <SocialIcon url="https://web.whatsapp.com/" target="_blank"/>
    </div>
  );
};

export default SocialApps;
