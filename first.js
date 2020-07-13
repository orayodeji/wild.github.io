alert ("I'll  be writing three Javascript programs on this page with both prompt and alert messages")

function result() {

    let pickANumber = window.prompt('enter a number');


    var sum = 0;
    for (var i = 0; i <= 1000; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum = sum + i;
        }
    }

    alert(`The sum of the multiples of 3 & 5 under 1000 is ${sum}!`);


}




function insert() {

    let data = prompt('enter a number');
    let insert = data.toString();
    let output = [insert[0]];

    for (let i = 1; i < data.length; i++) {
        if (data[i - 1] % 2 === 0 && data[i] % 2 === 0) { output.push("-", data[i]); } else { output.push(data[i]); }
    }
    alert("your number is " + output.join(''));
}



function many() {
    const arr1 = prompt("enter an array");
    let mf = 1;
    let m = 0;
    let item;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = i; j < arr1.length; j++) {
            if (arr1[i] == arr1[j])
                m++;
            if (mf < m) {
                mf = m;
                item = arr1[i];
            }
        }
        m = 0;
    }
    alert(`${item} ( ${mf} times ) `);


}