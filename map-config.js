// ══════════════════════════════════════════════════════════════
// Camply — Configuration des Cartes (multi-cartes)
// Adaptez ce fichier selon votre projet.
// ══════════════════════════════════════════════════════════════

const MAP_CONFIG = {

  // ── Cartes disponibles (1 à 5) ────────────────────────────
  // Chaque carte a une clé unique (key), un nom affiché (name),
  // le chemin de son image et ses dimensions natives en pixels.
  //
  // ⚠️  La clé 'default' est réservée pour les données
  //     existantes migrées depuis la version mono-carte.
  //     Si vous aviez déjà des marqueurs, gardez une entrée
  //     avec key: 'default' comme première carte.
  maps: [
    {
      key:         'feerune',              // ← identifiant unique, ne pas changer si données existantes
      name:        'Féérune',     // ← nom affiché dans le sélecteur
      image:       './pictures/maps/feerune.jpg',
      imageWidth:  10375,
      imageHeight: 7826,
    },
    // Décommentez et remplissez pour ajouter d'autres cartes :
    {
      key:         'larmil',
      name:        'Vallée du Larmil',
      image:       './pictures/maps/larmil.jpg',
      imageWidth:  2508,
      imageHeight: 1773,
    },
     {
       key:         'trois_rivieres',
       name:        'Vallée des Trois-rivières',
       image:       './pictures/maps/trois_rivieres.png',
       imageWidth:  2508,
       imageHeight: 1773,
     },
     {
       key:         'donjon_iffre',
       name:        'Donjon d\'Iffre',
       image:       './pictures/maps/donjon_iffre.jpg',
       imageWidth:  2481,
       imageHeight: 2481,
     },
     {
       key:         'donjon_myar_thalune',
       name:        'Donjon de Myar\'Thalune',
       image:       './pictures/maps/donjon_myar_thalune.jpg',
       imageWidth:  2481,
       imageHeight: 2481,
     },
  ],

  // ── Comportement du zoom ──────────────────────────────────
  zoomMin:     0.15,
  zoomMax:     4.0,
  zoomStep:    0.15,
  zoomInitial: 'fit', // 'fit' = ajuste à la fenêtre, ou nombre (ex: 0.5)

  // ── Apparence des marqueurs ───────────────────────────────
  markerSize: 28,
  markerColors: [
    '#e05c5c',
    '#e07a3a',
    '#e8c46a',
    '#5cbf7a',
    '#5c9be0',
    '#9b7de8',
    '#e05c9b',
    '#5cbfbf',
  ],

  // ── Textes de l'interface ─────────────────────────────────
  labels: {
    tabName:                  'Carte',
    addMarkerHint:            'Maj+clic gauche pour ajouter un marqueur',
    markerModalTitle:         'Nouveau marqueur',
    editModalTitle:           'Modifier le marqueur',
    fieldName:                'Nom',
    fieldDesc:                'Description',
    fieldColor:               'Couleur',
    namePlaceholder:          'Ex : Taverne du Dragon d\'Or',
    descPlaceholder:          'Notes, description du lieu…',
    btnSave:                  'Enregistrer',
    btnCancel:                'Annuler',
    btnDelete:                'Supprimer',
    confirmDelete:            'Supprimer ce marqueur ?',
    toastAdded:               'Marqueur ajouté !',
    toastSaved:               'Marqueur sauvegardé !',
    toastDeleted:             'Marqueur supprimé.',
    toastError:               'Erreur lors de la sauvegarde.',
    emptyName:                'Veuillez saisir un nom.',
    imageError:               'Impossible de charger la carte. Vérifiez map-config.js.',
    toastLayerNotFound:       'Couche introuvable ou non publique.',
    toastLayerOwn:            'C\'est votre propre couche de carte !',
    toastLayerAlreadyFollowed:'Vous suivez déjà cette couche.',
    toastLayerUnsubscribed:   'Abonnement à la couche supprimé.',
    toastLayerSubscribed:     'Abonné à "${title}" !',
    layerPanelTitle:          'Partage',
    ownLayerSection:          'Ma couche',
    followedLayerSection:     'Couches suivies',
    mapSelectorLabel:         'Carte',
  },
};
