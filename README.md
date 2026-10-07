# Cinescope

## Membres

- raphael.vazzano
- leo.menaldo

## Constats

### 1. Selection des films

Actuellement, il n'est pas possible de selectionner les films avec le clavier (Tab / Maj + Tab), automatiquement le curseur va sur l'etoile.

### 2. Les cartes peuvent prendre trop de place

Quand on effectue une recherche, on applique un filtre sur les cartes, seulement, si la recherche ne matche qu'avec une seule carte, elle apparaitra trop grande. Cela peut etre un probleme car cela implique des problemes de visibilite.

### 3. Le bouton Cinescope

Le bouton principal en haut a gauche "Cinescope" ne fonctionne pas et n'est pas atteignable avec le clavier.

### 4. Les pastilles vertes / rouges

Apres avoir lu le code source, on peut comprendre que les pastilles rouges et vertes associees a chaque films representent la disponibilite d'un film. C'est quelque chose qui devrait etre simplifie

### 5. Les etoiles ne servent a rien

Chacune des cartes ont une etoile qui est activable, seulement, cette etoile ne sert a rien, elle n'est pas ajoutee a une categorie speciale, il ne se passe rien, etc...

### 6. Architecture pas scalable

Le projet donne contient simplement 2 fichiers tsx (ceux par defaut).

### 7. Alt

Ajout de alt pour les images de films. Il n'y en avait pas de base.

## Justifications

- 1 - Chaque carte est maintenant un bouton et n'est plus une simple div, cela permet de pouvoir selectionner la carte entiere sans clavier (et c'est plus joli).

- 2 - Les cartes ont maintenant une taille fixe, et faire une recherche n'augmentera plus la taille des cartes.

- 3 - Le bouton Cinescope principal est maintenant accessible directement via le clavier.

- 6 - Au vu de la complexite grandissante du projet, il est important de suivre une architecture plus adaptee.
  Le projet suit maintenant une architecture plus claire et plus comprehensible.
