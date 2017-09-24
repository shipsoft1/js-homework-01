alert('Hello');

const a = Number(prompt('Enter A'));
const b = Number(prompt('Enter B'));
const c = Number(prompt('Enter C'));

// d = b * b - 4 * a * c;

function d(a, b, c) {
    return b * b - 4 * a * c;
}

function squareEquation(a, b, c) {
    if (d(a, b, c) > 0) { 
        const x1 = - b + Math.sqrt(d(a, b, c)) / 2 * a;
        const x2 = - b - Math.sqrt(d(a, b, c)) / 2 * a;
        return 'x1 = '+ x1 + ' x2 = ' + x2 ;
    } if (d(a, b, c) === 0) {
        const x = - b / 2 * a;
        return 'x =' + x;
    } if (d(a, b, c) < 0) {
        return 'No roots';
    }
}

const result = squareEquation(a, b, c);
document.write(result);