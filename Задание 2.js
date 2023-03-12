const x = '[1, 2, 2]'
switch (typeof x) {
    case 'number': 
        console.log('Х - число')
        break;
    case 'string': 
        console.log('Х - строка')
        break;
    case 'boolean': 
        console.log('Х - логический тип данных')
        break;
    default:
    console.log('Тип x не определён')
}