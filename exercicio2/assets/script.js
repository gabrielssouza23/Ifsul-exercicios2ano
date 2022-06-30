/*• Usando somente JS (sem editar o
arquivo HTML).
• Mostre na tela 10 caixas cinzas.
• Dentro das caixas os múltiplos de 5.
• Use uma repetição e o
insertAdjacentHTML para inserir as
caixas.
• Um emoji de alien 👽 no início e fim
da sequência.
• Siga o exemplo ao lado. */

const myDiv = document.createElement('div');
myDiv.innerHTML = "👽";
document.body.insertAdjacentElement('beforeend', myDiv);  

for (var i = 0; i < 10; i++){
    let caixa + i = createElement('div'); 
}