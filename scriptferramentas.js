const texto1 = document.querySelector("#input");
const texto2 = document.querySelector("#output");
let opcao;
let opcoes;

texto1.addEventListener("input", ()=>{converter(modo);});
if(modo == "case"){
    opcoes = document.querySelector("#opcoes");
    opcoes.addEventListener("change", () => {
        converter("case");
    });
}else if(modo == "xor"){
    opcoes = document.querySelector("#xor");
    opcoes.addEventListener("input", () => {
        converter("xor");
    });
}

function converter(mode){
    if(mode == "case"){
        opcao = opcoes.value
        valor = "";
        let input = texto1.value
        if(opcao == "lc"){
            output.value = input.toLowerCase()
            return;
        }else if(opcao == "uc"){
            output.value = input.toUpperCase()
            return;
        }else if(opcao == "ac"){
            for(let i = 0; i < input.length; i++){
                if(i % 2 == 0){
                    valor += input[i].toLowerCase()
                }else{
                    valor += input[i].toUpperCase()
                }
            }
        }else if(opcao == "cc"){
            inputarr = input.toLowerCase()
            output.value = inputarr.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
            return;
            // fonte: https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/
        }else if(opcao == "ic"){
            for(let i = 0; i < input.length; i++){
                if(input[i] == input[i].toUpperCase()){
                    valor += input[i].toLowerCase()
                }else{
                    valor += input[i].toUpperCase()
                }
            }
        }
        output.value = valor;
        return;
    }else if(mode == "xor"){
        chave = opcoes.value
        if(opcoes.value){
            chave = opcoes.value
        }else{
            chave = String.fromCharCode(0)
        }
        texto2.value = fazerxor(texto1.value, chave)
    }
}
function fazerxor(string, chave){
    let xoro = "";
    for(let i = 0; i < string.length; i++){
        xoro += String.fromCharCode(string[i].charCodeAt(0) ^ chave[i % chave.length].charCodeAt(0));
    }
    return xoro;
}