const users = [
    'Anna',
    'Agga',
    'Agrushaa',
    'Anton',
    'Antonnio',
    'Amton',
    'Amonim',
    'Abraham',
    'Atelen',
    'Bill',
    'Billyshine',
    'Billa',
    'Basta',
    'Basssta',
    'Brgtasta',
    'Good',
    'Lalka',
    'Minecrafter',
    'Gagaga',
    'Supermax',
    'Vlad',
    'Zjay',
    'Zarash',
    'Zbrarash',
    'Zbrash',
    'Zbarahh',
    'Zbarash',
    'Zkarandach',
    'Zkakaka',
    'Zhhh',
    'Zcool',
    'Vasya',
    'Jojo',
    'Dany',
    'Maximka',
    'Ava',
    'Bodya',
    'Max',
    'Eva'
];

function getIndex(name) {
    if(name === undefined)
        return -1;
    name = name.toUpperCase();
    switch (name) {
        case 'A': return 1;
        case 'B': return 2;
        case 'C': return 3;
        case 'D': return 4;
        case 'E': return 5;
        case 'F': return 6;
        case 'G': return 7;
        case 'H': return 8;
        case 'I': return 9;
        case 'J': return 10;
        case 'K': return 11;
        case 'L': return 12;
        case 'M': return 13;
        case 'N': return 14;
        case 'O': return 15;
        case 'Q': return 16;
        case 'R': return 17;
        case 'S': return 18;
        case 'T': return 19;
        case 'U': return 20;
        case 'V': return 21;
        case 'W': return 22;
        case 'X': return 23;
        case 'Y': return 24;
        case 'Z': return 25;
    }
}


function changeLetter(letteral, arr, mid, name, max) {
    // console.log('Вариантов нет - сужаю массив!');
    letteral++;
    // console.log(arr);
    if (getIndex([...arr[mid]][letteral]) === -1) {
        console.log('AAAAAAAAAAAAAAAAAAAA');
    }
    else if (getIndex([...name][letteral]) === -1) {
        console.log('AAAAAAAAAAAAAAAAAAAA');
    }
    if (getIndex([...arr[mid]][letteral]) > getIndex([...name][letteral])) {
        // console.log('Меньше');
        return arr.slice(0, mid);
    }
    else if (getIndex([...arr[mid]][letteral]) < getIndex([...name][letteral])) {
        // console.log('Больше');
        return arr.slice(mid + 1, arr.length);
    }
    else if (getIndex([...arr[mid]][letteral]) === getIndex([...name][letteral])) {
        // console.log('Рекурсия!');
        max = arr.length - 1;
        mid = Math.floor((max - 0) / 2);
        arr = changeLetter(letteral, arr, mid, name, max);
        return arr;
    }
}

function findTheWord(arr = ['Test'], name = process.argv[2] || 'Test') {
    arr = arr.sort();
    let max = arr.length - 1; // max
    let min = 0; // min
    let mid = Math.floor((max - min) / 2); // mid number of array
    let letCounter = 0; // the letter's number
    let counter = 0; // counter
    let ownDirection = null; // direction for needed name
    let pickDirection = null; // direction for picked name
    ownDirection = getIndex([...name][letCounter]); // choose the letter , which is letCounter
    pickDirection = getIndex([...arr[mid]][letCounter]); // choose the letter , which is letCounter
    while (name !== arr[mid]) {
        // console.log(arr[mid] + ' - picked name');
        // console.log(ownDirection + " - ownDirection");
        // console.log(pickDirection + " - pickDirection");
        if (ownDirection === pickDirection) {
            arr = changeLetter(letCounter, arr, mid, name, max);
            max = arr.length - 1;
            mid = Math.floor((max - min) / 2);
            pickDirection = getIndex([...arr[mid]][letCounter]);
        }
        else if (ownDirection > pickDirection) {
            arr = arr.slice(mid, max + 1);
            max = arr.length - 1;
            mid = Math.floor((max - min) / 2);
            pickDirection = getIndex([...arr[mid]][letCounter]);
        }
        else if (ownDirection < pickDirection) {
            arr = arr.slice(min, mid);
            max = arr.length - 1;
            mid = Math.floor((max - min) / 2);
            pickDirection = getIndex([...arr[mid]][letCounter]);
        }
        else {
            // console.log('Возникла ошибка , не знаю что делать $(');
        }
        // console.log(arr, ' - из главной');
        counter++;
        // console.log(`${counter} - counts`);
        if (counter > 15) {
            // console.log('Простите , мы ничего не нашли!')
            return new Error('There isn\'t needed name!');
        }
    }
    console.log(`Нашли! ${arr[mid]}`);
}
setTimeout(() => {
    process.exit();
}, 3.5 * 1000);

findTheWord(users);



