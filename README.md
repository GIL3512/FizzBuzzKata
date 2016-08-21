# FizzBuzz Kata

##Pré-requis
Avant tout, il est nécessaire de s'assurer d'avoir l'environnement adéquat pour lancer l'application et que "node" soit installé sur la machine
(sinon, allez sur le site www.nodejs.org).

- Une plateforme dédiée : (soit IntelliJ, Webstorm).
- Depuis la ligne de commande, installer le node module par : "npm install --save"
- Pour lancer le programme, il suffit juste de lancer la commande : npm start et l'affichage se fait sur la console
- Pour ma part, j'ai paramétré le package.json pour que le programme se lance via les instructions de main.js
- Pour le test, il est nécessaire d'installer la bibliothèque Jasmine pour la commande "npm install --save-dev jasmine" et le lancement se fait directement depuis la commande "npm test"

### Concernant le programme
Il s'agit d'un programme qui reprend et affiche des nombres allant de 0 à 100 avec comme contraintes :
- Si le nombre est multiple de 3, ce dernier affiche Fizz (Version 1)
- Si le nombre est multiple de 5, ce dernier affiche Buzz (Version 2)
- En cas de multiple de 3 et 5, il affiche FizzBuzz       (Version 3)

Cette application est faite de manière simple et efficace en respectant les recommandations requises.

Ps : Le fichier fizz_buzz2.js est juste une autre manière de coder sans le tableau, et le résultat s'affiche tout simplement en ouvrant
le fichier index.html sur n'importe quel navigateur