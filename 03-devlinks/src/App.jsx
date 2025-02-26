import "./App.css";
import foto from "./img/chococatColor.jpg";


import Perfil from "./components/perfil/perfil"
import Switch from "./components/switch/Switch"
import Links from "./components/links/Links"
import SocialLinks from "./components/socialLinks/SocialLinks";
import Rodape from "./components/rodape/Rodape";
import { useState } from "react";

const App = () => {
const [isLight,setIsLight] = useState(true);

const troca = () => {
  setIsLight(!isLight);
}

  return (
<div id="App" className={isLight && "light"}>
   <Perfil fotoPerfil={foto}>@ElLorennaXD</Perfil>
   <Switch troca={troca} isLight={isLight}/>

   <ul>
   <Links links={"https://github.com/LorennaSenai2A"}>GitHub</Links>
   <Links links={"https://www.instagram.com/lorenazanon.dix/?next=%2F"}>Instagram</Links>
   <Links links={"https://www.figma.com/design/ePEmC8G8cGb1xnF7p84xAY/Primeiro-App?node-id=0-1&p=f&t=mbr5fodB3azEoQN6-0"}>Figma</Links>
   <Links links={"https://br.pinterest.com/loreninhazanon/"}>Pinterest</Links>
   </ul>

<div id="socialLinks">
  <SocialLinks 
  link={"https://github.com/"}
  icon={"logo-github"}
  />
  <SocialLinks
    link={"https://www.instagram.com/"}
    icon={"logo-instagram"}
  />
  <SocialLinks 
    link={"https://www.figma.com/login"}
    icon={"logo-figma"}
  />
  <SocialLinks 
    link={"https://br.pinterest.com/"}
    icon={"logo-pinterest"}
  /> 

</div>
<Rodape>
  Lorenna
</Rodape>
   </div>
  );
};

export default App;
