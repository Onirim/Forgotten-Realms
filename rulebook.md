# Les caractéristiques

Au nombre de 6, les caractéristiques d’un personnage permettent de le définir au delà de sa classe, de sa race et de son niveau.

| Caractéristiques | Utilisation technique |
| --- | --- |
| Force (FOR) | intervient pour le jet de toucher au corps à corps, ainsi que pour les dégâts au corps à corps et pour les armes de jet. En outre, il modifie également l’encombrement maximum du personnage |
| Dextérité (DEX) | intervient pour le jet de toucher à distance, ainsi qu’en tant que modificateur à la classe d’armure du personnage |
| Constitution (CON) | intervient dans le calcul des points de vie maximum du personnage |
| Intelligence (INT) | peut octroyer des emplacements de sorts supplémentaires pour le magicien et illusionniste, il octroie également la maîtrise de langues supplémentaires |
| Sagesse (SAG) | peut octroyer des emplacements de sorts supplémentaires pour le clerc et le druide |
| Charisme (CHA) | limite le nombre de compagnons qu’un personnage pourra avoir durant sa vie |

- **Le score**, sur une échelle de 1 à 20, représente davantage le classement du personnage au sein de la population qu’une valeur réelle. Le score permet de définir le modificateur et de comparer deux personnages, mais n’est jamais utilisé directement en jeu. On parle ici de l’aptitude innée d’un personnage, car son acquis et son entraînement sont davantage représentés par ses choix de prime (voir plus bas).
- **Le modificateur**, sur une échelle allant de -4 à +3, est une valeur qui influe sur de nombreux éléments du jeu. Tous les modificateurs s’appliquent aux jets de caractéristiques, aux jets de sauvegardes ainsi qu’aux jets de compétences secondaires. En outre, les caractéristiques modifient les éléments suivant du jeu
  
| Score | Modificateur |
| --- | --- |
| 1 | -4 |
| 2-3 | -3 |
| 4-5 | -2 |
| 6-8 | -1 |
| 9-12 | 0 |
| 13-15 | +1 |
| 16-17 | +2 |
| 18-19 | +3 |

- **La prime**, ou caractéristique privilégiée, indique que le personnage a un intérêt particulier dans les activités liées à cette caractéristique et qu’elle est l’une des facettes les plus importantes sa personne. Un personnage possédant une prime dans une caractéristique lance 2d20 au lieu d’1d20 lors d’un test sur cette caractéristique et sélectionne le meilleur résultat, ce qui met en avant la maîtrise du personnage de cette caractéristique.
    - Un personnage possède deux caractéristiques prime, trois s’il est humain.
    - Une classe ne peut être sélectionnée que si le personnage possède la prime associée à la classe. Il en va de même pour les multi-classes, qui requièrent la prime associée à chacune des classes choisies.
 
# Tests de caractéristiques

Les tests de caractéristiques permettent de gérer les différents tests relatifs aux capacités et aux sauvegardes des personnages. Il existe trois types de jets de caractéristiques :

## Jet de caractéristique

Il s’agit du jet le plus classique, généralement demandé lors de l’utilisation de certaines capacités ou lorsqu’une action testée entre dans les spécialités de la classe du personnage. Il peut s’agir d’un test d’escalade, de crochetage ou désarmement par exemple.

On lance 1d20 (2d20 si la caractéristique est prime) + le modificateur de caractéristique + le niveau du personnage (si le test est relatif à la classe du personnage).

## Jet de sauvegarde

Il s’agit du jet demandé par le MJ lorsque le personnage doit résister à un événement négatif (résister à un sort, éviter une chute, rester en vie après l’absorption d’un poison, etc.).

Le jet est identique à un jet de caractéristique, à savoir :

On lance 1d20 (2d20 si la caractéristique est prime) + le modificateur de caractéristique + le niveau du personnage.

## Jet de compétence secondaire

Les personnages peuvent posséder des compétences secondaires qui mettent en avant certaines spécialités hors classes. Ces compétences n’ont pas vocation à empiéter sur les compétences de classes des autres personnages et leur seront toujours inférieures, on y ajoute un bonus de +2.

On lance 1d20 (2d20 si la caractéristique est prime) + le modificateur de caractéristique + 2.

