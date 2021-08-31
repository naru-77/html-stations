function getData() {
  const test = [
    { id: 1, first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true }
    ];
  return test.map(x=>buildFullName(x))
}

function buildFullName(data) {
  const full_name = data.family_name + ' ' + data.first_name;
  return {...data,full_name};
}
console.log(getData());
