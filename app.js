function search() {
    let searchValue = document.getElementById("txtSearch").value;
    let tblCountries = document.getElementById("tblCountries");
    let exampleimg = document.getElementById("example");
    let tblBody = `<tr>
                        <th class="th">Name</th>
                        <th class="th">Flag</th>
                        <th class="th">Capital</th>
                        <th class="th">Region</th>
                        <th class="th">Population</th>
                    </tr>`

    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            data.forEach(element => {
                tblBody += `<tr>
                                <td class="td">${element.name.common}</td>
                                <td class="td">${element.flag}</td>
                                <td class="td">${element.capital}</td>
                                <td class="td">${element.region}</td>
                                <td class="td">${element.population}</td>
                            </tr>`
            });
            tblCountries.innerHTML = tblBody;
            exampleimg.hidden=true;
            console.log(exampleimg);
        });
}