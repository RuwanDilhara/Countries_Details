function search() {
    let searchValue = document.getElementById("txtSearch").value;
    let tblCountries = document.getElementById("tblCountries");
    let exampleimg = document.getElementById("example");
    let maplink = document.getElementById("map");
    let locattion_header = document.getElementById("locationh1");

    let trueLocation;
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
                                <td class="td"><img src="${element.flags.png}" alt="" style="width:80px;"></td>
                                <td class="td">${element.capital}</td>
                                <td class="td">${element.region}</td>
                                <td class="td">${element.population}</td>
                            </tr>`
                            console.log(element.maps.googleMaps);
                locattion_header.innerHTML="Location"
                maplink.innerHTML=`<a href="${element.maps.googleMaps}"> ${searchValue} Location <=click_here</a>`


            });
            tblCountries.innerHTML = tblBody;
            exampleimg.hidden=true;
            
            

            
            // map.innerHTML= trueLocation;

        });
}