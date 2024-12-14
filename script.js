
// Starting Month : April
// Ending Month : April

// Creating every required DOM Object
const timeSliderBox = document.querySelector(".time-passed");
const timeRoller = document.querySelector(".timer");
const timerBox = document.querySelector(".inner-timer");
const moneyWon = document.querySelector(".won-money p");
const lockBtn = document.querySelector("#lock-btn");
const nextBtn = document.querySelector("#next-btn");
const quitBtn = document.querySelector("#quit-btn");
const levelContainers = document.querySelectorAll(".level");
const questionContainer = document.querySelector(".question");
const completionBox = document.querySelector(".prize-money-container");
const options = document.querySelectorAll(".option");
const firstOption = options[0];
const secondOption = options[1];
const thirdOption = options[2];
const fourthOption = options[3];
const lifelineButtons = document.querySelectorAll(".life-line");
const firstStage = document.querySelector(".level-5");
const secondStage = document.querySelector(".level-9");


// Creating all the game variables
let question_list = [
    ["What is the largest mammal in the world by weight?","Blue whale","African elephant","Hippopotamus","Giraffe","A"],
    ["Which bird is known for its ability to mimic human speech?","Parrot","Crow","Sparrow","Eagle","A"],
    ["What is the fastest land animal?","Cheetah","Lion","Antelope","Gazelle","A"],
    ["Which animal is known as the 'King of the Jungle'?","Lion","Tiger","Jaguar","Leopard","A"],
    ["What is the largest species of bear?","Polar bear","Grizzly bear","Black bear","Brown bear","A"],
    ["Which animal is known as the 'Ship of the Desert'?","Horse","Camel","Elephant","Zebra","B"],
    ["What is the primary diet of pandas?","Bamboo","Meat","Grass","Fruits","A"],
    ["Which snake is known for its hood and deadly venom?","Cobra","Python","Boa constrictor","Rattlesnake","A"],
    ["What is the largest species of big cat?","Tiger","Lion","Leopard","Jaguar","A"],
    ["Which animal is known for its ability to change its color to match its surroundings?","Chameleon","Octopus","Seahorse","Cuttlefish","A"],
    ["What is the only mammal capable of sustained flight?","Bat","Flying squirrel","Pigeon","Hummingbird","A"],
    ["Which animal has the longest lifespan?","Elephant","Bowhead whale","Tortoise","Macaw","C"],
    ["What is the largest species of fish in the world?","Great white shark","Blue whale","Whale shark","Giant squid","C"],
    ["Which animal is known for its black and white stripes?","Zebra","Tiger","Giraffe","Dalmatian","A"],
    ["What is the fastest flying bird?","Peregrine falcon","Hummingbird","Golden eagle","Albatross","A"],
    ["Which animal can sleep up to 22 hours a day?","Koala","Lion","Sloth","Panda","C"],
    ["What is the largest species of penguin?","Emperor penguin","King penguin","Adélie penguin","Chinstrap penguin","A"],
    ["Which insect is known for its highly organized social structure?","Bee","Ant","Butterfly","Dragonfly","B"],
    ["What is the primary food source of the blue whale?","Plankton","Krill","Squid","Fish","B"],
    ["Which animal has the longest neck relative to its body size?","Giraffe","Swan","Flamingo","Ostrich","A"],
    ["What is the only continent where penguins are found naturally?","Antarctica","Africa","Australia","South America","A"],
    ["Which animal is known for its ability to regrow lost limbs?","Starfish","Lizard","Salamander","Frog","C"],
    ["What is the largest living land mammal?","African elephant","White rhinoceros","Hippopotamus","Giraffe","A"],
    ["Which animal has the keenest sense of smell?","Bloodhound","Elephant","Shark","Wolf","A"],
    ["What is the only mammal capable of true flight?","Bat","Flying squirrel","Pigeon","Hummingbird","A"],
    ["Which animal is known as the 'Gentle Giant'?","Giraffe","Hippopotamus","Elephant","Rhino","C"],
    ["What is the fastest marine animal?","Sailfish","Dolphin","Blue whale","Marlin","A"],
    ["Which bird is known for its distinctive dance during courtship?","Peacock","Flamingo","Swan","Albatross","A"],
    ["What is the only mammal that can fly?","Bat","Flying squirrel","Pigeon","Hummingbird","A"],
    ["Which Pokémon is known as the 'Electric Mouse'?","Pikachu","Jigglypuff","Charmander","Squirtle","A"],
    ["Which Pokémon is a fire-type starter in the Kanto region?","Charmander","Bulbasaur","Squirtle","Pikachu","A"],
    ["What type of Pokémon is Mewtwo?","Psychic","Electric","Water","Grass","A"],
    ["Which Pokémon evolves into Charizard?","Charmeleon","Squirtle","Bulbasaur","Pidgey","A"],
    ["Which Pokémon is known as the 'Seed Pokémon'?","Bulbasaur","Charmander","Squirtle","Pikachu","A"],
    ["What is the name of the Pokémon Professor in the Kanto region?","Professor Oak","Professor Elm","Professor Birch","Professor Sycamore","A"],
    ["What type of Pokémon is Gengar?","Ghost/Poison","Psychic","Dark","Fairy","A"],
    ["Which Pokémon is known as the 'Flame Pokémon'?","Charmander","Charmeleon","Charizard","Charcoal","A"],
    ["What is the evolved form of Pikachu?","Raichu","Electabuzz","Jolteon","Pichu","A"],
    ["Which Pokémon has the ability to transform into any Pokémon it sees?","Ditto","Mewtwo","Mew","Articuno","A"],
    ["What type of Pokémon is Bulbasaur?","Grass/Poison","Fire","Water","Electric","A"],
    ["Which Pokémon is known as the 'Tiny Turtle'?","Squirtle","Bulbasaur","Charmander","Pikachu","A"],
    ["What is the name of the organization that seeks to capture rare Pokémon for profit?","Team Rocket","Team Mystic","Team Valor","Team Instinct","A"],
    ["Which Pokémon is known as the 'Lizard Pokémon'?","Charmander","Bulbasaur","Squirtle","Pikachu","A"],
    ["What type of Pokémon is Dragonite?","Dragon/Flying","Dragon/Water","Dragon/Fire","Dragon/Grass","A"],
    ["Which Pokémon evolves into Blastoise?","Wartortle","Charizard","Bulbasaur","Squirtle","A"],
    ["What is the name of the criminal organization in the Hoenn region?","Team Aqua","Team Magma","Team Galactic","Team Plasma","A"],
    ["Which Pokémon is known as the 'Dragon Pokémon'?","Dragonite","Dratini","Dragonair","Dracovish","A"],
    ["What type of Pokémon is Jigglypuff?","Normal/Fairy","Normal","Normal/Psychic","Normal/Fighting","A"],
    ["Which Pokémon is known as the 'Shellfish Pokémon'?","Krabby","Psyduck","Slowpoke","Seel","A"],
    ["What is the pre-evolution of Charizard?","Charmeleon","Charmander","Squirtle","Bulbasaur","A"],
    ["What type of Pokémon is Snorlax?","Normal","Fighting","Psychic","Dark","A"],
    ["Which Pokémon is known as the 'Sleep Pokémon'?","Snorlax","Jigglypuff","Psyduck","Hypno","A"],
    ["What is the primary type of Pikachu?","Electric","Normal","Fire","Water","A"],
    ["Which Pokémon is known as the 'Mouse Pokémon'?","Pikachu","Rattata","Pidgey","Meowth","A"],
    ["What type of Pokémon is Mew?","Psychic","Normal","Dragon","Fairy","A"],
    ["Which Pokémon is known as the 'Flame Pokémon'?","Charmander","Charmeleon","Charizard","Cyndaquil","A"],
    ["What is the pre-evolution of Gyarados?","Magikarp","Squirtle","Shellder","Horsea","A"],
    ["What type of Pokémon is Gyarados?","Water/Flying","Water/Dragon","Water","Dragon","A"],
    ["Which Pokémon is known as the 'Rock Snake Pokémon'?","Onix","Geodude","Rhyhorn","Graveler","A"],
    ["What type of Pokémon is Machamp?","Fighting","Psychic","Fighting/Steel","Fighting/Dark","A"],
    ["Who is Ash Ketchum's first Pokémon companion?","Pikachu","Squirtle","Bulbasaur","Charmander","A"],
    ["What is the name of the main antagonist organization in the Pokémon anime series?","Team Rocket","Team Aqua","Team Magma","Team Galactic","A"],
    ["Which Pokémon is Misty's primary companion in the early seasons of the anime?","Psyduck","Starmie","Staryu","Togepi","A"],
    ["Who is the Gym Leader of the Viridian City Gym?","Giovanni","Brock","Misty","Blaine","A"],
    ["Who is the first Pokémon Ash catches in the anime series?","Caterpie","Pidgeotto","Bulbasaur","Pikachu","A"],
    ["What is the name of Ash's rival in the Pokémon anime series?","Gary Oak","James","Silver","Jesse","A"],
    ["Who is the Gym Leader of the Cerulean City Gym?","Misty","Brock","Lt. Surge","Erika","A"],
    ["Who is the main character's main companion in the Pokémon anime series?","Pikachu","Bulbasaur","Squirtle","Charmander","A"],
    ["What is the name of the nurse who appears in almost every Pokémon Center in the anime?","Nurse Joy","Officer Jenny","Professor Ivy","Delia Ketchum","A"],
    ["Who is the Gym Leader of the Pewter City Gym?","Brock","Misty","Lt. Surge","Erika","A"],
    ["Which Pokémon does Jessie primarily use in battles?","Wobbuffet","Meowth","Arbok","Seviper","A"],
    ["Who is the first Gym Leader that Ash faces in the Pokémon anime series?","Brock","Misty","Lt. Surge","Erika","A"],
    ["Who is the main antagonist of the 'Pokémon: The First Movie'?","Mewtwo","Team Rocket","Mew","Lugia","A"],
    ["What is the name of the Pokémon breeding expert Ash meets in the Johto region?","Brock","Professor Oak","Casey","Tracey Sketchit","A"],
    ["Who is Ash Ketchum's traveling companion in the Sinnoh region?","Dawn","Misty","Brock","May","A"],
    ["What is the name of James' primary Pokémon companion?","Weezing","Meowth","Arbok","Victreebel","A"],
    ["Who is the Gym Leader of the Celadon City Gym?","Erika","Brock","Misty","Blaine","A"],
    ["Who is the Pokémon Coordinator that travels with Ash in the Hoenn region?","May","Dawn","Misty","Max","A"],
    ["What is the name of the talking Meowth that travels with Jessie and James?","Meowth","Wobbuffet","Ekans","Koffing","A"],
    ["Who is the Gym Leader of the Saffron City Gym?","Sabrina","Brock","Misty","Giovanni","A"],
    ["Who is the Pokémon researcher who travels with Ash in the Orange Islands?","Tracey Sketchit","Professor Oak","Brock","May","A"],
    ["What is the name of the Pokémon that Team Rocket's Meowth falls in love with?","Meowzie","Skitty","Jigglypuff","Persian","A"],
    ["Who is the Gym Leader of the Fuchsia City Gym?","Koga","Brock","Misty","Erika","A"],
    ["Who is the Gym Leader of the Cinnabar Island Gym?","Blaine","Brock","Misty","Erika","A"],
    ["Who is the Gym Leader of the Vermilion City Gym?","Lt. Surge","Brock","Misty","Erika","A"],
    ["Who is the Pokémon researcher who travels with Ash in the Kalos region?","Clemont","Professor Oak","Brock","May","A"],
    ["Who is the Gym Leader of the Lavender Town Gym?","Ghost","Giovanni","Misty","Erika","A"],
    ["In which region Ash won his first ever pokemon regional league?","Kanto","Alola","Galar","Kalos","B"],
    ["Who is the Pokémon Coordinator that travels with Ash in the Sinnoh region?","Dawn","May","Misty","Brock","A"],
    ["Who is the Gym Leader of the Cerulean City Gym?","Misty","Brock","Lt. Surge","Erika","A"],
    ["Who is the alter ego of Spider-Man?","Peter Parker","Bruce Wayne","Clark Kent","Tony Stark","A"],
    ["Who is known as the 'Merc with a Mouth' in Marvel Comics?","Deadpool","Wolverine","Iron Man","Thor","A"],
    ["What metal is bonded to Wolverine's skeleton?","Adamantium","Vibranium","Adamantium","Vibranium","A"],
    ["Who is the king of Wakanda and the Black Panther in Marvel Comics?","T'Challa","Steve Rogers","Tony Stark","Bruce Banner","A"],
    ["Who is the Norse god of thunder in Marvel Comics?","Thor","Loki","Odin","Hulk","A"],
    ["Who is the alter ego of Iron Man?","Tony Stark","Peter Parker","Steve Rogers","Bruce Banner","A"],
    ["Which superhero team includes characters like Professor X and Cyclops and Wolverine?","X-Men","Avengers","Fantastic Four","Guardians of the Galaxy","A"],
    ["Who is the alter ego of Captain America?","Steve Rogers","Peter Parker","Tony Stark","Bruce Wayne","A"],
    ["Who is known as the 'God of Mischief' in Marvel Comics?","Loki","Thor","Odin","Hulk","A"],
    ["Who is the alter ego of the Hulk?","Bruce Banner","Clark Kent","Peter Parker","Tony Stark","A"],
    ["Which cosmic entity is a primary antagonist in the Marvel Universe?","Galactus","Thanos","Dormammu","Ultron","A"],
    ["Who is the primary antagonist of the Fantastic Four?","Doctor Doom","Green Goblin","Red Skull","Magneto","A"],
    ["Which character is known for his/her ability to manipulate probabilities?","Scarlet Witch","Rogue","Storm","Black Widow","A"],
    ["Who is the alter ego of the Punisher?","Frank Castle","Steve Rogers","Bruce Wayne","Peter Parker","A"],
    ["Which Marvel character is known as the 'Master of Magnetism'?","Magneto","Doctor Doom","Green Goblin","Red Skull","A"],
    ["Which character is known for his/her ability to control the weather?","Storm","Magneto","Doctor Strange","Black Panther","A"],
    ["Who is the alter ego of Daredevil?","Matt Murdock","Peter Parker","Bruce Wayne","Clark Kent","A"],
    ["Which character is known as the 'Sorcerer Supreme'?","Doctor Strange","Iron Man","Black Panther","Thor","A"],
    ["Who is the alter ego of Black Widow?","Natasha Romanoff","Wanda Maximoff","Jean Grey","Jessica Jones","A"],
    ["Which character is known as the 'Mistress of Death'?","Death","Thanos","Hela","Enchantress","A"],
    ["Who is the alter ego of the Fantastic Four's leader - Mr. Fantastic?","Reed Richards","Bruce Banner","Tony Stark","Scott Summers","A"],
    ["Which character is known as the 'First Avenger'?","Captain America","Iron Man","Thor","Hulk","A"],
    ["Who is the alter ego of the X-Men's leader - Professor X?","Charles Xavier","Scott Summers","Logan Howlett","Ororo Munroe","A"],
    ["Which character is known for his/her ability to absorb powers and memories?","Rogue","Scarlet Witch","Storm","Black Panther","A"],
    ["Who is the primary antagonist of the X-Men?","Magneto","Apocalypse","Dark Phoenix","Mr. Sinister","A"],
    ["Which character is known as the 'Devourer of Worlds'?","Galactus","Thanos","Dormammu","Ultron","A"],
    ["Who is the alter ego of the X-Men member Wolverine?","Logan Howlett","Scott Summers","Ororo Munroe","Betsy Braddock","A"],
    ["Which character is known as the 'Scarlet Witch'?","Wanda Maximoff","Jean Grey","Emma Frost","Natasha Romanoff","A"],
    ["Who is the alter ego of the X-Men member Cyclops?","Scott Summers","Logan Howlett","Ororo Munroe","Hank McCoy","A"],
    ["Which character is known as the 'Juggernaut'?","Cain Marko","Thanos","Rhino","Colossus","A"]
];
let questions = getAllQuestions(question_list);
const moneyAmounts = getAllMoneyAmounts(levelContainers);
let questionNo = -1;
let level = 0;
let selectedOption = -1;
let totalTime = 45;
let remainingTime = 45;
let startCountDown;
let isLocked = false;
let isAnswered = false;
let lifeLinesUsed = 0;
let reviveLifeLines = false;
let activeOptions = [true, true, true, true];
let isDoubleDipped = false;

