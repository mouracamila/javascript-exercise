
let arrayNumber = [];

function generateNumbers()
{
    let number = document.getElementById("numbers").value;

    if (validateNumber(number)) {
        document.getElementById("validate").innerHTML = "This is not valid";
        return;
    }

    arrayNumber = [];

    while(arrayNumber.length < number){
        let i = Math.floor(Math.random() * 50000) + 1;        
        if (arrayNumber.indexOf(i) === -1) arrayNumber.push(i);
    }

    let text = arrayNumber.map((value, idx, arr) => {

        let textTip = `This number is ${value % 2 === 0 ? 'even' : 'odd'}`;

        if (idx != 0) {
            textTip += ` - The previous value is: ${arr[idx-1]}`;
        }

        if (idx != number+1) {
            textTip += ` - The after value is: ${arr[idx+1]}`
        }

         console.log(arr[idx+1]);
        
        return `<span 
            data-toggle="tooltip" 
            data-placement="top" 
            title="${textTip}">${value}</span>`
    }).join(' ');
    showList(text, 'alert-warning');
    
    document.querySelectorAll('.btn-filter').forEach(b => b.disabled = false);
}

function filterEven()
{
    let evenNumbers = arrayNumber.filter(value => value % 2 === 0);

    let text = evenNumbers.map(item => `<span>${item}</span>`).join(' ');
    showResult(text, 'alert-success');

    if (evenNumbers.length === 0) {
        showResult("No have even numbers in this list", 'alert-danger');
    }
    return true;
}

function filterOdd()
{
    let oddNumbers = arrayNumber.filter(value => value % 2 === 1);

    let text = oddNumbers.map(item => `<span>${item}</span>`).join(' ');
    showResult(text, 'alert-success');
    
    if (oddNumbers.length === 0) {
        showResult("No have odd numbers in this list", 'alert-danger');
    }
    return true;
}

function filterPrime()
{
    let primeNumbers = arrayNumber.filter((value) => {
        for (var i = 2; i <= Math.sqrt(value); i++) {
            if (value % i === 0) return false;
        }
        return true;
    });

    if (primeNumbers.length === 0) {
        showResult("No have prime numbers in this list", 'alert-danger');
        return;
    }

    let text = primeNumbers.map(item => `<span>${item}</span>`).join(' ');
    showResult(text, 'alert-success');
}

function filterGrowing()
{
    let growingNumbers = arrayNumber.sort((a,b) => a - b);
    let text = growingNumbers.map(item => `<span>${item}</span>`).join(' ');
    showResult(text, 'alert-success');
}

function filterDecreasing()
{
    let decreasingNumbers = arrayNumber.sort((a,b) => b - a);
    let text = decreasingNumbers.map(item => `<span>${item}</span>`).join(' ');
    showResult(text, 'alert-success');
}

function validateNumber(number)
{
    return (isNaN(number) || number < 5 || number > 100);
}

function showResult(text, type)
{
    document.getElementById('resultFilter').innerHTML = `<div class="alert ${type}">${text}</div>`;
}

function showList(text, type)
{
    document.getElementById('returnNumbers').innerHTML = `<div class="alert ${type}">${text}</div>`;
}