## Difficulté des tests

Lorsqu’une action a toutes les chances de réussir, alors le lancer de dé n’est pas nécessaire. Lorsqu’une action a toutes les chances d’échouer, là aussi il n’est pas nécessaire de lancer les dés. C’est lorsqu’il existe un doute sur la réussite d’une action que les jets entrent en ligne de compte. 

La difficulté de base d’une action d’aventure est de 15, à laquelle on ajoute la difficulté relative au niveau de danger selon la formule suivante :

Difficulté = 15 + la moitié du niveau de danger arrondi à l’inférieur.

Par niveau de danger, on entend le niveau de l’adversaire dans le cas d’une confrontation, le niveau du magicien pour résister à un sort, le niveau du donjon lors des interactions avec ce dernier, etc. Par exemple, résister à un sort lancé par un magicien de niveau 5 est d’une difficulté 17 (15 + 5/2 arrondi à l’inférieur).

# Le combat

Les procédures de combat sont découpées en rounds d’approximativement 10 secondes. Durant chaque round, un personnage peut effectuer une action de combat.

## Initiative

L’initiative permet de définir l’ordre des actions durant un round chaotique de combat. Pour déterminer l’initiative, chaque personnage (ou groupe de personnages si le MJ le désire) lance 1d10. La plus haute valeur agira en premier (et les ex-æquo agiront en même temps). Il y a quelques exceptions toutefois :

- Un personnage surpris au début de la rencontre perd toujours l’initiative au premier round.
- Un personnage maniant une arme d’hast gagne automatiquement l’initiative au premier tour contre un personnage maniant une arme plus courte.
- Un personnage de grande taille gagne toujours l’initiative au premier tour contre un personnage de taille moyenne ou petite, sauf si ce dernier manie une arme d’hast.
- Un personnage souhaitant lancer un sort doit annoncer qu’il débute l’incantation dès le début de la phase d’initiative, avant de lancer les dés.

## Actions de combat

Chaque personnage peut exécuter une action de combat durant le round. Ces actions sont décrites ci-après.

### Attaquer

Le personnage peut effectuer une attaque de mêlée ou à distance, ce qui inclue un déplacement jusqu’à la moitié de sa valeur de mouvement au maximum. 

- **Pour une attaque de mêlée**, on lance 1d20 + Base de Toucher + Modificateur de force. Si le résultat égale ou dépasse la CA de l’adversaire, l’attaque porte et les dégâts s’appliquent (le modificateur de force s’applique aux dégâts).
- **Pour une attaque à distance**, on lance 1d20 + Base de Toucher + Modificateur de dextérité. Si le résultat égale ou dépasse la CA de l’adversaire, l’attaque porte et les dégâts s’appliquent (le modificateur de force s’applique aux dégâts uniquement pour les armes de jet, pas pour les armes de trait).

### Lancer un sort

Le personnage peut lancer un sort, mais ne peut pas se déplacer au cours de son round. Le sort lancé peut nécessiter plusieurs rounds d’incantation. Dans ce cas le lanceur de sort risque d’être interrompu (et le sort perdu) s’il subit un point de dégât ou rate un jet de sauvegarde durant les rounds d’incantation.

### Se déplacer

Le personnage se concentre sur son déplacement uniquement et peut parcourir une distance dépendante de son mouvement.

- Le personnage peut se déplacer sur une distance maximum de son mouvement.
- Le personnage peut courir sur une distance de deux fois son mouvement.
- Le personnage peut également sprinter sur une distance de quatre fois son mouvement.

### Utiliser une capacité

Le personnage peut utiliser une de ses capacités. En général le personnage peut également se déplacer jusqu’à sa valeur de mouvement.

### Utiliser un objet

Prendre et boire une potion, manipuler une baguette de projectile de feu sont des exemples d’utilisations d’objets. Cette action de combat ne permet pas de se déplacer.

### Effectuer une manœuvre de combat

Voir plus bas.

## Manœuvres de combat

Il est possible d’utiliser des manœuvres de combat lorsque l’on recherche un effet spécifique. Les manœuvres de combat ci-après sont des exemples et ne sont pas une liste exhaustive. Soyez créatifs !

### Charger