// tracks the states of the life lines i.e. their regular images, image with cross, name of lifeline and their state whether they are active or not
const lifelines = {
    doubleDip : {
        image : "double_dip.png",
        cancelled_image : "cancelled_double_dip.png",
        name : "double-dip",
        isActive : true
    },
    fiftyFifty : {
        image : "50_50.png",
        cancelled_image : "cancelled_50_50.png",
        name : "50-50",
        isActive : true
    },
    skipTheQuestion : {
        image : "flip_the_question.png",
        cancelled_image : "cancelled_flip_the_question.png",
        name : "flip-the-question",
        isActive : true
    },
    jumpTheQuestion : {
        image : "jump_the_question.png",
        cancelled_image : "cancelled_jump_the_question.png",
        name : "jump-the-question",
        isActive : true
    },
    powerPaplu : {
        image : "power_paplu.png",
        cancelled_image : "cancelled_power_paplu.png",
        name : "power-paplu",
        isActive : true
    }
}

function gameCompleted(){
    let finalAmount = moneyWon.textContent;
    let textToShow = (finalAmount == "0 $") ? '<span style="font-size: 100px;">Unfortunatelly!</span><br> You won nothing only because you are good for nothing' : `<span style="font-size: 100px;">Congratulations!</span><br> You have won ${finalAmount}`;

    document.body.innerHTML = `<div class='prize-money-container'>
        <div>${textToShow}</div>
        <div class="btn-container">
        <button id="refresh-btn" onclick="location.reload()">New Game</button>
        </div>
    </div>`
}

