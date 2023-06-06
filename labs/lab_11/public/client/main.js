const modelsTableInfo = document.getElementsByClassName("models-info-table")[0];
const emptyText = document.getElementsByClassName("empty-text-default")[0];
let someData = [
  { _id: "64648adaf5294c788ca2369f", name: "Cube" },
  { _id: "6464a117b525643ea451bc73", name: "Cube" },
  { _id: "64653089c18b8e292e5fe42f", name: "Romb" },
  { _id: "646530ba69aed4c8cdd7d8e5", name: "Romb" },
  { _id: "646530bc69aed4c8cdd7d8e6", name: "Romb" },
  { _id: "646530bd69aed4c8cdd7d8e7", name: "Romb" },
  { _id: "646530f069aed4c8cdd7d8e8", name: "Romb" },
  { _id: "646530f769aed4c8cdd7d8e9", name: "Romb" },
  { _id: "646530f869aed4c8cdd7d8ea", name: "Romb" },
  { _id: "646530f969aed4c8cdd7d8eb", name: "Romb" },
  { _id: "646530f969aed4c8cdd7d8ec", name: "Romb" },
  { _id: "646530f969aed4c8cdd7d8ed", name: "Romb" },
  { _id: "646530f969aed4c8cdd7d8ee", name: "Romb" },
  { _id: "64653158632197c23584dc3c", name: "Romb" },
  { _id: "6465315b632197c23584dc3d", name: "Romb" },
  { _id: "6465315b632197c23584dc3e", name: "Romb" },
  { _id: "6465315c632197c23584dc3f", name: "Romb" },
  { _id: "6465315c632197c23584dc40", name: "Romb" },
  { _id: "6465315c632197c23584dc41", name: "Romb" },
  { _id: "6465315c632197c23584dc42", name: "Romb" },
  { _id: "64653186d845b91f59900cf8", name: "Romb" },
  { _id: "64678893337f319f672fd1a2", name: "Romb" },
  { _id: "646788ad989af1677f393f2d", name: "Romb" },
  { _id: "646789d9967b5be9584f2e3e", name: "Romb" },
  { _id: "646794a50bc2f13c2dfaf71d", name: "Romb" },
  { _id: "646795a70bc2f13c2dfaf71e", name: "Square" },
];


async function getAllModels() {
  let res = await fetch('http://www.localhost:3000/API/2/models');
  return res;
}

const pullModels = async () => {
  let response = await getAllModels();
  if (response.ok || typeof response === 'object') {
    try{
      let res = await response.json();
      res = someData;
      if (res.length !== 0){
          let tableBody = await renderList(res);
          modelsTableInfo.appendChild(tableBody);
          emptyText.classList.remove('empty-text-visible')
      }
      else{
          emptyText.classList.add('empty-text-visible');
      }
    }
    catch (error) {
    console.log(error)
    emptyText.classList.add('empty-text-visible');
    emptyText.textContent = 'Ошибка запроса!'
    }
  }
}

async function renderList(models) {
  let tBody = document.createElement('tbody');
    models.forEach((element) => {
    for (let i = 0; i < element.lenght; i=i+1) {
      let tRow = document.createElement('tr');

      let tData = document.createElement('td');
      let tDelBtn = document.createElement('td');
      let tViewBtn = document.createElement('td');
      tData.innerText = element.name;
      tData.dataset.id = element._id;
      tRow.appendChild(tData);

      let delBtn = document.createElement('button');
      delBtn.innerText = 'delete model';
      tDelBtn.appendChild(delBtn);
      tDelBtn.style.color = '#bf2233'
      tRow.appendChild(tDelBtn);

      let viewBtn = document.createElement('button');
      viewBtn.innerText = 'view model';
      tViewBtn.appendChild(viewBtn);
      tRow.appendChild(tViewBtn);


      
      tBody.appendChild(tRow);
    }
  });
  return tBody;
}

async function main() {
  return await pullModels();
} 

main()
