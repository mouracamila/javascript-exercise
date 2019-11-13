# Random Array

1. Crie um formulário para solicitar ao usuário um valor inteiro de 5 a 100.

2. Gere uma lista de números aleatórios que deve ter a quantidade de itens informados pelo usuário por meio do formulário. A lista deve serguir os seguintes critérios:

	* Os números devem estar armazenados na lista de forma aleatória;
	* Os números devem estar entre 1 e 50000;
	* Não podem haver números repetidos na lista;

3. Exiba os números gerados em formato de lista.---

4. Com a lista gerada e exibida o usuário pode realizar as seguintes operações com a mesma:

	* Filtrar a lista, exibindo apenas por números impares ou pares;
	* Filtrar a lista, exibindo apenas números primos;
	* Ordenar a lista, exibindo-a em forma crescente ou decrescente;
	* Restaurar a lista original;

> Lembre-se: toda as ações precisam atualizar a lista já exibida na tela, sem a necessidade de dar refresh.

5. Permitir o usuário passar o mouse sobre os números gerados e informar através de tooltip:

	* O número é par ou impar?
	* Qual é o seu número anterior e posterior na lista?
	* Qual é o valor deste número +1 e -1?
    * Qual a diferença entre o número atual e o seu número anterior e posterior na lista?

## Observações

- O usuário pode gerar uma nova lista a qualquer momento utilizando o formuário;
- Sempre que gerar uma lista todas as informações referentes a lista anterior devem ser removidas;
- Não esqueça da validação do formulário;
- Não precisa usar NPM/YARN você pode usar bibliotecas diretamente do CDN;
- Tente evitar usar bibliotecas para coisas simples;
