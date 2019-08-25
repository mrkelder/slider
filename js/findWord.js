const theMostWords = (arr, rule = 1) => {
    switch (rule) {
        case 1:
            console.log('The most popular words:');
            for (let i of arr) {
                console.log(`${i.word} - ${i.num}`);
            }
            break;
        case 2:
            let string = null;
            for (let i of arr) {
                string += `${i.word} - ${i.num}\n`;
            }
            alert('The most popular words:\n' + string);
            break;
    }

}
const a = (string = "This is a simple stirng has , and I am here , because someone has not written anything!") => {
    let newWordNow = [];
    let stringNow = string
        .split(' ')
        .map(a => a.replace(/!|\.|,|\?|\\|\||\//ig, ''))
        .sort()
        .filter(a => a !== '');
    // Sorting the string - remove every signs include spaces
    let sortStringArr = []; // Clean array with one word from the same words
    for (let i of stringNow) {
        if (sortStringArr[0] === undefined)
            sortStringArr.push(i);
        for (let a of sortStringArr) {
            if (i === a) {
                break;
            }
            else {
                sortStringArr.unshift(i);
                break;
            }
        }
    }
    // Fills words into sortStringAll array 
    for (let i of sortStringArr.sort()) {
        let counter = 0;
        for (let a of stringNow) {
            if (i === a) counter++;
        }
        newWordNow.unshift({ word: i, num: counter });
    }
    // Makes the objects with the words and their nums
    newWordNow.sort(function (a, b) {
        return a.num - b.num;
    });
    // Sorts the array with the objects to choose those correctly
    newWordNow = newWordNow.slice(-5);
    theMostWords(newWordNow);
    // Chooses the last five words from the array with objects
    return newWordNow;
}
try {
    let quiz = prompt('Напишите строчку для поиска или не пишите ничего');
    let arrayWithObjects = a(quiz);
    theMostWords(arrayWithObjects, 2);
}
catch (err) {
    console.log('Attention! Your system does not work with prompt method , so you cannot put any text , we are very disappointed with this... Anyway , we recomend download a browser and run it there.');
    console.error('ERROR: ' + err.message);
    a('Test string , good , nice,, bbb , a a a a , nice , you are you are we are!?');
}
// if prompt does not work catch operator logs the message to warn