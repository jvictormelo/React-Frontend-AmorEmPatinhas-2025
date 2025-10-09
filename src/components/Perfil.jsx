const Perfil = () => {
  const nome = "Ester";
    const imgUrl = "https://dthezntil550i.cloudfront.net/lk/latest/lk1810260217520800002264421/1280_960/eebd13c4-0167-4252-af7b-7beeeee03efd.png";
    const descricao = "Apaixonada por React";
    return (
        <div>
            <h1>{nome}</h1>
            <img src={imgUrl} alt="Foto de perfil" 
            style={{
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                border: "4px solid #222",
                objectFit: "cover"

            }}
            />
            <p>{descricao}</p>
        </div>
    )

}

export default Perfil