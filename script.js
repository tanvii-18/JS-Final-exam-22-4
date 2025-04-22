const covidData = document.querySelector("#covidData");

fetch('https://api.rootnet.in/covid19-in/stats/latest')
  .then(response => response.json())
  .then(data => {
    
    const regionalData = data.data.regional;

    let output = "";

    regionalData.forEach((state, index) => {
      output += 
        `<tr class="tableRow">
          <td class="data" id="index">${index + 1}</td>
          <td class="data">${state.loc}</td>
          <td class="data">${state.confirmedCasesIndian}</td>
          <td class="data">${state.confirmedCasesForeign}</td>
          <td class="data">${state.discharged}</td>
          <td class="data">${state.deaths}</td>
          <td class="data">${state.totalConfirmed}</td>
        </tr>`;
    });

    covidData.innerHTML += output;
  })
  .catch(error => {
    console.error("Error in fetching data", error);
  });
