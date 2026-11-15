# Portfolio de Julien Saulu

Site statique en HTML, CSS et JavaScript, sans framework, hébergé sur GitHub Pages :
https://julienhtml.github.io/

## Organisation des fichiers

| Fichier | Page |
|---|---|
| `index.html` | Accueil : présentation, parcours, objectif |
| `competences.html` | Compétences reliées aux projets, blocs du BTS SIO |
| `projets.html` | Projets personnels |
| `bts.html` | Réalisations faites en formation |
| `entreprise.html` | Stages et missions en entreprise |
| `certifications.html` | Certifications en cours, diplômes |
| `veille.html` | Veille technologique et fiches |
| `contact.html` | Contact et CV |
| `css/style.css` | Tout le style, thèmes clair et sombre |
| `js/main.js` | Bouton de thème et menu mobile |
| `assets/CV_Julien_Saulu.pdf` | CV téléchargeable |

## Mettre le site en ligne

Le dépôt `julienhtml.github.io` est déjà publié par GitHub Pages. Il suffit de remplacer son
contenu par ces fichiers, en gardant les dossiers `css`, `js` et `assets` tels quels.

Depuis le site GitHub : ouvrir le dépôt, cliquer sur « Add file » puis « Upload files », glisser
tous les fichiers et dossiers, puis valider avec « Commit changes ». Le site est mis à jour une à
deux minutes plus tard.

Avec Git :

```
git clone https://github.com/julienhtml/julienhtml.github.io.git
```

Copier ensuite les fichiers dans le dossier cloné, en écrasant l'ancien `index.html`, puis :

```
git add .
git commit -m "Refonte du portfolio en plusieurs pages"
git push
```

## Ajouter du contenu

Chaque page contient, en bas, un commentaire HTML avec un bloc prêt à copier :

- un projet dans `projets.html` ;
- une réalisation de BTS dans `bts.html` ;
- un stage ou une mission dans `entreprise.html` ;
- une certification obtenue dans `certifications.html` ;
- une fiche de veille dans `veille.html`, avec sa ligne dans le tableau de suivi.

Pour remplacer le CV, déposer le nouveau PDF dans `assets` sous le même nom,
`CV_Julien_Saulu.pdf`.

## Changer les couleurs

Les couleurs sont des variables définies en haut de `css/style.css` : un bloc pour le thème
clair, un bloc pour le thème sombre.
