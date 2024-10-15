function insercao(v) {
    for (var i = 1; i < v.length; i++) {
        var elemento = v[i]; //O elemento que está sendo inserido na posição correta
        var pos = i;
        // Enquanto a posição for maior que 0 e o nome anterior for maior que o nome atual(em ordem alfabética e por idade)
        while (pos > 0 && (v[pos - 1].nome > elemento.nome ||
            (v[pos - 1].nome === elemento.nome && v[pos - 1].idade > elemento.idade))) {
            v[pos] = v[pos - 1]; // Move o elemento anterior para a direita
            pos = pos - 1; // Reduz uma posição
            //(só pra fazer debug)     
            //console.log(`Alteração na posição ${pos + 1}:`, v);
        }
        v[pos] = elemento; //Insere o elemento na posição correta
        //(só pra fazer debug) 
        //console.log(`Lista após inserir o elemento na posição ${pos}:`, v, '----------------------------');
    }
    return v;
}
// Exemplo
var pessoas = [
    { nome: "Pollyana", idade: 29 },
    { nome: "Matheus", idade: 31 },
    { nome: "Mariana", idade: 25 },
    { nome: "Pedro", idade: 33 },
    { nome: "Analice", idade: 29 },
    { nome: "Analice", idade: 19 },
    { nome: "Pedro", idade: 18 }
];
console.log(insercao(pessoas));
