import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import Header from "../components/Header";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './globals.css'
import ListaProdutos from "../components/ListaProdutos";
import Footer from "../components/Footer";
export default function Home(){
  const [listaProdutos, setLista] = useState([
    {
      id: 1,
      titulo:"Processador AMD Ryzen 7 5700X3D",
      preco:"R$ 1.396,99",
      promocao:"10% off",
      especificacoes:["Temperatura máxima: 90°C, ", "Contagem de soquetes: 1P, ", "Pacote: AM4"],
      avaliacoes:"Avaliações: 212",
      nota:"Nota: 4.85/5.0",
      linkImg: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F520369%2Fprocessador-amd-ryzen-7-5700x3d-3-6-ghz-4-1ghz-max-turbo-cache-4mb-8-nucleos-16-threads-am4-video-integrado-100-100001503wof_1708023990_g.jpg&w=1920&q=75"
    },
    
    {
     id: 2,
     titulo:"Processador Intel Core i5-12400F",
    preco:"R$ 881,99",
    promocao:"10% off",
    especificacoes:["Soquete: LGA1700, ", "Capacidade máxima da memória: 128GB, ", "Potência turbo máxima (W): 117"],
    avaliacoes:"Avaliações: 227",
    nota:"Nota: 4.81/5.0",
    linkImg: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F283718%2Fprocessador-intel-core-i5-12400f-cache-xmb-xghz-xghz-max-turbo-lga-1700-bx8071512400f_1640094446_g.jpg&w=2048&q=75"
    
    },
     
    {
    id: 3,
     titulo:"Memória RAM Rise Mode Z",
    preco:"R$ 149,99",
    promocao:"10% off",
    especificacoes:["DDR4-3200, ", "3200Mhz, ", "Capacidade: 8GB"],
    avaliacoes:"Avaliações: 328",
    nota:"Nota: 4.67/5.0",
    linkImg: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F383892%2Fmemoria-ram-rise-mode-z-8gb-3200mhz-ddr4-cl15-preto-rm-d4-8g-3200z-_1667508635_g.jpg&w=750&q=75"
  
    },
   
    {
       id: 4,
       titulo:"Cadeira Gamer KBM! GAMING Tempest CG600",
       preco:"R$ 849,90",
       promocao:"5% off",
       especificacoes:["Estrutura: Aço, ", "Temperatura de operação: 0ºC a + 70ºC, ", "Temperatura de armazenamento: -40ºC a + 85ºC"],
       avaliacoes:"Avaliações: 116",
       nota:"Nota: 4.91/5.0",
       linkImg: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F471925%2Fcadeira-gamer-kbm-gaming-cg600-preta-com-almofadas-descanso-para-pernas-retratil-reclinavel-kgcg600pt_1700828329_g.jpg&w=1200&q=75"

  
    },
  
    {
      id: 5,
      titulo:"Memória RAM Kingston Fury Beast",
      preco:"R$ 329,99",
      promocao:"",
      especificacoes:["Fonte de alimentação: VDD: 1,2 V Típico, ", "Temperatura de operação: 0ºC a + 70ºC, ", "Temperatura de armazenamento: -40ºC a + 85ºC"],
      avaliacoes:"Avaliações: 116",
      nota:"Nota: 4.91/5.0",
      linkImg: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F102770%2Fheadset-gamer-havit-drivers-53mm-hv-h2002d_headset-gamer-havit-drivers-53mm-hv-h2002d_1564056874_g.jpg&w=750&q=75"
  
    },

  
  
    ])
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
<ListaProdutos lista={listaProdutos}/>

<Footer/>
     </>
    );
}
