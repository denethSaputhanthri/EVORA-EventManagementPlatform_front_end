let body = ""
let details = document.getElementById("data-container");

async function loadData() {
    fetch("http://localhost:8080/Event/get/details")
        .then(Response => Response.json())
        .then(data => {
            data.forEach(element => {
                console.log(element);
                body += `<div class="data-item col-md-4">
                        <h3> * ${element.eventId}</h3>
                        <p>By: ${element.userId}</p>
                        <p>${element.type}</p>
                        <p>Date: ${element.date}</p>
                        <p>Location: ${element.location}</p>
                        <p>budget: ${element.budget}</p>
                     </div>`;
                details.innerHTML = body;
            });
        });
}