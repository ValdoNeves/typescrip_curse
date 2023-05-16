Instalando typescript

~~~
npm install typescript -g
~~~

provavelmente será necessario da permissão de super usuario, basta utilizar o sudo na frente do codigo

---------

para configurar o typescript podemos utilizar o comando
~~~
tsc --init
~~~

e um arquivo de configuração será gerado

----------------------

compilando um arquivo .ts no terminal utilizamos 
~~~
tsc nomeDoArquivo.ts
~~~
e assim o arquivo .js será criado e para rodar basta utilizarmos o padrão node.


dessa forma a cada modificação no codigo será necessario recompilar o mesmo, logo podemos fazer isso de forma automatizada com o comando watch

~~~
tsc -w 
~~~

assim a cada modificação o sistema irá recompilar automaticamente