function getAllMoneyAmounts(levelContainers){
    let amounts = [];
    for (let i of levelContainers){
        amounts.push(i.textContent);
    }
    return amounts;
}

function getAllQuestions(list){

    let questions = [];
    for (let i=0; i<list.length; i++){
        questions.push({
            "question" : list[i][0],
            "option-1" : list[i][1],
            "option-2" : list[i][2],
            "option-3" : list[i][3],
            "option-4" : list[i][4],
            "answer" : list[i][list[i][5].charCodeAt(0)-65+1]   // converting A,B,C,D to n = 1,2,3,4 and then accesing the list[questionNo][n] to get the answer option
        });
    }

    return questions;
}

function gameOver(){
    if (level<=5){
        moneyWon.innerHTML = "0 $";
    } else if (level<=9){
        moneyWon.innerHTML = firstStage.innerHTML;
    } else {
        moneyWon.innerHTML = secondStage.innerHTML;
    }
    gameCompleted();
}

function clearQuestionOptions(){
    questionContainer.innerHTML = "";
    for (let i=0; i<4; i++){
        options[i].innerHTML = "";
    }
}

function highlightMoney(){

    let borderColor = (level==6 || level==10) ? "red" : "gold";
    let borderSize = (level==6 || level==10) ? "3px" : "2px";

    if (level>1){
        levelContainers[level-2].style.cssText = `box-sizing : border-box; border : ${borderSize} solid ${borderColor}; box-shadow : none; background-image: linear-gradient(to right, rgb(25, 0, 214), rgb(0, 5, 146));`;
    }
    levelContainers[level-1].style.cssText = "box-sizing : content-box; border : 2px solid gold; box-shadow : 1px 1px 5px gold, -1px -1px 5px gold; background-image:none; background-color: #00ff00";
}

