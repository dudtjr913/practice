const log = console.log;

function* odds(number) {
  for (let i = 0; i < number; i++) {
    if (i % 2) yield i;
  }
}

const oddsIterator = odds(10);
log(oddsIterator.next());
log(oddsIterator.next());
log(oddsIterator.next());
log(oddsIterator.next());
log(oddsIterator.next());
log(oddsIterator.next());
