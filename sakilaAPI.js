


function getAll(){
    let xhttp = new XMLHttpRequest();
    let url = "http://localhost:8080/api/film_list";
    let film_table = document.createElement("TABLE");
    let table_body = document.createElement("TBODY");
    xhttp.onreadystatechange = function (){
        if (xhttp.readyState == 4 && xhttp.status == 200){

            let film_list = JSON.parse(xhttp.responseText);
            for(let i in film_list){
                let row = document.createElement("TR");
                // title column //
                let title_cell = document.createElement("TD");
                let title_cell_text = document.createTextNode( JSON.stringify(film_list[i].title));
                title_cell.appendChild(title_cell_text);
                row.appendChild(title_cell);

                // description column //
                let desc_cell = document.createElement("TD");
                let desc_cell_text = document.createTextNode(JSON.stringify(film_list[i].description));
                desc_cell.appendChild(desc_cell_text);
                row.appendChild(desc_cell);

                //append this row to table// 
                table_body.appendChild(row);

            }

        }
       
    }
    
    xhttp.open("GET", url,true);
    xhttp.send();
    film_table.appendChild(table_body);
    document.getElementById("filmlist").appendChild(film_table);
    
   
}   

function getFilmByID(){
    // document.getElementById("film_list").removeChild(document.getElementById("film_list").lastChild);
    let filmID = document.getElementById("inputFID").value;
    let xhttp = new XMLHttpRequest();
    url = "http://localhost:8080/api/film_list/" + filmID;
    
    xhttp.onreadystatechange = function (){
        if (xhttp.readyState == 4 && xhttp.status == 200){

            let film_list = JSON.parse(xhttp.responseText);
            console.log(JSON.stringify(film_list));
            let search_result = document.createTextNode(JSON.stringify(film_list));
            document.getElementById("filmlist").appendChild(search_result);
        }
    }
    xhttp.open("GET", url,true);
    xhttp.send();
    
}
 
// function showFilmNames(data){
//     let output = "<ul>";
//     for (let i in data.film_list){
//         output += "<li>" + data.film_list[i].title + "</li>";
//     }
//     output += "</ul>";
//     document.getElementById("filmlist").innerHTML = output;
// }

   


