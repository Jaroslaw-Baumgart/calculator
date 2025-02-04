class Calculator {
  constructor() {
    this.firstValue = null; // Zmienna na pierwszą liczbę
    this.operator = null; // Zmienna na operator
    this.secondValue = null; // Zmienna na drugą liczbę
    this.result = document.querySelector("#result");
    this.input1 = document.querySelector("#input1");
    this.input2 = document.querySelector("#input2");
    this.clipboardButton = document.querySelector("#clipboard");
    this.equalButton = document.querySelector("#equal");
    this.plusButton = document.querySelector("#plus");
    this.procentButton = document.querySelector("#procent");
    this.ceButton = document.querySelector("#CE");
    this.clearButton = document.querySelector("#clear");
    this.backspaceButton = document.querySelector("#backspace");
    this.reciprocalButton = document.querySelector("#reciprocal");
    this.powerToButton = document.querySelector("#powerTo");
    this.rootButton = document.querySelector("#root");
    this.divideButton = document.querySelector("#divide");
    this.sevenButton = document.querySelector("#seven");
    this.eightButton = document.querySelector("#eight");
    this.nineButton = document.querySelector("#nine");
    this.multiplyButton = document.querySelector("#multiply");
    this.fourButton = document.querySelector("#four");
    this.fiveButton = document.querySelector("#five");
    this.sixButton = document.querySelector("#six");
    this.minusButton = document.querySelector("#minus");
    this.oneButton = document.querySelector("#one");
    this.twoButton = document.querySelector("#two");
    this.threeButton = document.querySelector("#three");
    this.negativeButton = document.querySelector("#negative");
    this.zeroButton = document.querySelector("#zero");
    this.commaButton = document.querySelector("#comma");

    this.init();
  }

  async init() {
    this.clipboardButton.addEventListener("click", this.copyToClipboard);
    this.result.value = 0;

    this.equalButton.addEventListener("click", this.Equal);
    this.zeroButton.addEventListener("click", this.Zero);
    this.oneButton.addEventListener("click", this.One);
    this.twoButton.addEventListener("click", this.Two);
    this.threeButton.addEventListener("click", this.Three);
    this.fourButton.addEventListener("click", this.Four);
    this.fiveButton.addEventListener("click", this.Five);
    this.sixButton.addEventListener("click", this.Six);
    this.sevenButton.addEventListener("click", this.Seven);
    this.eightButton.addEventListener("click", this.Eight);
    this.nineButton.addEventListener("click", this.Nine);
    this.negativeButton.addEventListener("click", this.Negative);
    this.commaButton.addEventListener("click", this.Comma);
    this.minusButton.addEventListener("click", this.Minus);
    this.plusButton.addEventListener("click", this.Plus);
    this.multiplyButton.addEventListener("click", this.Multiply);
    this.divideButton.addEventListener("click", this.Divide);
    this.clearButton.addEventListener("click", this.Clear);
    this.rootButton.addEventListener("click", this.Root);
    this.powerToButton.addEventListener("click", this.PowerTo);
    this.backspaceButton.addEventListener("click", this.Backspace);
    this.reciprocalButton.addEventListener("click", this.Reciprocal);
    this.ceButton.addEventListener("click", this.Clear);
    this.procentButton.addEventListener("click", this.Procent);
  }

  Zero = () => {
    console.log("0");
    this.result.value += 0;
  };

  One = () => {
    console.log("1");
    this.result.value += 1;
  };

  Two = () => {
    console.log("2");
    this.result.value += 2;
  };

  Three = () => {
    console.log("3");
    this.result.value += 3;
  };

  Four = () => {
    console.log("4");
    this.result.value += 4;
  };

  Five = () => {
    console.log("5");
    this.result.value += 5;
  };

  Six = () => {
    console.log("6");
    this.result.value += 6;
  };

  Seven = () => {
    console.log("7");
    this.result.value += 7;
  };

  Eight = () => {
    console.log("8");
    this.result.value += 8;
  };

  Nine = () => {
    console.log("9");
    this.result.value += 9;
  };

  Plus = () => {
    console.log("plus");
    this.firstValue = parseFloat(this.result.value);
    console.log(this.firstValue);
    this.operator = "+";
    this.result.value = "";
  };

  Minus = () => {
    console.log("minus");
    this.firstValue = parseFloat(this.result.value);
    console.log(this.firstValue);
    this.operator = "-";
    this.result.value = "";
  };

  Negative = () => {
    let currentValue = this.result.value;

    // Sprawdź, czy na początku jest znak minus
    if (currentValue.startsWith("-")) {
      // Jeśli jest minus, usuń go (odetnij pierwszy znak)
      this.result.value = currentValue.substring(1);
    } else {
      // Jeśli nie ma minusa, dodaj go na początek
      this.result.value = "-" + currentValue;
    }
  };

  Comma = () => {
    console.log("comma");
    this.result.value += ".";
  };

  Multiply = () => {
    console.log("multiply");
    this.firstValue = parseFloat(this.result.value);
    console.log(this.firstValue);
    this.operator = "multiply";
    this.result.value = "";
  };

  Divide = () => {
    console.log("divide");
    this.firstValue = parseFloat(this.result.value);
    console.log(this.firstValue);
    this.operator = "divide";
    this.result.value = "";
  };

  Clear = () => {
    console.log("clear");
    this.result.value = [];
  };

  Root = () => {
    console.log("root");
    this.result.value = Math.sqrt(parseFloat(this.result.value));
  };

  PowerTo = () => {
    console.log("Power To");
    this.result.value = Math.pow(parseFloat(this.result.value), 2);
  };

  Reciprocal = () => {
    console.log("reciprocal");
    this.result.value = 1 / parseFloat(this.result.value);
  };

  Procent = () => {
    console.log("procent");
    this.firstValue = parseFloat(this.result.value);
    this.operator = "procent";
    this.result.value = "";
  };

  Backspace = () => {
    console.log("backspace");
    let value = this.result.value;
    console.log(value);
    value = value.slice(0, -1);
    console.log(value);
    this.result.value = value;
  };

  Equal = () => {
    console.log("equal");

    this.secondValue = parseFloat(this.result.value);
    console.log(this.secondValue);

    if (this.operator === "+") {
      const resault = this.firstValue + this.secondValue;
      this.result.value = resault;
    }

    if (this.operator === "-") {
      const resault = this.firstValue - this.secondValue;
      this.result.value = resault;
    }

    if (this.operator === "divide") {
      const resault = this.firstValue / this.secondValue;
      this.result.value = resault;
    }

    if (this.operator === "procent") {
      const resault = this.firstValue * (this.secondValue / 100);
      this.result.value = resault;
    }

    if (this.operator === "multiply") {
      const resault = this.firstValue * this.secondValue;
      this.result.value = resault;
    }

    this.operator = "";
    this.firstValue = "";
    this.secondValue = "";
  };

  copyToClipboard = () => {
    const v = this.result.value;
    const cb = navigator.clipboard;
    cb.writeText(v).then(() => console.log("Password in clipboard!" + v));
  };
}

const calculator = new Calculator();
