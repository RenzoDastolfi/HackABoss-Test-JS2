const names = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];

function dupRemover(array) {    
    const newArray = [];    
    for (let index = 0; index < array.length; index++) {
        if (newArray.indexOf(array[index]) === -1) {
            newArray.push(array[index]);
        }        
    }    
    return newArray;
}

console.log(dupRemover(names));
