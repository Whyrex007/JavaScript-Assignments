
let Num_of_Children;
let Partners_Name;
let Geographical_location;
let Job_title;

function tellFortune(Num_of_Children,Partners_Name,Geographical_location,Job_title){
  let prophesy = `You will be a ${Job_title} in ${Geographical_location} and married to ${Partners_Name} with ${Num_of_Children} kids`

  console.log(prophesy)
};

tellFortune(10,'Abike','Lagos','developer');
tellFortune(20,'Ajoke','Ibadan','pastor');
tellFortune(4,'Arewa','United Kingdom','3d Artist');
