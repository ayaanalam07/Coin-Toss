function tossCoin(userChoice) {
    var result;
    var coinImage = document.getElementById("coin-image");
    var randomNumber = Math.floor(Math.random() * 2) + 1;
    var resultOut = document.querySelector("#resultout");

    if (randomNumber === 1) {
        result = "Masjid";
        coinImage.innerHTML = '<img src="./assets/Masjid.jpeg" alt="Masjid">';
    } else {
        result = "Chand";
        coinImage.innerHTML = '<img src="./assets/chand.jpeg" alt="Chand">';
    }

    if (randomNumber === userChoice) {
        // alert("You win! The result is " + result + ".");
        resultout.innerHTML = `You won the toss ! the result is ${result}.`
    } else {
        // alert("You lose! The result is " + result + ".");
        resultout.innerHTML = `You loss the toss ! the result is ${result}.`
    }
}