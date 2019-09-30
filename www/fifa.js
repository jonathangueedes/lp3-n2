document.querySelector('#player').addEventListener("click", function(){
    obterdados();
});

function obterdados(){
    let url = 'https://www.easports.com/fifa/ultimate-team/api/fut/item?name=icardi'

    
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function(){

        if(this.status == 200 && this.readyState == 4){
            let dados = JSON.parse(this.responseText);
            console.log(dados.lastName);
            let resultado = document.querySelector('#resultado');
            resultado = '';

            for(let item of dados.lastName){
                resultado.innerHTML += '<li>'
            }

        }
    }
}

