import { useState } from "react";
import ListaProdutos from "../../components/ListaProdutos";

export default function Produto(){
    const [listaProdutos, setLista] = useState([
        {
          id: 1,
          titulo:"Processador AMD Ryzen 7 5700X3D, 3.6 GHz, (4.1GHz Max Turbo), Cachê 4MB, 8 Núcleos, 16 Threads, AM4 - 100-100001503WOF",
          preco:"R$ 1.396,99",
          promocao:"10% off",
          especificacoes:["Temperatura máxima: 90°C", "Contagem de soquetes: 1P", "Pacote: AM4"],
          avaliacoes:"212",
          nota:"4.85/5.0",
          linkImg: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F520369%2Fprocessador-amd-ryzen-7-5700x3d-3-6-ghz-4-1ghz-max-turbo-cache-4mb-8-nucleos-16-threads-am4-video-integrado-100-100001503wof_1708023990_g.jpg&w=1920&q=75"
        },
        
        {
         id: 2,
         titulo:"Processador Intel Core i5-12400F, 2.5GHz (4.4GHz Max Turbo), Cache 18MB, LGA 1700 - BX8071512400F",
        preco:"R$ 881,99",
        promocao:"10% off",
        especificacoes:["Soquete: LGA1700", "Capacidade máxima da memória: 128GB", "Potência turbo máxima (W): 117"],
        avaliacoes:"227",
        nota:"4.81/5.0",
        
        },
         
        {
        id: 3,
         titulo:"Memória RAM Rise Mode Z, 8GB, 3200MHz, DDR4, CL16, Preto - RM-D4-8G-3200Z",
        preco:"R$ 149,99",
        promocao:"10% off",
        especificacoes:["DDR4-3200", "3200Mhz", "Capacidade: 8GB"],
        avaliacoes:"328",
        nota:"4.67/5.0"
      
        },
       
        {
           id: 4,
           titulo:"Cadeira Gamer KBM! GAMING Tempest CG600, Preta, Com Almofadas, Descanso Para Pernas Retrátil, Reclinável - KGCG600PT",
           preco:"R$ 849,90",
           promocao:"5% off",
           especificacoes:["Estrutura: Aço", "Temperatura de operação: 0ºC a + 70ºC", "Temperatura de armazenamento: -40ºC a + 85ºC"],
           avaliacoes:"116",
           nota:"4.91/5.0"
      
        },
      
        {
          id: 5,
          titulo:"Memória RAM Kingston Fury Beast, RGB, 16GB, 3200MHz, DDR4, CL16, Preto - KF432C16BB12A/16",
          preco:"R$ 329,99",
          promocao:"",
          especificacoes:["Fonte de alimentação: VDD: 1,2 V Típico", "Temperatura de operação: 0ºC a + 70ºC", "Temperatura de armazenamento: -40ºC a + 85ºC"],
          avaliacoes:"116",
          nota:"4.91/5.0",
      
        },
      
        {
          id: 6,
          titulo:"Memória RAM Kingston Fury Beast, RGB, 16GB, 3200MHz, DDR4, CL16, Preto - KF432C16BB12A/16",
          preco:"R$ 329,99",
          promocao:"33% off",
          especificacoes:["Fonte de alimentação: VDD: 1,2 V Típico", "Temperatura de operação: 0ºC a + 70ºC", "Temperatura de armazenamento: -40ºC a + 85ºC"],
          avaliacoes:"116",
          nota:"4.91/5.0",
      
        },
      
        {
          id: 7,
          titulo:"Teclado Mecânico Gamer KBM! GAMING TG600, Preto, 60% e ABNT2, RGB, Switch Gateron Red - KGTG600PTVR",
          preco:"R$ 209,99",
          promocao:"",
          especificacoes:["Cor: Preto", "Compatibilidade: Windows/ Mac /Linux", "Conectividade: USB A"],
          avaliacoes:"11",
          nota:"4.73/5.0",
      
        },
      
        {
          id: 8,
          titulo:"Teclado Mecânico Gamer KBM! GAMING TG600, Preto, 60% e ABNT2, RGB, Switch Gateron Red - KGTG600PTVR",
          preco:"R$ 209,99",
          promocao:"",
          especificacoes:["Cor: Preto", "Compatibilidade: Windows/ Mac /Linux", "Conectividade: USB A"],
          avaliacoes:"11",
          nota:"4.73/5.0",
      
        },

        {
            id: 9,
            titulo:"Gabinete Gamer Rise Mode Glass 06X, Mid Tower, Lateral em Vidro Fumê e Frontal em Vidro Temperado, Preto - RM-CA-06X-FB",
            preco:"R$ 179,90",
            promocao:"",
            especificacoes:["Cor: Preto", "Compatibilidade: Windows/ Mac /Linux", "Conectividade: USB A"],
            avaliacoes:"11",
            nota:"4.73/5.0",
        
          },

          {
            id: 10,
            titulo:"Teclado Mecânico Gamer KBM! GAMING TG600, Preto, 60% e ABNT2, RGB, Switch Gateron Red - KGTG600PTVR",
            preco:"R$ 209,99",
            promocao:"10% off",
            especificacoes:["Cor: Preto", "Compatibilidade: Windows/ Mac /Linux", "Conectividade: USB A"],
            avaliacoes:"11",
            nota:"4.73/5.0",
        
          },

          {
            id: 11,
            titulo:"Teclado Mecânico Gamer KBM! GAMING TG600, Preto, 60% e ABNT2, RGB, Switch Gateron Red - KGTG600PTVR",
            preco:"R$ 209,99",
            promocao:"37% off",
            especificacoes:["Cor: Preto", "Compatibilidade: Windows/ Mac /Linux", "Conectividade: USB A"],
            avaliacoes:"11",
            nota:"4.73/5.0",
        
          },

          {
            id: 12,
            titulo:"Teclado Mecânico Gamer KBM! GAMING TG600, Preto, 60% e ABNT2, RGB, Switch Gateron Red - KGTG600PTVR",
            preco:"R$ 209,99",
            promocao:"",
            especificacoes:["Cor: Preto", "Compatibilidade: Windows/ Mac /Linux", "Conectividade: USB A"],
            avaliacoes:"11",
            nota:"4.73/5.0",
        
          },

          {
            id: 13,
            titulo:"Teclado Mecânico Gamer KBM! GAMING TG600, Preto, 60% e ABNT2, RGB, Switch Gateron Red - KGTG600PTVR",
            preco:"R$ 209,99",
            promocao:"",
            especificacoes:["Cor: Preto", "Compatibilidade: Windows/ Mac /Linux", "Conectividade: USB A"],
            avaliacoes:"11",
            nota:"4.73/5.0",
        
          },

          {
            id: 14,
            titulo:"Teclado Mecânico Gamer KBM! GAMING TG600, Preto, 60% e ABNT2, RGB, Switch Gateron Red - KGTG600PTVR",
            preco:"R$ 209,99",
            promocao:"14% off",
            especificacoes:["Cor: Preto", "Compatibilidade: Windows/ Mac /Linux", "Conectividade: USB A"],
            avaliacoes:"11",
            nota:"4.73/5.0",
        
          },

          {
            id: 15,
            titulo:"Teclado Mecânico Gamer KBM! GAMING TG600, Preto, 60% e ABNT2, RGB, Switch Gateron Red - KGTG600PTVR",
            preco:"R$ 209,99",
            promocao:"15% off",
            especificacoes:["Cor: Preto", "Compatibilidade: Windows/ Mac /Linux", "Conectividade: USB A"],
            avaliacoes:"11",
            nota:"4.73/5.0",
        
          },
      
      
      ])
    return(
        <div>
             <ListaProdutos lista={listaProdutos}/>
        </div>
       
    );
}