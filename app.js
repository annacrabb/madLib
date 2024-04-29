function createParagraph() {
    var wordOne = document.getElementById('wordOne').value;
    var wordOneCaps = wordOne.charAt(0).toUpperCase() + wordOne.substr(1).toLowerCase();
    var wordTwo = document.getElementById('wordTwo').value;
    var wordThree = document.getElementById('wordThree').value;
    var wordFour = document.getElementById('wordFour').value;
    var wordFive = document.getElementById('wordFive').value;
    var wordSix = document.getElementById('wordSix').value;
    var wordSeven = document.getElementById('wordSeven').value;
    var wordEight = document.getElementById('wordEight').value;``
    var wordNine = document.getElementById('wordNine').value;
    var wordTen = document.getElementById('wordTen').value;
    var wordEleven = document.getElementById('wordEleven').value;
    var wordTwelve = document.getElementById('wordTwelve').value;
    var wordThirteen = document.getElementById('wordThirteen').value;

    var paragraph = `In J.R.R. Tolkien's famous trilogy The Lord of the ${wordOneCaps}s, the first book is called The Fellowship of the ${wordOneCaps}. In this book a group of ${wordTwo} Hobbits flee their hometown, pursued by the evil Witch King and his Nazguls. They eventually join into a fellowship made up of ${wordThree} Men, an Elf, a Dwarf, a Wizard, and all their ${wordFour}, with the goal of ${wordFive} the One ${wordOneCaps}. They begin by traveling through the ${wordSix} mountains, where ${wordSeven} the ${wordEight} is lost. They continue on to the forest, where the queen of the ${wordNine} gives them ${wordTen} to ride down the river. At the end of the book, Merri and Pippin get captured by ${wordEleven}, and Frodo is ${wordTwelve} by one of his fellow ${wordThirteen} and leaves on his own (but with Sam).`

    document.getElementById('answer').innerHTML = paragraph;
}
