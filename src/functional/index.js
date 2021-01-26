const log = console.log;

function* infinity(startNumber = 0) {
  while (true) yield startNumber++;
}

function* odds(startNumber, finishNumber) {
  for (const number of infinity(startNumber)) {
    if (number % 2) yield number;
    if (number === finishNumber) return;
  }
}

const oddsIterator = odds(1, 7);
log(oddsIterator.next());
log(oddsIterator.next());
log(oddsIterator.next());
log(oddsIterator.next());
log(oddsIterator.next());
log(oddsIterator.next());
