const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    //создадим массив для записи результатов строка/10
    var arrayOfChars=[];
    //создадим цикл для извлечения букв
    for (var index=0; index<expr.length; index+=10){
        var char=expr.substr(index,10);
        arrayOfChars.push(char);
    }
    //создадим цикл который элементы массива будет декодировать в букву
    for( var i=0; i<arrayOfChars.length; i+=1){
        arrayOfChars[i]=GetLetter(arrayOfChars[i]);
    }
    let str = arrayOfChars.join('');
    return str;

}
module.exports = {
    decode
}// напишем функцию,которая из 10 цифр получает букву
function GetLetter(code){
    if (code==="**********"){
        return " ";
    }
    var morzeCode="";
    for (var index=0; index<code.length; index+=2){
        var char=code.substr(index,2);
        if(char==="10"){
            morzeCode+=".";
        }
        if(char==="11"){
            morzeCode+="-";
        }
    }
    return MORSE_TABLE[morzeCode]
}