Un personnage qui se déplace à vitesse de course ou de sprint peut charger son adversaire. Le personnage obtient alors un bonus de +2 aux dégâts mais un malus de -4 à sa CA pour le tour. Si le personnage qui charge est blessé durant sa charge, il perd son bonus de dégât de charge (mais peut tout de même porter son attaque).

### Viser un point critique

Au contact comme à distance, il est possible de tenter d’infliger une blessure plus grave en visant un point sensible. Viser un point critique impose un malus de -8 au toucher, mais permet à l’attaque d’infliger double dégâts.

### Tirer dans la mêlée

Si un personnage souhaite aider ses camarades au contact en tirant sur leurs adversaires, il s’agit d’un tir dans la mêlée. Dans ce cas, l’attaque a lieu normalement, mais si le résultat du dé d’attaque donne 2, 3 ou 4 (non modifié) alors un nouveau jet d’attaque est réalisé à l’encontre d’un des alliés du personnage engagé dans la mêlée.

### Se défendre

Un personnage peut souhaiter son round sur sa défense en esquivant ou parant son ou ses adversaires. Le personnage renonce à attaquer et ne peut pas se déplacer, il obtient soit +2 à la CA contre 3 adversaires, soit +4 à la CA contre un seul adversaire (qu’il doit désigner).

### Désarmer

Un guerrier, rôdeur, chevalier, voleur, assassin, clerc ou paladin peut tenter de désarmer son adversaire. Pour se faire, il doit réussir un jet de toucher d’une difficulté de 15+niveau de la cible+modificateur de dextérité de la cible.

### Attaquer de flanc ou par derrière

Une attaque de flanc sur un adversaire obtient un bonus de +1 au jet de toucher, une attaque par derrière obtient un bonus de +2. Ce bonus ne s’ajoute pas aux bonus d’attaque par derrière des voleurs et des assassins, dont il fait déjà partie.

### Posture offensive

En prenant une posture offensive, un personnage peut sacrifier sa défense au profit de son attaque. Dans ce cas, le personnage gagne +3 au toucher pour le round, mais perd -6 à la CA pour le round également.

### Pousser l’adversaire

Un personnage peut décider de pousser l’adversaire au lieu de le blesser. Il peut le faire avec un malus de -2 à son jet d’attaque. S’il touche, il repousse effectivement son adversaire de 1d3 mètres en arrière.

### Réceptionner une charge

Avec une arme d’hast apprêtée en plantant le talon de l’arme dans le sol et en la maintenant avec le pied, il est possible de réceptionner la charge d’un adversaire. Dans ce cas, si l’attaque touche, elle fait double dommages.

### Coup de bouclier

Un personnage équipé d’un bouclier peut tenter de sonner son adversaire. Il doit réussir un jet d’attaque avec un malus de -6. S’il touche, la cible a le droit à un jet de sauvegarde de constitution pour éviter d’être sonnée pendant 1d2 rounds.

### Croc-en-jambe

Un personnage peut tenter de faire chuter son adversaire en réussissant un jet d’attaque de difficulté 15+niveau de la cible+dextérité de la cible. Cela n’occasionne aucun dégât mais la cible chute au sol.

Se relever d’un croc-en-jambe nécessite un demi mouvement et attaquer dans la foulée se fait avec un malus de -2. Par contre, si un adversaire se trouve au contact de celui qui tente de se relever, cela lui prend un mouvement complet et ne peut se faire qu’avec un jet de sauvegarde de dextérité réussi.

### Combattre à deux armes

Lorsqu’un personnage souhaite combattre à deux armes, sa première arme subit un malus de -3, et la seconde de -6. De plus, c’est la dextérité, et non la force, qui devient le modificateur du jet de toucher (mais c’est toujours celui de force qui s’applique aux dégâts).

### Rompre une mêlée

Un personnage qui souhaite se désengager d’une mêlée peut la rompre via cette manœuvre. Dans ce cas, il renonce à son attaque et peut se déplacer de la moitié de son mouvement pour s’éloigner de son adversaire. 

Un personnage qui quitte une mêlée sans la rompre subit une attaque d’opportunité de dos immédiate de la part de son adversaire (avec un bonus au toucher de +2 donc).
