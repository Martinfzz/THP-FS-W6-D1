Projet : Faire une page interactive avec JS
  
1. Introduction
À présent tu sais coder en JS, parcourir le DOM, modifier des éléments HTML et détecter des évènements utilisateurs : il est temps de réunir toutes ces connaissances ! Tu vas enfin créer ta première page interactive.

Dans ce projet nous allons te donner une page HTML déjà faite (et qui ne sera pas sans te rappeler un projet passé…). Tu vas rajouter un tas de fonctionnalités sur cette page afin qu'elle réagisse aux actions d'un visiteur. À toi de jouer !

PS : tout comme le projet sur les modifications du DOM : il est interdit de toucher au fichier HTML ! On va tout faire par JavaScript.

2. Le projet
Mise en place de l'exo
Commence par télécharger ce repo GitHub : il contient la page HTML exo_events.html que nous allons pimper.

Maintenant rajoute dans le même dossier un fichier script.js qui va contenir ton code JavaScript (je l'ai déjà appelé dans le fichier HTML donc pas besoin de le faire).

Avant de se lancer…
On va te rabâcher les oreilles avec le même genre de conseils que pour la journée précédente… Mais si tu ne les as pas bien en tête, tu vas passer une sale après-midi !

Quand tu cherches à modifier un élément ou à réagir à un event le concernant, assure-toi d'abord que tu pointes bien dessus (quitte à l'imprimer en console). Ensuite seulement tu peux essayer de lui appliquer la modification. Si tu fais les 3 choses en même temps et que ça marche pas, tu ne sais pas quelle étape tu as raté : tu pointes vers un mauvais élément ? C'est la fonction de modification qui est mal écrite ? Ou bien c'est l'évènement que tu n'arrives pas à détecter ? Fais les choses pas à pas !
"si ça bogue, mets des console.log" ! Affiches tes variables, tes éléments HTML et confirment qu'ils ont les valeurs auxquelles tu t'attends.
Rappelle-toi : de nombreuses fonctions pour parcourir le DOM renvoient des listes d'éléments (qui s'apparentent à des arrays). Et on ne peut pas appliquer une fonction de modification sur une liste : il faut l'appliquer sur un élément de cette liste (sinon on obtient une erreur). En gros, si tu fais document.getElementsByClassName("coucou").innerHTML = "salut" tu as une erreur. Il faut rajouter un [x] pour choisir un élément de la liste sur lequel appliquer la modification : document.getElementsByClassName("coucou")[0].innerHTML = "salut" ça marche.
Les modifications demandées sont nombreuses : essaye a minima d'implémenter toutes les fonctionnalités jusqu'à la n°5. Les autres c'est bonus !
On va te mettre des petits Indices afin de te guider. Ils seront écrits en blanc sur blanc pour que les plus à l'aise puissent essayer de faire sans. Ceux qui veulent les lire n'auront qu'à sélectionner la ligne avec leur souris pour la mettre en surbrillance : le texte se révèlera alors ✨✨✨

Fonctionnalité 1 :
On commence par un petit échauffement : lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console.

Cette fonctionnalité doit être codée avec un addEventListener("click", function(){ } car c'est une bonne habitude à prendre ! 😇

Fonctionnalité 1-bis :
Maintenant on va upgrader cette première fonctionnalité : lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.

Fonctionnalité 2 :
On va enfin faire fonctionner ce satané "Hamburger Menu" qui s'affiche depuis le début mais qui n'actionne rien quand on clique dessus. C'est quoi un "hamburger menu" ? C'est ça, ce bouton avec trois lignes horizontales en haut à droite de la navbar.

Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader

Fonctionnalité 3 :
À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). À toi de jouer !

Fonctionnalité 4 :
On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte. C'est plus compliqué que sur une classe.

Fonctionnalité 5 :
Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯. Et comme elle est un peu dangereuse, on va la cacher… Voici comment elle doit marcher : si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).

Fonctionnalité 6 :
T'as déjà implémenté 5 fonctionnalités d'interaction ! C'est top ! On va commencer à corser les choses.

La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !

Fonctionnalité 7 :
Allez on va rajouter un peu de WTF dans la page : si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !

Petite remarque : tu vas réaliser que si tu mélanges les cards, il est fort probable que la fonctionnalité 6 va se mettre à faire n'importe quoi. Si tu survoles un bouton "View", c'est une autre card qui va se réduire. Si tu arrives à corriger ça, c'est cool mais la consigne est d'ignorer ce souci pour le moment.

Fonctionnalité 8 :
Évidemment tu t'y attendais : on va faire tourner les card dans l'autre sens aussi. Donc si un utilisateur clique sur le bouton bleu <==, la première card devra passer en dernier. À première vue, tu te dis que si tu as réussi à faire la fonctionnalité précédente, celle-ci c'est du gateau... sauf qu'il y a quelques pièges. 😈

Fonctionnalité 9 :
Bon si t'es arrivé jusque-là, c'est que t'as besoin d'un peu de challenge. Du coup je t'ai concocté une fonctionnalité de derrière les fagots, spécialement conçue pour les moussaillons pas piqués des hannetons (this sentence is brought to you by www.vieilles-expressions.fr). Voici ce qu'elle va devoir faire :

La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné et qu'on appuie sur une touche spécifique du clavier.
Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
Si l'utilisateur presse la touche "b", tout redevient normal.

3. Rendu attendu
Un repo GitHub par groupe de pair-programming contenant la page HTML mais surtout le fichier script.js avec tout le code dedans !