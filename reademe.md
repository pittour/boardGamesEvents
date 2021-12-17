# Projet

Par groupe de 2 ou 3 maximum, créer un site d'événements (affichage et création de nouveaux événements).

## Technique

On utilisera le framework Laravel et l'architecture MVC pour la réalisation de ce projet. Le code du projet se trouvera sur un dépôt Github.

## Fonctionnalités

* Afficher la liste de tous les événements (avec pagination)
* Créer un événement (si l'utilisateur est connecté)
* Modifier un événement (si l'utilisateur est connecté ET si l'utilisateur en est l'auteur)
* S'inscrire
* Se connecter
* Afficher la liste des commentaires d'un événement
* Créer un commentaire (si l'utilisateur est connecté) sur un événement
* Afficher le profil de l'utilisateur
* Mettre à jour son profil
* [BONUS] Permettre aux utilisateurs de s'inscrire aux événements (pré-requis : être connecté)
* [BONUS++] Créer un système de recherche pour trouver les événements proches de l'utilisateur

## Base de données

* users (id, username, email, password)
* events (id, name, address, category_id, duration, day, user_id)
* comments (id, user_id, content)
* categories (id, name)
* [BONUS] categories_events (category_id, event_id)
* [BONUS] events_users (user_id, event_id)

## Conseils

### Création d'un dépôt Github avec un projet Laravel

Personne A :

1. Créer le dépôt Github
2. Nouveau projet Laravel avec la commande composer create-project
3. Dans le dossier créé (ne pas oublier de se déplacer dans le dossier) initialiser un dépôt git avec la commande git init
4. Ajouter les fichiers puis faire le premier commit
5. Modifier la branche avec la commande git branch -M main
6. Ajouter la remote sur votre dépôt git (pour faire le lien entre le dépôt git et Github)
7. Pousser les modifications sur Github à l'aide de la commande git push -u origin main

Personne B (et C) :

1. Cloner le dépôt à l'aide de la commande git clone {adresse du projet}
2. Se déplacer dans le nouveau dossier puis lancer la commande composer install
3. Faire une copie du fichier .env.example et le renommer en .env
4. Lancer la commande php artisan key:generate

### Création de la base de données

* Créer une base de données pour le projet en utf8mb4_unicode_ci puis mettre à jour votre fichier .env avec le nom de cette base de données.
* Utiliser les migrations pour créer votre différentes tables