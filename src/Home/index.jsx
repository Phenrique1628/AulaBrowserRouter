import { Carousel } from "react-responsive-carousel";
import Header from "./compomnents/Header";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './globals.css'
import Footer from "./compomnents/Footer";
export default function Home(){
    return(
      <>  
      <Header/>
    
      <div id="cabecalho">
      <img id="logo" src="https://static.kabum.com.br/conteudo/icons/logo.svg" alt="logo da kabum" />
      </div>

<Carousel 
infiniteLoop
useKeyboardArrows
autoplay
showArrows={true}
showStatus={false}
showThumbs={false}
dynamicHeight
>

<div class="image">

  <img src="https://www.kabum.com.br/core/_next/image?url=https://themes.kabum.com.br/conteudo/layout/5128/1723418177.png&w=1920&h=400&q=100" alt="banner1" />

</div>

<div class="image">

  <img src="https://www.kabum.com.br/core/_next/image?url=https://themes.kabum.com.br/conteudo/layout/5124/1723417186.png&w=1920&h=400&q=100" alt="banner2" />

</div>

<div class="image">

  <img src="https://www.kabum.com.br/core/_next/image?url=https://themes.kabum.com.br/conteudo/layout/5126/1723417719.png&w=1920&h=400&q=100" alt="banner3" />

</div>


</Carousel>
<Footer/>
     </>
    );
}
