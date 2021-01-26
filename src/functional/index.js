const log = console.log;

function* infinity(startNumber = 0) {
  while (true) yield startNumber++;
}

function* limit(iterable, finishNumber) {
  for (const number of iterable) {
    yield number;
    if (number === finishNumber) return;
  }
}

function* odds(startNumber, finishNumber) {
  for (const number of limit(infinity(startNumber), finishNumber)) {
    if (number % 2) yield number;
  }
}

const oddsIterator = odds(1, 7);
log(oddsIterator.next());
log(oddsIterator.next());
log(oddsIterator.next());
log(oddsIterator.next());
