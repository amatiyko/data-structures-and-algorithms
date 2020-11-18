class MySingleton {
  constructor() {
    if (MySingleton.instance) {
      return MySingleton.instance;
    }

    this.creationDate = Date.now();
    this.randomNumber = Math.random();

    MySingleton.instance = this;

    return this;
  }

  getDate() {
    return this.creationDate;
  }

  getRandomNumber() {
    return this.randomNumber;
  }
}

const singleA = new MySingleton();

setTimeout(() => {
  const singleB = new MySingleton();
  console.log(singleA.getDate() === singleB.getDate()); // true
  console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); // true
}, 1000);
