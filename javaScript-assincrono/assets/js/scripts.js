//armazenar o endereço da api em constante
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
//captura o botão
const catBtn = document.getElementById('change-cat');
//captura a imagem
const catImg = document.getElementById('cat');

//carregar os gatinhos
const getCats = async()=>{
/*  try{
    const data = await fetch(BASE_URL);//deve retornar uma promise
    const json = await data.json();
    return json.webpurl;
  }
  catch(e){
    console.log(e.message);
  }*/
  const data = await fetch(BASE_URL)
  .then((res)=> res.json())
  .catch((e)=> console.log(e));

  return data.webpurl;
};

const loadImg = async()=>{
  catImg.src = await getCats();
}
catBtn.addEventListener('click', loadImg);

loadImg();