function setTimers(totalTime, timePassed, remainingTime){
    timeSliderBox.style.width = `${(timePassed*100)/totalTime}%`;
    timeRoller.style.backgroundImage = `conic-gradient(red 0deg, red ${(timePassed*180)/totalTime}deg, darkblue ${(timePassed*180)/totalTime}deg, darkblue 0deg)`;
    timerBox.innerHTML = (totalTime!=120) ? Math.ceil(remainingTime) : "∞";
}

function setTimings(){

    if (level<=4){
        totalTime = remainingTime = 45;
    } else if (level<=8){
        totalTime = remainingTime = 60;
    } else {
        totalTime = remainingTime = 120;
    }
}

function resetStates(){
    
    questionNo = -1;
    for (let i=0; i<4; i++){
        options[i].style.backgroundColor = "darkblue";
    }
    selectedOption = -1;
    setTimings();
    setTimers(totalTime, 0, totalTime);
    clearQuestionOptions();
}

function startTimer(){

    startCountDown = setInterval(()=>{
        remainingTime = remainingTime - 0.1;
        let timePassed = totalTime - remainingTime;
        setTimers(totalTime, timePassed, remainingTime);
        if (remainingTime<=0){
            clearInterval(startCountDown);
            startCountDown = null;
            remainingTime = totalTime;
            gameOver();
            setTimers(totalTime, 0, totalTime);
        }
    }, 100);

}

