# Cinescope

## Membres
- raphael.vazzano
- leo.menaldo

## Constats

### 1. Selection des films
Actuellement, il n'est pas possible de selectionner les films avec le clavier (Tab / Maj + Tab), automatiquement le curseur va sur l'etoile.

### 2. Architecture pas scalable
Le projet donne contient simplement 2 fichiers tsx (ceux par defaut).

### 3. Le bouton Cinescope
Le bouton principal en haut a gauche "Cinescope" ne fonctionne pas et n'est pas atteignable avec le clavier.

### 4. Les pastilles vertes / rouges
Apres avoir lu le code source, on peut comprendre que les pastilles rouges et vertes associees a chaque films representent la disponibilite d'un film. C'est quelque chose qui devrait etre simplifie

### 5. Les cartes peuvent prendre trop de place
Quand on effectue une recherche, on applique un filtre sur les cartes, seulement, si la recherche ne matche qu'avec une seule carte, elle apparaitra trop grande. Cela peut etre un probleme car cela implique des problemes de visibilite.

## Justifications
- 1 - Chaque carte est maintenant un bouton et n'est plus une simple div, cela permet de pouvoir selectionner la carte entiere sans clavier (et c'est plus joli).

- 2 - Au vu de la complexite grandissante du projet, il est important de suivre une architecture plus adaptee.
Le projet suit maintenant une architecture plus claire et plus comprehensible.

- 3 - Le bouton Cinescope principal est maintenant accessible directement via le clavier.