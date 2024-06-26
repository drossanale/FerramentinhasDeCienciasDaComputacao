/* Essa parte do código foi parcialmente, feita pelo ChatGPT porque eu tava com preguiça de reescrever os elementos, ninguém merece */
const includes = {
    "nav":
    `<nav> 
        <a href='./casetransform.html'>CaSe TrAnSfOrM</a>
        <a href='./xor.html'>Xor</a>
    </nav>`,
    "footer":
    `<footer>
        <p>
            Site feito por Alessandro Rodrigues Pereira da Silva<br>Email: <a href="mailto:alessans@usp.br">alessans@usp.br</a>
            <br>
            Design feito por <a href="">Scarlett</a>
        </p>
    </footer>`







}


function includeHTML() {
    var z, i, elmnt, file;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        elmnt.innerHTML = includes[file]
      }
    }
  }
  

document.addEventListener("DOMContentLoaded", includeHTML);