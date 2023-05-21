>Iniciando estrutura Node
~~~
npm init
~~~
>Iniciando TypeScript
~~~
npx tsc --init
~~~
> Dependências de desenvolvimento
~~~
npm install @types/express @types/node ts-node-dev typescript --save-dev
~~~

> Dependência
~~~
npm install express
~~~

> Adicionando transpilação para javaScript e rodando o código
~~~
"dev": "ts-node-dev --respawn --transpile-only src/app.ts"
~~~