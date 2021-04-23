const crews = [
  { id: 1, name: 'ditto' },
  { id: 2, name: 'cheffe' },
];

const findCrew = (crewId, callback) => {
  setTimeout(() => {
    const crewName = crews.find((crew) => crew.id === crewId).name;
    callback(crewName);
  }, 10);
};

for (var crew of crews) {
  findCrew(crew.id, (name) => {
    console.log(crew, name);
  });
}

// {id: 2, name: "cheffe"} "ditto"
// {id: 2, name: "cheffe"} "cheffe"

for (let crew of crews) {
  findCrew(crew.id, (name) => {
    console.log(crew, name);
  });
}

// {id: 1, name: "ditto"} "ditto"
// {id: 2, name: "cheffe"} "cheffe"
