
let arrayNumber = [];

function generateNumbers()
{
    let number = document.getElementById("numbers").value;

    // check if input number is valid
    if (validateNumber(number)) {
        document.getElementById("validate").innerHTML = "This is not valid";
        return;
    }

    arrayNumber = [];

    while(arrayNumber.length < number){
        let i = Math.floor(Math.random() * 50000) + 1;        
        if (arrayNumber.indexOf(i) === -1) arrayNumber.push(i);
        
    }

    document.getElementById('returnNumbers').innerHTML = arrayNumber.map(item => `<span>${item}</span>`).join(' ');
    console.log(arrayNumber);
}

function filterEven()
{
    let evenNumbers = arrayNumber.filter(value => value % 2 === 0);
    document.getElementById('resultFilter').innerHTML = evenNumbers.map(item => `<span>${item}</span>`).join(' ');
}

function filterOdd()
{
    let oddNumbers = arrayNumber.filter(value => value % 2 === 1); 
    document.getElementById('resultFilter').innerHTML = oddNumbers.map(item => `<span>${item}</span>`).join(' ');
}

function filterPrime()
{
    let primeNumbers = arrayNumber.filter((value) => {
        for (var i = 2; i <= Math.sqrt(value); i++) {
            if (value % i === 0) return false;
            document.getElementById("feedback").innerHTML = "No have prime numbers in the list";
            return;
        }
        return true;
    });
    document.getElementById('resultFilter').innerHTML = primeNumbers.map(item => `<span>${item}</span>`).join(' ');
}

function filterGrowing()
{
    let growingNumbers = arrayNumber.sort((a,b) => a - b);
    document.getElementById('resultFilter').innerHTML = growingNumbers.map(item => `<span>${item}</span>`).join(' ');
}

function filterDecreasing()
{
    let decreasingNumbers = arrayNumber.sort((a,b) => b - a);
    document.getElementById('resultFilter').innerHTML = decreasingNumbers.map(item => `<span>${item}</span>`).join(' ');
}

function validateNumber(number)
{
    return (isNaN(number) || number < 5 || number > 100);
}

