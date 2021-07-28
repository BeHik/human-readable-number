module.exports = function toReadable (number) {

    const a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const myNum = Number(number);
    
    if (isNaN(myNum)) return '';
    if (myNum === 0) return 'zero';
    numStr = (Math.trunc(myNum/100)>0) ? a[Math.trunc(myNum/100)] + 'hundred' : '';
    numStr += (a[myNum % 100]===undefined) ? ' ' + b[Math.trunc((myNum % 100)/10)] + ' ' + a[myNum % 10] : ' ' + a[myNum % 100];
    return numStr.trim()
}
