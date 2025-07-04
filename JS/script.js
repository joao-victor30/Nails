// seção dos botões

function secao(secaoID) {
    const secoes = document.querySelectorAll('.sec') //Aqui eu chamo e seleciono todas as class com esse nome

    secoes.forEach(sec => {
        sec.classList.remove('ativa')   // aqui ele percorre com forEach as seções e utiliza remove para remover essa classe
    })

    document.getElementById(secaoID).classList.add('ativa')  //quando é clicado o botão utilizando o onClick ele adiciona essa classe
}


function toggleTabela(th) {
    const tabela = th.closest('table');
    const corpo = tabela.querySelector('tbody');

    if (corpo.style.display === 'table-row-group') {
        corpo.style.display = 'none';
    } else {
        corpo.style.display = 'table-row-group';
    }
}

