import burrito from '../images/burrito.77e5ed37';
import lasagna from '../images/lasagna.be0e4672';
import pancakes from '../images/pancakes.jpg';
import prawns from '../images/prawns.jpg';
import pudding from '../images/pudding.2c6bac8f';
import ramenSoup from '../images/ramen-soup.jpg';
import ribs from '../images/ribs.19b99995';
import tomatoSoup from '../images/soup-tomato.9a8de428';

export const questions = [
  {
    id: 0,
    question: 'Tennis star Serena Williams won which major tournament while pregnant with her first child?',
    answer: 'The Australian Open',
  },
  {
    id: 1,
    question: 'In which European city would you find Orly airport?',
    answer: 'Paris',
  },
  {
    id: 2,
    question: 'Which singer’s real name is Stefani Joanne Angelina Germanotta?',
    answer: 'Hanna MOntana',
  },
  {
    id: 3,
    question: 'The only known monotremes in the animal kingdom are the echidna and which other creature?',
    answer: 'The platypus',
  }
];

export const data = [
  {
    meal: 'Mexican Lasagna',
    description: 'This is a traditional dish in my family. Anyone can make it really. It is composed of traditional Mexican ingredients layered over the top of one another in a lasagna-like fashion (hence the name) but has little similarity to lasagna, so lasagna haters have no fear!',
    instructions: ['Preheat oven to 350 degrees F (175 degrees C). Grease a 9x13-inch casserole dish.', 'Heat a large skillet over medium-high heat and stir in ground beef. Cook and stir until beef is crumbly, evenly browned, and no longer pink, about 10 minutes. Drain and discard any excess grease. Add water and taco seasoning; cook and stir until mixture has thickened, 5 to 10 minutes.', 'Arrange 3 tortillas in the bottom of the casserole dish; spread about half the can of refried beans and half the ground beef atop the tortilla layer. Sprinkle 1 cup Colby-Jack cheese over ground beef layer. Arrange 3 more tortillas over the cheese. Spread in the remaining 1/2 can refried beans and half the jar of taco sauce; sprinkle with 1 cup Colby-Jack cheese. Arrange 3 more tortillas and top with remaining ground beef and 1 cup Colby-Jack cheese. Top with last 3 tortillas and remaining 1/2 jar taco sauce.', "Bake in the preheated oven until top tortilla layer begins to brown, 20 to 25 minutes. Sprinkle 1 cup Colby-Jack cheese over lasagna.', 'Turn on oven's broiler.", 'Place lasagna under the broiler until Colby-Jack cheese is melted and bubbling, 3 to 5 minutes.'],
    ingredients: ['1 ½ pounds ground beef', '¼ cup water', '1 (1 ounce) packet taco seasoning mix', '12 (8 inch) flour tortillas, or more if needed', '1 (14 ounce) can refried beans', '3 cups shredded Colby-Jack cheese', '1 (8 ounce) jar taco sauce', '1 cups shredded Colby-Jack cheese'],
    tags: ['Lasagna', 'Lunch', 'Mexican'],
    prep: 20,
    cook: 40,
    servings: 16,
    photo: lasagna,
  },
  {
    meal: 'Jersey Fresh Tomato Soup',
    description: 'New Jersey is a well-known producer of tomatoes. Having our own garden leaves us with an abundance at the end of the season. Not wanting the tomatoes to go to waste, Hubby and I came up with our favorite version of tomato soup.',
    instructions: ['Bring the tomatoes, carrots, and onion to a boil over medium-high heat in a stockpot, then reduce heat to medium-low. Simmer for 30 minutes. Stir in the chicken broth, sugar, and salt.', 'Melt the butter over medium-low heat in a small saucepan. Whisk in the flour, stirring until thick. Slowly whisk in the milk until smooth. Cook and stir, whisking constantly until thickened, about 5 minutes, then stir milk mixture in to the stockpot. Season with basil, celery salt, black pepper, and garlic powder. Continue to simmer the soup on low to reduce and thicken, about 1 hour.'],
    ingredients: ['7 cups peeled, seeded, and chopped tomatoes', '1 cup finely chopped carrots', '¾ cup finely chopped onion', '1 (13.75 ounce) can chicken broth', '1 tablespoon white sugar', '2 teaspoons sea salt', '3 tablespoons butter', '3 tablespoons all-purpose flour', '1 cup 2% milk', '2 teaspoons dried basil', '½ teaspoon celery salt', '½ teaspoon ground black pepper', '¼ teaspoon garlic powder'],
    tags: ['Soup', 'Tomatoes', 'Hot'],
    prep: 30,
    cook: 90,
    servings: 4,
    photo: tomatoSoup,
  },
  {
    meal: 'Vanilla Pudding',
    description: 'This is an easy and very nice tasting desert. It goes well after a heavy meal or when you want something slightly sweet.',
    instructions: ['In a saucepan, combine the sugar, corn starch and salt. Add milk and cook over medium heat, stirring constantly until mixture thickens. Add vanilla and continue to cook for 2 to 3 minutes.', 'Pour into individual molds rinsed with cold water; chill until firm and unmold.'],
    ingredients: ['⅓ cup white sugar', '3 tablespoons cornstarch', '¼ teaspoon salt', '2 ½ cups milk', '1 ½ teaspoons vanilla extract'],
    tags: ['Desert', 'Pudding', 'Sweet'],
    prep: 10,
    cook: 15,
    servings: 5,
    photo: pudding,
  },
  {
    meal: 'Chorizo Breakfast Burritos',
    description: "A yummy breakfast burrito using chorizo sausage, great for when you're craving greasy breakfast food (i.e. - when you're hung-over)!",
    instructions: ['Generously coat a large frying pan with cooking spray. Cook and stir chorizo over medium high heat until well browned and crumbled. Add onion and chile pepper, and continue cooking until onion is tender.', 'Beat eggs in a bowl, and add to chorizo mixture. Reduce heat to medium-low, and continue cooking and stirring until eggs are scrambled and no longer runny.', 'Warm flour tortillas in the microwave for 30 seconds. Spoon mixture into the middle of each tortilla and top with shredded Cheddar cheese. Roll up like a burrito, and enjoy!'],
    ingredients: ['cooking spray', '¾ pound chorizo sausage, casings removed and crumbled', '½ cup chopped red onion', '1 green chile pepper, seeded and diced', '4 eggs', '4 flour tortillas', '1 cup shredded Cheddar cheese'],
    tags: ['Breakfast', 'Burritos', 'Cheesy'],
    prep: 20,
    cook: 15,
    servings: 4,
    photo: burrito,
  },
  {
    meal: 'Sweet Smoked Pork Ribs',
    description: 'A sweet recipe for smoked pork ribs. I usually use baby back ribs but have had great success with spare ribs as well.',
    instructions: ['Stir salt, white sugar, 2 tablespoons brown sugar, black pepper, white pepper, onion powder, garlic powder, chili powder, paprika, and cumin together in a small bowl to make the dry rub. Rub the spice mixture into the baby back ribs on all sides. Wrap the ribs well with plastic wrap, and refrigerate for at least 30 minutes prior to cooking.', 'Unwrap baby back ribs and place onto the wire racks of the smoker in a single layer.', 'Place the racks into a smoker, fill the smoker pan with apple, grape, pear, or cherry chips, and bring the smoker to 270 degrees F (130 degrees C). Smoke for 1 hour.', 'Stir together the apple juice, 1/4 cup brown sugar, and the barbeque sauce. Brush the ribs with the sauce every 30 to 45 minutes after the first hour. Cook the ribs in the smoker until the meat is no longer pink and begins to "shrink" back from the bones, 3 to 4 hours. Brush the sauce onto the ribs one last time 30 minutes before the ribs are ready to be taken out of the smoker.', 'Once the ribs are done, wrap them tightly with aluminum foil, and allow to rest 10 to 15 minutes. This will allow the juices to reabsorb into the meat and make the ribs moist.'],
    ingredients: ['¼ cup salt', '¼ cup white sugar', '2 tablespoons packed brown sugar', '2 tablespoons ground black pepper', '2 tablespoons ground white pepper', '2 tablespoons onion powder', '1 tablespoon garlic powder', '1 tablespoon chili powder', '1 tablespoon ground paprika', '1 tablespoon ground cumin', '10 pounds baby back pork ribs', '1 cup apple juice', '¼ cup packed brown sugar', '¼ cup barbeque sauce'],
    tags: ['Dinner', 'Meat', 'Tasty'],
    prep: 40,
    cook: 240,
    servings: 10,
    photo: ribs,
  },
  {
    meal: 'Banana Pancakes',
    description: 'Crowd pleasing banana pancakes made from scratch. A fun twist on ordinary pancakes.',
    instructions: ['Combine flour, white sugar, baking powder and salt. In a separate bowl, mix together egg, milk, vegetable oil and bananas.', 'Stir flour mixture into banana mixture; batter will be slightly lumpy.', 'Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Cook until pancakes are golden brown on both sides; serve hot.'],
    ingredients: ['1 cup all-purpose flour', '1 tablespoon white sugar', '2 teaspoons baking powder', '¼ teaspoon salt', '1 egg, beaten', '1 cup milk', '2 tablespoons vegetable oil', '2 ripe bananas, mashed'],
    tags: ['Breakfast', 'Pancakes', 'Delicious'],
    prep: 5,
    cook: 10,
    servings: 6,
    photo: pancakes,
  },
  {
    meal: 'Ramen Noodle Soup',
    description: 'This soup is just very very good....you can find ramen noodles at most supermarkets, or at Asian grocery stores.',
    instructions: ['In a medium saucepan combine broth and noodles. Cover and bring to a boil over high heat; stir to break up noodles. Reduce heat to medium and add soy sauce, chili oil and ginger. Simmer, uncovered, for 10 minutes. Stir in sesame oil and garnish with green onions.'],
    ingredients: ['3 ½ cups vegetable broth', '1 (3.5 ounce) package ramen noodles with dried vegetables', '2 teaspoons soy sauce', '½ teaspoon chili oil', '½ teaspoon minced fresh ginger root', '1 teaspoon sesame oil', '2 green onions, sliced'],
    tags: ['Lunch', 'Soup', 'Noodle'],
    prep: 5,
    cook: 10,
    servings: 2,
    photo: ramenSoup,
  },
  {
    meal: 'Prawns Curry',
    description: 'This is a delicious prawns curry. If you want, you can substitute boiled eggs for the prawns. Serve the curry with naan, roti, or plain rice.',
    instructions: ['Stir the rice flour, turmeric, and salt together in a bowl; add the prawns and turn in the flour mixture to evenly coat.', 'Heat 3 tablespoons oil in a large skillet over medium heat; fry the cumin seeds in the hot oil until they splutter. Add the onions, green chile peppers, and ginger-garlic paste; cook until the onions are browned, about 5 minutes. Stir the pureed tomato, Kashmiri red chili powder, garam masala, and ground cumin into the mixture. Season with salt and continue cooking until the gravy thickens and the oil is released, 10 to 15 minutes. Pour the cream into the skillet and stir; lie the prawns into the mixture and continue cooking until the prawns are cooked through, 3 to 5 minutes more. Garnish with the cilantro to serve.'],
    ingredients: ['½ cup rice flour', '½ teaspoon ground turmeric', 'salt to taste', '1 pound peeled and deveined prawns', '3 tablespoons cooking oil', '1 teaspoon cumin seeds', '2 large onions, sliced thin', '2 green chile peppers, halved lengthwise', '1 tablespoon ginger-garlic paste', '3 cups pureed tomato', '½ teaspoon Kashmiri red chili powder', '½ teaspoon garam masala', '½ teaspoon ground cumin', '¼ cup heavy cream (Optional)', '¼ cup chopped fresh cilantro'],
    tags: ['Prawns', 'Curry', 'Hot'],
    prep: 15,
    cook: 30,
    servings: 6,
    photo: prawns,
  },
];