console.log('jeu initialisé !');


let findTheNumber = {
    valueMin: 10,
    valueMax: 1000,
    play: function(){

        // create an aleatory number
        let randomNumber = findTheNumber.randomNumber(findTheNumber.valueMin, findTheNumber.valueMax);
        // display random number in console
        console.log(randomNumber);
    },
    // give the integer of a number
    integer: function(number){

        return Math.floor(number);
    },
    // give a random and integer number between minimum and maximum values
    randomNumber: function(min, max){
        // give a random number between minimum and maximum values
        let aleatoryNumber = Math.random() * (max - min) + min;
        // give the integer of the number
        integerNumber = findTheNumber.integer(aleatoryNumber);

        return integerNumber;
    }

}

findTheNumber.play();