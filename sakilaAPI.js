


function getAll(){
    let xhttp = new XMLHttpRequest();
    let url = "http://localhost:8080/api/film_list";
    let film_list_array = [];
    let film_table = document.createElement("TABLE");
    let table_body = document.createElement("TBODY");
    xhttp.onreadystatechange = function (){
        if (xhttp.readyState == 4 && xhttp.status == 200){

            let film_list = JSON.parse(xhttp.responseText);
            for(let i in film_list){
                let row = document.createElement("TR");
                let title_cell = document.createElement("TD");
                let title_cell_text = document.createTextNode( JSON.stringify(film_list[i].title));
                title_cell.appendChild(title_cell_text);
                row.appendChild(title_cell);
                table_body.appendChild(row);
                
                
            }
    
            
        }
   
 
       
    }
    
    xhttp.open("GET", url,true);
    xhttp.send();
    film_table.appendChild(table_body);
    document.getElementById("filmlist").appendChild(film_table);
    
   
}   
 
// function showFilmNames(data){
//     let output = "<ul>";
//     for (let i in data.film_list){
//         output += "<li>" + data.film_list[i].title + "</li>";
//     }
//     output += "</ul>";
//     document.getElementById("filmlist").innerHTML = output;
// }

   


