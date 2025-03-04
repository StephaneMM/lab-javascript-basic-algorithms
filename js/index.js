// Iteration 1: Names and Input
let hacker1 = "Stephane";
let hacker2 = "Emna";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
}

// Iteration 3: Loops
// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let compounded = "";
for (index = 0; index < hacker1.length; index++) {
  compounded = compounded + hacker1[index].toUpperCase() + " ";
}
console.log(compounded);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let navCompound = "";
for (index = hacker2.length - 1; index >= 0; index--) {
  navCompound = navCompound + hacker2[index] + " ";
}
console.log(navCompound);

// next step refacto using reverse() 

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// if same name ?=> clg( waw same name)
// then for
if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
}

for (index = 0; index < hacker1.length - 1; index++) {
  if (hacker1[index] > hacker2[index]) {
    console.log(`Yo, the navigator goes first definitely.`);
    break;
  } else if (hacker1[index] < hacker2[index]) {
    console.log(`The driver's name goes first.`);
    break;
  } else {
    continue;
  }
}

// BONUS 1

let dummyText =
  "Lorem ipsum dolor sit amet velit aliquam tellus, vitae dictum ipsum sem vitae eros. Vestibulum viverra ornare nunc ac rhoncus. Cras a sem odio. Vestibulum quis ex et tellus. Etiam consectetu fringilla neque eget \
lor sit amet velit aliquamet tellus, vitae et dictum ipsum sem vitae eros. Vestibulum viverra ornare et nunc ac rhoncus. Cras a sem odio. Vestibulum quis ex tellus et. Etiam consectetur fringilla neque ege";

console.log(dummyText);

console.log(
  `Le texte ci-dessus contient ${dummyText.split(" ").length} mots`
);

let occurence = 0;

dummyText.split(" ").forEach((element) => {
  if (element === "et"|| element === "et." ) {
    occurence += 1;
  }
});
// Added || element === "et." in case "et" is at the end of a sentence

console.log(`il y a ${occurence} fois le mot "et" `);
// console.log(`Votre chaine contient ${dummyText.includes("et")} m`)

// BONUS 2


let phraseToCheck = "A man, a plan, a canal, Panama!";

// select and/or withdraw anything other than letters
let notAlphaNum = /[\W_]/g; 
// => /[\W_]/g is equivalent to /[^A-Za-z0-9]/g >>>> matches anything that is not enclosed between A-Z a-z 0-9
// => source: https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/

// toLowerCase in case (it's case sensitive)
function subReady(phrase) {

  let result = phrase.toLowerCase().replace(notAlphaNum, "");
  return result;

}

// check console.log(subReady(phraseToCheck)) => amanaplanacanalpanama >>> OK!

// split in two part from the middle
// next step refacto using split

let halfPhrase = subReady(phraseToCheck).substring(0, subReady(phraseToCheck).length / 2);

// check console.log(halfPhrase) => amanaplana >>> OK!

// reverse halfPhrase using first excercie   

let halfPhraseReversed = "";
for (index = halfPhrase.length - 1; index >= 0; index--) {

    halfPhraseReversed = halfPhraseReversed + halfPhrase[index];

  }

// check console.log(halfPhraseReversed) = > analpanama >>> OK !

// compare it to the other we just use .includes methode it my not be as secure but is the easiest way

if (subReady(phraseToCheck).includes(halfPhraseReversed)) {

    console.log(`${phraseToCheck} is a  Palindrome.`);
} else {
    console.log(`${phraseToCheck} is a NOT Palindrome.`);

};

// >>>>>>>>>>>>> HERE IS THE SHORTCUT <<<<<<<<<<<<<<<<<

// function palindrome(str) {
//     var re = /[\W_]/g;
//     var lowRegStr = str.toLowerCase().replace(re, '');
//     var reverseStr = lowRegStr.split('').reverse().join(''); 
//     return reverseStr === lowRegStr;
//   }
//   palindrome("A man, a plan, a canal. Panama");

