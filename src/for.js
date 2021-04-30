const crews = [
  { id: 1, name: 'ditto' },
  { id: 2, name: 'cheffe' },
];

const findCrew = (crewId, callback) => {
  const crewName = crews.find((crew) => crew.id === crewId).name;
  callback(crewName);
};

for (var index = 0; index < crews.length - 1; ++index) {
  console.log(index);
}

findCrew(crews[index].id, (v) => console.log(v));
findCrew(crews[index].id, (v) => console.log(v));

for (let crew of crews) {
  findCrew(crew.id, (name) => {
    console.log(crew, name);
  });
}
