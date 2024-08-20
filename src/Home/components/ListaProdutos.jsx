import { useState } from "react";
import "/scr/globals.css"
export default function ListaProdutos(){
 const [ListaProdutos, setLista] = useState([
  {
    id: 1,
    titulo1:"Processador AMD Ryzen 7 5700X3D, 3.6 GHz, (4.1GHz Max Turbo), Cachê 4MB, 8 Núcleos, 16 Threads, AM4 - 100-100001503WOF",
    preco1:"R$ 1.396,99",
    promocao1:"10% off",
    especificacoes1:["Temperatura máxima: 90°C", "Contagem de soquetes: 1P", "Pacote: AM4"],
    avaliacoes1:"212",
    nota1:"4.85/5.0",
    linkImg: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F520369%2Fprocessador-amd-ryzen-7-5700x3d-3-6-ghz-4-1ghz-max-turbo-cache-4mb-8-nucleos-16-threads-am4-video-integrado-100-100001503wof_1708023990_g.jpg&w=1920&q=75"
  }
  
])
const [ListaProdutos, setPedidos] = useState([]);

return (

<div id="cardsDosProdutos">

{

ListaProdutos.map((produto) =>







)

}



</div>



);












}


