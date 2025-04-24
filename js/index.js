import { cidades } from "./bd.js"

// Selecionar os botões
let btns = document.querySelectorAll('button')


btns.forEach(btn =>{
    btn.onclick = pressButton
})
// btns[0].onclick = pressButton
// btns[1].onclick = pressButton
// btns[2].onclick = pressButton
// btns[3].onclick = pressButton
// btns[4].onclick = pressButton



function pressButton(e){
    // origem do evento
    let alvo = e.target

    let value = parseInt(alvo.value)
    
    // seleção
    let h2 = document.querySelector('h2')
    let img = document.querySelector('img')
    let descricao = document.querySelector('p')

    let obj = editarObjeto(value)
     h2.textContent = obj.h2
     img.src = obj.img
     descricao.textContent = obj.descricao
}


function editarObjeto(value){
    var obj = {
        h2: cidades[value-1].titulo,
        img: cidades[value-1].img,
        descricao: cidades[value-1].descricao
    }

    // switch (value) {
    //     case 1:
    //         obj.h2 = cidades[0].titulo
    //         obj.img = cidades[0].img
    //         obj.descricao = cidades[0].descricao
    //         break;
    //     case 2:
    //         obj.h2 = cidades[1].titulo
    //         obj.img = cidades[1].img
    //         obj.descricao = cidades[1].descricao
    //         break;
    //     case 3:
    //         obj.h2 = cidades[2].titulo
    //         obj.img = cidades[2].img
    //         obj.descricao = cidades[2].descricao
    //         break;
    //     case 4:
    //         obj.h2 = cidades[3].titulo
    //         obj.img = cidades[3].img
    //         obj.descricao = cidades[3].descricao
    //         break;
    //     case 5:
    //         obj.h2 = cidades[4].titulo
    //         obj.img = cidades[4].img
    //         obj.descricao = cidades[4].descricao
    //         break;
    //     case 6:
    //         obj.h2 = cidades[5].titulo
    //         obj.img = cidades[5].img
    //         obj.descricao = cidades[5].descricao
    //         break;
    // }

    return obj
}

document.querySelector('#botaoSurpresa').addEventListener('click', () => {
    const musica = document.querySelector('#musicaTema');
    const mensagem = document.querySelector('#mensagemAfetiva');

    musica.play();
 
    mensagem.style.display = 'block';
    mensagem.style.animation = 'surgir 0.6s ease forwards';
  
    setTimeout(() => {
      mensagem.style.display = 'none';
      mensagem.style.animation = '';
    }, 9000);
  });
  

  const button = document.getElementById('confetti-btn');

  button.addEventListener('click', () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  });
  