function checkAns(question_no){

    setTimeout(()=>{
        if (questions[question_no]["answer"] === questions[question_no][`option-${selectedOption+1}`]){
            options[selectedOption].style.backgroundColor = "#00ff00";
            setTimeout(()=>{
                if (level==15){
                    moneyWon.innerHTML = levelContainers[14].textContent;
                    gameCompleted();
                } else {
                    isAnswered = true;
                    resetStates();
                    moneyWon.innerHTML = levelContainers[level-1].textContent;
                    isDoubleDipped = false;
                }
            }, 250);
        } else {
            options[selectedOption].style.backgroundColor = "red";
            if (isDoubleDipped){
                isDoubleDipped = false;
                activeOptions[selectedOption] = false;
                selectedOption = -1;
                isLocked = false;
                isAnswered = false;
                startTimer();
            } else {
                for (let i=0; i<4; i++){
                    if (questions[questionNo][`option-${i+1}`] === questions[questionNo]["answer"]){
                        options[i].style.backgroundColor = "#00ff00";
                    }
                }
                setTimeout(()=>{
                    gameOver();
                }, 250);
            }
        }
    }, 1000);
}

function getRandomOptions(){

    let arr = [];
    while (arr.length < 2){
        let optionNo = Math.floor(Math.random() * 4);
        if (questions[questionNo].answer != options[optionNo].textContent){
            if (arr.length==0 || (arr.length==1 && arr[0]!=optionNo)){
                arr.push(optionNo);
            }
        }
    }
    return arr;
}

