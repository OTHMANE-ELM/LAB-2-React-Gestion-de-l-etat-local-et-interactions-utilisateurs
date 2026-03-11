# TP React – useState, événements, formulaires et useEffect

## Objectif du TP
Ce TP permet de découvrir les bases de React avec :
- `useState` pour gérer l’état local
- les événements `onClick`, `onChange` et `onSubmit`
- les formulaires contrôlés
- `useEffect`
- le flux unidirectionnel des données

---

## Structure du dossier `src`
Le dossier `src` doit contenir au minimum :
- `App.js`
- `Compteur.js`
- `CompteurEffet.js`
- `FormulaireNom.js`
- `MessageBouton.js`
- `index.js`

---

## Étape 1 – Créer le composant `Compteur`
Dans `Compteur.js`, on crée un compteur avec `useState`.

### Résumé
- la variable `compte` stocke le nombre de clics
- la fonction `setCompte` met à jour cette valeur
- `onClick` lance la fonction `incrementer`

### Ce que l’on apprend
- comment créer un état local
- comment réagir à un clic sur un bouton

---

## Étape 2 – Créer le composant `MessageBouton`
Dans `MessageBouton.js`, on affiche un message qui change après un clic.

### Résumé
- un texte est affiché dans la page
- quand on clique sur le bouton, le message change

### Ce que l’on apprend
- modifier dynamiquement l’affichage
- utiliser `onClick` avec un autre exemple simple

---

## Étape 3 – Créer le composant `FormulaireNom`
Dans `FormulaireNom.js`, on crée un formulaire contrôlé.

### Résumé
- le champ texte est lié à une variable d’état `nom`
- `onChange` met à jour la valeur saisie
- `onSubmit` empêche le rechargement de la page avec `event.preventDefault()`
- une alerte affiche le nom saisi

### Ce que l’on apprend
- gérer un champ de formulaire avec React
- utiliser un formulaire contrôlé
- gérer l’envoi d’un formulaire

---

## Étape 4 – Créer le composant `CompteurEffet`
Dans `CompteurEffet.js`, on ajoute `useEffect`.

### Résumé
- le compteur augmente à chaque clic
- `useEffect` s’exécute après chaque changement de `compte`
- ici, le résultat est affiché dans la console

### Ce que l’on apprend
- utiliser `useEffect`
- exécuter une action après une mise à jour d’état

---

## Étape 5 – Modifier `App.js`
Dans `App.js`, on importe puis on affiche tous les composants.

### Résumé
`App.js` sert de composant principal.  
Il regroupe :
- `Compteur`
- `MessageBouton`
- `FormulaireNom`
- `CompteurEffet`

### Ce que l’on apprend
- organiser une application en plusieurs composants
- respecter le flux unidirectionnel des données

---

## Étape 6 – Exercices pratiques

### Exercice 1 – Affichage dynamique
Créer un composant qui change le texte affiché à chaque clic.

**Exemple :**
- Premier clic
- Deuxième clic
- Troisième clic

**But :** s’entraîner à modifier l’affichage selon l’état.

### Exercice 2 – Formulaire d’inscription
Créer un formulaire contrôlé avec deux champs :
- Prénom
- Email

À la soumission, afficher les valeurs dans une alerte.

**But :** manipuler plusieurs champs dans un formulaire React.

### Exercice 3 – Compteur avec effet personnalisé
Créer un compteur qui :
- affiche le nombre de clics
- utilise `useEffect`
- change le titre de la page avec `document.title`

**Exemple :**
`Nombre de clics : 3`

**But :** utiliser `useEffect` sur un cas concret visible.

---

## Vérification finale
À la fin du TP, vérifier que :
- le compteur fonctionne
- le message change au clic
- le formulaire récupère bien la saisie
- l’effet React fonctionne dans la console ou dans le titre de la page

---

## Section démo vidéo


https://github.com/user-attachments/assets/f790f9a8-d977-4e9e-959e-5691c5847d37


---

## Conclusion
Ce TP permet de comprendre les bases essentielles de React.  
Après ce travail, vous savez :
- créer des composants
- gérer l’état avec `useState`
- gérer les événements
- utiliser un formulaire contrôlé
- exécuter un effet avec `useEffect`
