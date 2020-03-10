la configuration

1 on refait un dossier vide
dans un terminal "mkdir nom du dossier"

2 pour faire le repos git
"git init" dans le terminal en etant dans le dossier

"touch .gitignore" pour creer un gitignore

3 utiliser npm ou yarn (ici yarn)

"yarn init"

repondre au questions: en validant ou non
name: nom du dossier
version
description:
entry point: index.js est suggéré
repository url:
author: votre pseudo github
licence:
private:

ainsi le fichier package.json est créer

objectif final avoir un fichier html lié à un fichier javascript! (possiblement du css ou autre)
creer une config de webpack (en entreprise c'est rare car il y en a déjà une de faite, au pire faudra peut être la modifiée)
celle du react model (create react app sur le net est pas mal aussi) est beaucoup plus efficace que celle que l'on va faire ici

4 pour ajouter les dépendance de dev
webpack
webpack cli qui fait tourner webpack

"yarn add --dev webpack webpack-cli"
tout s'ajoute dans package.json

5 creer un dossier src pour avoir les fichier de dev

6 creer un index.js dans src

7 dans index.js
console.log('hello world');

si je veux lire un script il me faut une balise html

8 on creer un dossier de production dist
dedans on creer un fichier index.html
code html dans ce fichier
<!DOCTYPE html>
<html lang="la langue fr ou en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>on donne un titre</title>
</head>
<body>
    <div id="on la nomme comme on veut">injecter le rendu final dedans<div>
</body>
</html>

9 on rajoute un script pour build
{
  "name": "restart",
  "version": "1.0.0",
  "description": "an awesome react project",
  "main": "index.js",
  "author": "alexisOclock <alexis@oclock.io>",
  "license": "MIT",
  "devDependencies": {
    "webpack": "^4.42.0",
    "webpack-cli": "^3.3.11"
  },
  "scripts": {
    "build": "webpack"
  }
}

dans le terminal ensuite "yarn build"
va creer un fichier main.js ranger dans dist

10 lier le fichier js
<!DOCTYPE html>
<html lang="la langue fr ou en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>on donne un titre</title>
</head>
<body>
    <div id="on la nomme comme on veut">injecter le rendu final dedans</div>
    <script src="main.js">lier mon fichier js</script>
</body>
</html>

11dossier utils dans src
un index.js contenant

const sayHello = () => {
    console.log('hello world');
};

export default sayHello;

et donc dans le point d'entrée index.js de src

import sayHello from './utils';

sayHello();

puis yarn build pour lancer
on voit le hello world dans la consol du html
il faut utiliser un loader pour transformer l es6 en es5
donc on va utiliser babel

12 
babel loader fait travailler babel
@babel/preset-env pour le es6
@babel/preset-react pour faire du jsx
@babel/plugin-proposal-object-rest-spread

dans le terminal
"yarn add --dev babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-object-rest-spread"

vsc vous demande d'ajouter node modul dans gitignore a ce moment car beuacoup de fichier
donc dans le .gitignore on ecrit:
node_modules

13 dans package.json
{
  "name": "restart",
  "version": "1.0.0",
  "description": "an awesome react project",
  "main": "index.js",
  "author": "alexisOclock <alexis@oclock.io>",
  "license": "MIT",
  "devDependencies": {
    "@babel/core": "^7.8.7",
    "@babel/plugin-proposal-object-rest-spread": "^7.8.3",
    "@babel/preset-env": "^7.8.7",
    "@babel/preset-react": "^7.8.3",
    "babel-loader": "^8.0.6",
    "webpack": "^4.42.0",
    "webpack-cli": "^3.3.11"
  },
  "scripts": {
    "build": "webpack --module.blind js=babel-loader --mode production" (a ecrire) ou mode development(agit sur le main.js)
  }
}

14 il faut configurer babel
donc on creer le fichier .babelrc
et on ecrit dedans:
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    "plugins": [
        "@babel/plugin-proposal-object-rest-spread"
    ]
  }
  on refait yarn build

15 "yarn add react" comme librairie
dans le index.js de src

import React from 'react';
import ReactDom from 'react-dom';

import sayHello from './utils';

const content = (
    <div>
    <h1>test</h1>
    <p>{sayHello()}</p>
    </div>
);

ReactDom.render(content, document.getElementById('root'));

on modifie la fonction dans le fichier index.js de utils
const sayHello = () => {
   return 'hello world';
};

export default sayHello;

"yarn add react-dom"

puis "yarn build"

16 on change, on transforme l element en composant

dans le index.js de src

import React from 'react';
import ReactDom from 'react-dom';

import sayHello from './utils';

const Content = () => (
    <div>
        <h1>test</h1>
        <p>{sayHello()}</p>
    </div>
    );

ReactDom.render(<Content />, document.getElementById('root'));

puis on fait yarn build

17 un peu de css

"yarn add --dev css-loader style-loader"

on creer un webpack.config.js dans src pour sortir la config du package.json
et dedans on met:

module.exports = {
    mode: 'development',
    entry: ['./src/index.js'],
    devServer: {
        contentBase: './dist',
        open: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,             tout ce qui se termine par .js
                use: ['babel-loader'],     on utilise ceci
                exclude: /node_modules/,   mais on utilise pas ceci
            },
            {
                test: /\.css$/,                            tout ce qui se termine par .css
                use: ['style-loader', 'css-loader'],       on utilise ceci
            }
        ],
    },
};

apres on importe style dans le index.js de src
import './style.css';

18 pour des images mais ici nop
"yarn add file-loader" pour charger des images
import img from './logo.jpg';

19 yarn add --dev webpack-dev-server
pour lui demander de travailler il faut rajouter un script "start": "webpack-dev-server"
il faut le configurer
donc voir le webpack config

donc now yarn start pour ouvrir directement le localhost8080
ctrl c pour arreter le processus

20 on commit
git add .
git commit -m "first commit"
git remote add origin git@github.com-blabla/blablabla.git
git push -u origin master