function countAvailableOptions(){

    let count = 0;
    for (let i=0; i<4; i++){
        if (activeOptions[i] == true){
            count++;
        }
    }

    return count;
}

function useLifeLine(lifeline){

    let lifeLineName = lifeline.id;

    // Logic to revive a life line after using powerpaplu
    if (reviveLifeLines){
        if (lifeLineName!="powerPaplu" && !(lifelines[lifeLineName].isActive)){
            lifeLinesUsed--;
            lifelines[lifeLineName].isActive = true;
            reviveLifeLines = false;
            lifeline.innerHTML = `<img src="images/${lifelines[lifeLineName].image}" alt="image of ${lifelines[lifeLineName].name} life line">;`;
        }
        return;
    }

    // putting restrictions on using some lifelines in some cases
    if ( (lifeLineName=="jumpTheQuestion" && level==15) || (lifeLineName=="powerPaplu" && lifeLinesUsed==0) || (!reviveLifeLines && (lifelines[lifeLineName].isActive==false) || (lifeLineName=="doubleDip" || lifeLineName=="fiftyFifty") && countAvailableOptions()!=4) || lifeLinesUsed==4 || (lifeLineName=="fiftyFifty" && isDoubleDipped)){
        return;
    }

    // common effect of life lines
    lifeLinesUsed++;
    lifelines[lifeLineName].isActive = false;
    lifeline.innerHTML = `<img src="images/${lifelines[lifeLineName].cancelled_image}" alt="image of unavailable ${lifelines[lifeLineName].name} life line">;`;

    // functionality of flip the question life line
    if (lifeLineName === "skipTheQuestion"){
        // console.log(options[secondOption]);
        if (selectedOption!=-1){
            options[selectedOption].style.backgroundColor = "darkblue";
        }
        selectedOption = -1;
        generateQuestion();
    }

    // functionality of jump the question life line
    if (lifeLineName === "jumpTheQuestion"){

        if (selectedOption!=-1){
            options[selectedOption].style.backgroundColor = "darkblue";
        }
        selectedOption = -1;
        askQuestion();
    }

    // functionality of jump the question life line
    if (lifeLineName === "powerPaplu"){
        reviveLifeLines = true;
    }

    // functionality of 50:50 life line
    if (lifeLineName === "fiftyFifty"){

        let randomOptions = getRandomOptions();
        options[randomOptions[0]].innerHTML = options[randomOptions[1]].innerHTML = "";
        activeOptions[randomOptions[0]] = activeOptions[randomOptions[1]] = false;
        selectedOption = -1;
        for (let i=0; i<4; i++){
            options[i].style.backgroundColor = "darkblue";
        }
    }

    if (lifeLineName === "doubleDip"){
        isDoubleDipped = true;
    }
}

