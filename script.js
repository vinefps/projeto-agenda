const botaoEvento = document.querySelector('#eventos');
const botaoCancel = document.querySelector('#cancel');
const botaoSubmit = document.querySelector('#submit')
const formulario = document.querySelector('#formNovoEvento');
const formName = document.querySelector('#name');
const formDate = document.querySelector('#event');
const mainTabela = document.querySelector('.mainTabela');
const tabelaEventos = document.querySelector('#tabelaEventos');


botaoEvento.addEventListener('click', () =>{
    mainTabela.classList.toggle('hide');
})
botaoCancel.addEventListener('click', () =>{
    mainTabela.classList.add('hide');
})

formNovoEvento.addEventListener('submit', (e)=>{
    e.preventDefault();
})

let listaEventos = [];


botaoSubmit.addEventListener('click', () =>{
    let nomeEvento = formName.value;
    tabelaEventos.innerHTML = '';
    


    if(nomeEvento.trim().length === 0) {
        return alert('Campo vazio ou Inválido');
    }   
        else{
            listaEventos.push({
                nome: nomeEvento,
            });
            mainTabela.classList.remove('hide');                  
    };

    for(let i = 0;listaEventos.length > 0;i++){
        let evento = listaEventos[i];
        let linha = document.createElement('tr')
        let colunaNome = document.createElement('td')
        colunaNome.innerHTML = evento.nome
        linha.appendChild(colunaNome);
        tabelaEventos.appendChild(linha);      
    };    
    console.log(listaEventos)
});
    


window.addEventListener('load', () =>{
    if(listaEventos.length === 0){
        tabelaEventos.innerHTML = '<tr><td>Nenhum Evento Marcado</td></tr>'
        return  
    };
});


