import { useState } from "react";
import ListaProdutos from "../../components/ListaProdutos";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


export default function Produto(){
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
          titulo:"Headset Gamer Havit",
          preco:"R$ 169,99",
          promocao:"29% off",
          especificacoes:["Alto-falante: 53 mm, ", "Resposta de Freqüência: 20 Hz a 20 khz, ", "Comprimento do cabo: 1.7 metros"],
          avaliacoes:"Avaliações: 1277",
          nota:"Nota: 4.78/5.0",
          linkImg: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F102770%2Fheadset-gamer-havit-drivers-53mm-hv-h2002d_headset-gamer-havit-drivers-53mm-hv-h2002d_1564056874_g.jpg&w=750&q=75"
      
        },
      
        {
          id: 6,
          titulo:"Memória RAM Kingston Fury Beast",
          preco:"R$ 329,99",
          promocao:"33% off",
          especificacoes:["Fonte de alimentação: VDD: 1,2 V Típico, ", "Temperatura de operação: 0ºC a + 70ºC, ", "Temperatura de armazenamento: -40ºC a + 85ºC"],
          avaliacoes:"Avaliações: 116",
          nota:"Nota: 4.91/5.0",
          linkImg:"https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F480529%2Fmemoria-kingston-fury-beast-rgb-16gb-3200mhz-ddr4-cl16-preto-kf432c16bb12a-16_1698350317_g.jpg&w=828&q=75" 
      
        },
      
        {
          id: 7,
          titulo:"Teclado Mecânico Gamer KBM!",
          preco:"R$ 209,99",
          promocao:"",
          especificacoes:["Cor: Preto, ", "Compatibilidade: Windows/ Mac /Linux, ", "Conectividade: USB A"],
          avaliacoes:"Avaliações: 11",
          nota:"Nota: 4.73/5.0",
          linkImg: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F472046%2Fteclado-mecanico-gamer-kbm-gaming-tg600-preto-60-e-abnt2-rgb-switch-gateron-red-kgtg600ptvr_1717444896_g.jpg&w=828&q=75"
      
        },
      
        {
          id: 8,
          titulo:"Teclado Mecânico Gamer HyperX Alloy MKW100",
          preco:"R$ 269,99",
          promocao:"7% off",
          especificacoes:["Iluminação RGB dinâmica por tecla, ", "Estrutura durável em alumínio, ", "Descanso para pulso removível"],
          avaliacoes:"Avaliações: 507",
          nota:"Nota: 4.58/5.0",
          linkImg: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F371586%2Fteclado-mecanico-gamer-hyperx-alloy-mkw100-rgb-switch-red-full-size-us-preto-4p5e1aa-aba_1722882381_g.jpg&w=1080&q=75"
      
        },

        {
            id: 9,
            titulo:"Gabinete Gamer Rise Mode Glass 06X",
            preco:"R$ 179,90",
            promocao:"15% off",
            especificacoes:["Cor: Preto, ", "Compatibilidade: Windows/ Mac /Linux, ", "Conectividade: USB A"],
            avaliacoes:"Avaliações: 11",
            nota:"Nota: 4.73/5.0",
            linkImg: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F324516%2Fgabinete-gamer-rise-mode-glass-06x-lateral-em-vidro-fume-e-frontal-em-vidro-temperado-preto-rm-ca-06x-fb_1660589149_g.jpg&w=828&q=75"
        
          },

          {
            id: 10,
            titulo:"SSD 1 TB Corsair Force MP600 PRO XT",
            preco:"R$ 798,99",
            promocao:"10% off",
            especificacoes:["Capacidade não formatada do SSD: 1 TB, ", "Suporte SSD Smart: Sim, ", " Interface SSD: PCIe Gen 4.0 x4"],
            avaliacoes:"Avaliações: 39",
            nota:"Nota: 5.0/5.0",
            linkImg: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F232237%2Fssd-corsair-force-mp600-pro-xt-1tb-m-2-pcie-nvme-leituras-7100mb-s-e-gravacoes-6800mb-s-cssd-f1000gbmp600pxt_1632338556_g.jpg&w=1080&q=75"
        
          },

          {
            id: 11,
            titulo:"Kit Com 3 Ventoinhas Rise Mode Energy",
            preco:"R$ 74,99",
            promocao:"37% off",
            especificacoes:["Cor do Led: ARGB, ", "Fluxo de ar do Fan: 50 CFM, ", "Velocidade do fan: 1650 RPM"],
            avaliacoes:"Avaliações: 617",
            nota:"Nota: 4.69/5.0",
            linkImg: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F153647%2Fcooler-fan-rise-mode-energy-3-unidades-120mm-argb-preto-fn-02-rgb-5v_1663768314_g.jpg&w=1200&q=75"
        
          },

          {
            id: 12,
            titulo:"Robô Aspirador de Pó KaBuM! Smart 700",
            preco:"R$ 1.229,90",
            promocao:"",
            especificacoes:["Compatível com Alexa e Google Assistant, ", "Potência nominal: 28W, ", "Conectividade: WI-FI 2.4GHz."],
            avaliacoes:"Avaloiações: 1090",
            nota:"Nota: 4.44/5.0",
            linkImg: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F155444%2Faspirador-de-po-robo-ir-360-kabum-smart-700-preto_1628768893_g.jpg&w=1920&q=75"
        
          },

          {
            id: 13,
            titulo:"Placa de Vídeo RTX 3060 1-Click OC Galax NVIDIA GeForce",
            preco:"R$ 1.999,99",
            promocao:"",
            especificacoes:["Ray Tracing Cores de 2ª geração, ", "Memória Gráfica GDDR6, ", "NVIDIA GeForce Experience"],
            avaliacoes:"Avaliações: 183",
            nota:"Nota: 4.73/5.0",
            linkImg: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F150657%2Fplaca-de-video-galax-geforce-rtx-3060-1-click-oc-15-gbps-12gb-gddr6-ray-tracing-dlss-36nol7md1voc_1614253646_g.jpg&w=1080&q=75"
        
          },

          {
            id: 14,
            titulo:"Fonte MSI MAG A650BN",
            preco:"R$ 289,99",
            promocao:"",
            especificacoes:["Potência Nominal: 650W, ", "Classificação da eficiência: 80 Plus Bronze (até 85%), ", "Tipo de PFC: PFC Ativo"],
            avaliacoes:"Avaliações: 2312",
            nota:"Nota: 4.8/5.0",
            linkImg: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F369658%2Ffonte-msi-mag-a650bn-atx-650w-80-plus-bronze-pfc-ativo-entrada-bivolt-preto-306-7zp2b22-ce0_1665770996_g.jpg&w=1080&q=75"
        
          },

          {
            id: 15,
            titulo:"Fonte XPG Kyber",
            preco:"R$ 519,99",
            promocao:"18% off",
            especificacoes:["Tensão de entrada: 100V-240V, ", "Temperatura operacional: 40 °C, ", "Rolamento da ventoinha: FDB"],
            avaliacoes:"Avaliações: 99",
            nota:"Nota: 4.77/5.0",
            linkImg: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F471343%2Ffonte-xpg-kyber-850w-80-plus-gold-bivolt-preto-kyber850g-bkcbr_1698434934_g.jpg&w=1920&q=75"
        
          },
      
      
      ])
    return(
      <>
      <Header/>
        <div>
             <ListaProdutos lista={listaProdutos}/>
        </div>
       <Footer/>
    </>
    );
}