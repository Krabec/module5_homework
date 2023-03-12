const str = prompt('Введите значение');
const numbers =+ str;
const bullidNum = typeof numbers;
 
if (((bullidNum === 'number') && numbers) || (numbers === 0)) {
    if ((numbers % 2) === 0) {
        console.log('чётное')
    } else {
        console.log('нечётное')
    }
} else {
    console.log('Упс, кажется, вы ошиблись')
}