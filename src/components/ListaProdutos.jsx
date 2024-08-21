
export default function ListaProdutos({ lista }){

  return(
    <div>
        { lista.map((prod) => 
        <div key={prod.id} >
            <p>{prod.titulo}</p>
            <p>{prod.preco}</p>
            <p>{prod.promocao}</p>
            <p>{prod.especificacoes}</p>
            <p>{prod.avaliacoes}</p>
            <p>{prod.nota}</p>
            <img src={prod.linkImg}/>
        </div>
      )}
    </div>
  );
}

