class Baseball {
  constructor() {
    this.answerNumbers = [];
  }

  createAnswerNumbers() {
    const answerNumbers = [];
    const allNumbers = this.getAllNumbers(9);

    while (answerNumbers.length < 4) {
      const randomIndex = Math.floor(Math.random() * allNumbers.length);
      const pickedNumber = allNumbers.splice(randomIndex, 1);
      answerNumbers.push(...pickedNumber);
    }

    return (this.answerNumbers = answerNumbers);
  }

  getAllNumbers(length) {
    const allNumbers = Array(length)
      .fill()
      .map((_, i) => i + 1);

    return allNumbers;
  }
}

const a = new Baseball();
a.createAnswerNumbers();