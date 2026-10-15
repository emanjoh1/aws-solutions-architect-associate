export const translations = {
  en: {
    // Banner
    bannerHeading: "Cook Up a Storm:\nShare Your Signature Dish!",
    bannerSubtext:
      "Calling all food lovers and home chefs! Whip up your best recipe—whether it's a family heirloom, a creative twist on a classic, or your go-to comfort food. The most delicious, original, or beautifully presented dish wins! Submit your recipe now and let's celebrate great flavors together.",

    // Countdown
    countdownHeading: "Enter the Contest",
    countdownSubtext:
      "Submit your favorite recipe, and it might be listed on our website! Winner gets featured on our blog!",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",

    // OurChoices
    ourChoicesHeading: "Our Choices",
    ourChoicesSubtext:
      "Elevate your cooking like a pro! Impressive dishes for dates, holidays, and beyond.",

    // RecipeForm
    formHeading: "Add your Recipe",
    formSubtext:
      "Submit your favorite recipe, and it might be listed on our website! Winner gets featured on our blog!",
    labelName: "Your Name",
    labelEmail: "Your Email",
    labelRecipe: "Your Recipe",
    labelIngredients: "Recipe Ingredients",
    labelIngredientsHint: "(comma-separated)",
    labelDescription: "Recipe Description",
    placeholderIngredients: "E.g. Flour, Sugar, Butter",
    placeholderDescription: "Describe how to make the recipe",
    submitButton: "Submit",

    // Validation
    errorName: "Name cannot be blank.",
    errorEmailBlank: "Email cannot be blank.",
    errorEmailInvalid: "Email address is invalid.",
    errorRecipe: "Recipe cannot be blank.",
    errorIngredients: "Ingredients cannot be blank.",
    errorDescription: "Description cannot be blank.",

    // Alerts
    alertSuccess: "Recipe submitted successfully!",
    alertFail: "Failed to submit recipe.",
    alertError: "Something went wrong.",

    // Header nav
    navHome: "Home",
    navRecipes: "Recipes",
    navContact: "Contact",
    navLogin: "Login",

    // Footer
    footerCopy: "Copyrights © Ritual Roast Limited",
  },
  fr: {
    // Banner
    bannerHeading: "Cuisinez avec passion :\nPartagez votre plat signature !",
    bannerSubtext:
      "Appel à tous les amateurs de cuisine et chefs à domicile ! Préparez votre meilleure recette—qu'il s'agisse d'un héritage familial, d'une touche créative sur un classique, ou de votre plat réconfortant préféré. Le plat le plus délicieux, original ou joliment présenté gagne ! Soumettez votre recette maintenant et célébrons ensemble de grandes saveurs.",

    // Countdown
    countdownHeading: "Participez au Concours",
    countdownSubtext:
      "Soumettez votre recette préférée, elle pourrait être publiée sur notre site ! Le gagnant sera mis en avant sur notre blog !",
    days: "Jours",
    hours: "Heures",
    minutes: "Minutes",
    seconds: "Secondes",

    // OurChoices
    ourChoicesHeading: "Nos Choix",
    ourChoicesSubtext:
      "Élevez votre cuisine comme un pro ! Des plats impressionnants pour les rendez-vous, les fêtes et bien plus encore.",

    // RecipeForm
    formHeading: "Ajoutez votre Recette",
    formSubtext:
      "Soumettez votre recette préférée, elle pourrait être publiée sur notre site ! Le gagnant sera mis en avant sur notre blog !",
    labelName: "Votre Nom",
    labelEmail: "Votre Email",
    labelRecipe: "Votre Recette",
    labelIngredients: "Ingrédients de la Recette",
    labelIngredientsHint: "(séparés par des virgules)",
    labelDescription: "Description de la Recette",
    placeholderIngredients: "Ex. Farine, Sucre, Beurre",
    placeholderDescription: "Décrivez comment préparer la recette",
    submitButton: "Soumettre",

    // Validation
    errorName: "Le nom ne peut pas être vide.",
    errorEmailBlank: "L'email ne peut pas être vide.",
    errorEmailInvalid: "L'adresse email est invalide.",
    errorRecipe: "La recette ne peut pas être vide.",
    errorIngredients: "Les ingrédients ne peuvent pas être vides.",
    errorDescription: "La description ne peut pas être vide.",

    // Alerts
    alertSuccess: "Recette soumise avec succès !",
    alertFail: "Échec de la soumission de la recette.",
    alertError: "Une erreur s'est produite.",

    // Header nav
    navHome: "Accueil",
    navRecipes: "Recettes",
    navContact: "Contact",
    navLogin: "Connexion",

    // Footer
    footerCopy: "Droits d'auteur © Ritual Roast Limited",
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKeys = keyof typeof translations.en;
