
export default function ListaProdutos({ lista }){

  return(
    <div className="container-Produtos">
        { lista.map((prod) => 
        <div id="Box-cards" key={prod.id} >
            <img id="cards" src={prod.linkImg}/>
            <p class="titulo">{prod.titulo}</p>
            <p class="titulo">{prod.preco}</p>
            <p class="titulo">{prod.promocao}</p>
            <p class="titulo">{prod.especificacoes}</p>
            <p class="titulo">{prod.avaliacoes}</p>
            <p class="titulo">{prod.nota}</p>
            <div className="container-button">
            <button className="button">Comprar</button>
            </div>
            
            
        </div>
      )}
    </div>
  );
}

