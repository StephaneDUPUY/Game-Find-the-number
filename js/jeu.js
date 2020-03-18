console.log('jeu initialisé !');


let findTheNumber = {
    valueMin: 10,
    valueMax: 1000,
    play: function(){

        // create an aleatory number
        let randomNumber = findTheNumber.randomNumber(findTheNumber.valueMin, findTheNumber.valueMax);
        // display random number in console
        console.log(randomNumber);

        // current quantity of try
        let nbTry = 0;
        // maximum of try
        let nbMaxTry = 3;
        // win status
        let win = false;

        // check quantity of try different of maximum of try and if win value is false
        while(nbTry != nbMaxTry && !win){

            // prompt give popup to enter a value
            let userNumber = prompt('Veuillez saisir un nombre pour jouer');

            // parseInt force value given to be converted in integer
            userNumber = parseInt(userNumber);

            // check if number converted is a number
            if(!isNaN(userNumber)){

                // if number given is good one then success
                if(randomNumber === userNumber){

                    alert('Victoire !');

                    // end of loop
                    win = true;

                } else { // else lose

                    if(userNumber > randomNumber){

                        alert("Trop grand !");
                    } else {
                        alert("Trop petit !");
                    }

                }


            } else {

               alert('Saisie invalide: chiffre attendu');

               gamePlusPetitPlusGrand.play();
            }

            nbTry += 1;

        }

        if(!win){

            alert('Perdu !');
        }
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