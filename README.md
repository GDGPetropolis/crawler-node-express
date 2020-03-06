#Crawler Pokemon atributos

Estou desenvolvendo um crawler para pegar informações de atributos pokemon que não possuem em sua api aberta de maneira totalmente gratuita, usando NodeJs com puppeter.

##O que é um Crawler

Web crawler, ou bot, é um algoritmo usado para analisar o código de um website em busca de informações, e depois usá-las para gerar insights ou classificar os dados encontrados.
Um exemplo muito clássico de web crawler está nos sites de pesquisa, como Google, Bing e outros.
Pense em como se faz uma pesquisa nesses motores de busca. Para cada expressão pesquisada, aparece uma lista de sites, blogs e vídeos do YouTube.

##Porque usar um Crawler?

A maioria das api retornam dados diversos e nem sempre retornam o que buscamos, sem contar que a algumas api para termos mais acesso precisamos pagar por uma assinatura o que limita muito nossa busca, já com um crawler podemos usar webscraping e de uma forma simples retornar tudo que queremos de qualquer página. Com um crawler voçê pode fazer um bot de automação de acessos, fazer raspagem de dados para usar em um programa e até mesmo construir uma api sem o trabalho de registrar tudo um por um.

## Instalação :smiley_cat:

Primeiro tenha certeza que você tem instado o [Yarn](https://yarnpkg.com) instalado em seu computador.
Em seguida navegue até a pasta Web e:
    `yarn`

Para instalar as dependências e em seguida:
    `node crawlerEV.js`

Ele vai navegar entre as paginas preencher o console com o resultado e retorna os dados em um arquivo JSON
