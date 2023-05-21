> Iniciando node
~~~
npm init -y
~~~
> Iniciando typeScript
~~~
tsc --init
~~~
> Dependências 
~~~
npm install config dotenv express express-validator mongoose morgan winston
~~~
> Dependências de desenvolvimento
~~~
npm install @types/config @types/express @types/mongoose @types/morgan @types/node ts-node-dev typescript --save-dev
~~~
> Script de inicialização com auto refresh
~~~
"dev": "ts-node-dev --respawn --transpile-only src/app.ts"
~~~



