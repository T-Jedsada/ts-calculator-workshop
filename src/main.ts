class Main {
    stdin = process.openStdin();
  
    constructor() {
      this.inputListener();
    }
  
    private inputListener(): void {
      this.printMenuOperator();
      this.stdin.addListener("data", (input) => {
        try {
          let data = Number(input.toString().trim());
          if (typeof data === "number") {
            // TODO1: get operator
            // TODO2: get input number1 and number2
            // TODO3: calculator from data
          } else {
            console.log("Please inoput number format");
          }
        } catch (err) {
          console.log(err);
        }
      });
    }
  
    private printMenuOperator(): void {
      console.log("********************************");
      console.log("***Please select operator**");
      console.log("**Number 1 is Plus**");
      console.log("**Number 2 is Minus**");
      console.log("**Number 3 is Multiply**");
      console.log("**Number 4 is Devide**");
      console.log("********************************");
    }
  }
  
  function main(): void {
    new Main();
  }
  
  main();
  