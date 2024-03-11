let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
    }
  function deleteDigit() {
    let displayValue = document.getElementById('display').value;
    if (displayValue.length > 0) {
      document.getElementById('display')
      .value = displayValue.slice(0, -1);
    }
  }
  function calculatePercentage() {
    let displayValue =
    document.getElementById('display')
    .value;
    if (displayValue!== '') {
        document.getElementById('display')
        .value = parseFloat(displayValue) /100;
    }
  }
  function calculateSquareRoot() {
    let displayValue = document.getElementById('display').value;
    if (displayValue !== '') {
      document.getElementById('display').value = Math.sqrt(parseFloat(displayValue));
    }
  }