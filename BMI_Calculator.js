
function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var bmi = weight / (height * height);
    bmi = bmi.toFixed(2); // Sets BMI to two decimal places for more precise feedback
    var result = document.getElementById('result');
    var animalComparison = document.getElementById('animalComparison');
    var funnyJoke = document.getElementById('funnyJoke');

    // Enhanced animal comparisons
    const animals = {
        underweight: [
            "Like a Giraffe, you’re on the slender side!",
            "Graceful as a Gazelle!",
            "Sleek and quick like a Greyhound!"
        ],
        normal: [
            "You’re just right, like the well-balanced Dolphin!",
            "Smart and sleek like a Fox!",
            "Sturdy and strong like a Horse!"
        ],
        overweight: [
            "Just like a Panda, you’re a bit on the fluffy side!",
            "Cuddly as a Koala!",
            "Solid like a Walrus!"
        ],
        obese: [
            "Channeling the mighty Elephant, aren’t we?",
            "Powerful as a Hippopotamus!",
            "Majestic and grand like a Whale!"
        ]
    };

    // Selecting the animal comparison and joke based on BMI
    let category;
    if (bmi < 18.5) {
        result.textContent = 'Your BMI is ' + bmi + '. This is considered underweight.';
        category = 'underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result.textContent = 'Your BMI is ' + bmi + '. This is considered normal weight.';
        category = 'normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        result.textContent = 'Your BMI is ' + bmi + '. This is considered overweight.';
        category = 'overweight';
    } else {
        result.textContent = 'Your BMI is ' + bmi + '. This is considered obese.';
        category = 'obese';
    }

    animalComparison.textContent = animals[category][Math.floor(Math.random() * animals[category].length)];
    funnyJoke.textContent = getJokeByCategory(category);
}

// Function to get a joke by category with random selection
function getJokeByCategory(category) {
    const jokes = {
        underweight: [
            "Why did the underweight skeleton go to the party alone? He had no body to go with him!",
            "What do you call an underweight ghost? Dead weight!",
            "Why was the underweight book sad? It had too many thin plots!"
        ],
        normal: [
            "Why do normal weight folks make good friends? Because they're well balanced!",
            "Why did the normal weight guy sit on the fence? To keep his balanced perspective!",
            "What's a normal weight person’s favorite type of music? Heavy metal – it’s all about balance!"
        ],
        overweight: [
            "Why did the overweight guy bring a ladder to the bar? He heard the drinks were on the house!",
            "What do overweight computers do? They have too many bytes!",
            "Why don't overweight people play hide and seek? Because good luck hiding!"
        ],
        obese: [
            "Why did the obese phone need to charge all the time? It couldn’t run!",
            "How does an obese cat differ from a comma? One has claws at the end of its paws and one is a pause at the end of a clause!",
            "Why was the obese computer a great singer? It had a big hard drive and lots of gigs!"
        ]
    };
    return jokes[category][Math.floor(Math.random() * jokes[category].length)];
}