function generateQuestion(){

    questionNo = Math.floor(Math.random()*questions.length);    // fetching the question no
    questions.splice(questionNo, 1);    // Removing questionNo indexed question from questions
    questionContainer.innerHTML = questions[questionNo]["question"];
    firstOption.innerHTML = questions[questionNo]["option-1"];
    secondOption.innerHTML = questions[questionNo]["option-2"];
    thirdOption.innerHTML = questions[questionNo]["option-3"];
    fourthOption.innerHTML = questions[questionNo]["option-4"];

    for (let i=0; i<4; i++){
        activeOptions[i] = true;
    }

}

function askQuestion(){

    generateQuestion();
    level++;
    highlightMoney();

    if (totalTime != 120 && !startCountDown){
        startTimer();
    }
}

window.addEventListener("DOMContentLoaded", ()=>{
    timerBox.innerHTML = totalTime;
})

// Functionality of lock button
lockBtn.addEventListener("click", ()=>{
    if (selectedOption != -1){
        isLocked = true;
        if (startCountDown){
            clearInterval(startCountDown);
            startCountDown = null;
        }
        checkAns(questionNo);
    }
});


// Functionality of next button
nextBtn.addEventListener("click", ()=>{
    if (level==0 || (isLocked && isAnswered)){
        isLocked = false;
        isAnswered = false;
        nextBtn.innerHTML = "NEXT";
        askQuestion();
    }
});


// Functionality of quit button
quitBtn.addEventListener("click", ()=>{
    if (questionNo != -1 && !isLocked){
        gameCompleted();
    }
});

// creating onClick features for each lifeline
for (let i=0; i<lifelineButtons.length; i++){
    lifelineButtons[i].addEventListener("click", ()=>{
        let lifeLineName = lifelineButtons[i].id;
        if (questionNo!=-1 && !isLocked){
            useLifeLine(lifelineButtons[i]);
        }
    })
}

// Functionality on clicking the options button
for (let i=0; i<options.length; i++){
    options[i].addEventListener("click", ()=>{
        // ensuring that the option buttons are not clicked after time is over or any option is locked
        if ( (level>8 || remainingTime!=totalTime) && !isLocked && activeOptions[i]){
            if (selectedOption!=-1){
                options[selectedOption].style.backgroundColor = "darkblue";
            }
            selectedOption = i;
            options[i].style.backgroundColor = "#8888ff";
        }
    });
}