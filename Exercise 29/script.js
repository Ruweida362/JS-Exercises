
 //               //   **  data from json file  **  //

async function fetchData() {
    console.log("Fetching data");
    const response = await fetch("data.json");
    const data = await response.json();
    console.log(response);
    console.log(data);
    console.log(data[0].fullName);
    console.log(data[0].email);
    console.log(data[0].role);
}
fetchData();



//               //  **  data from api  **  //

async function fetchApiData() {
    console.log("Fetching data from API");

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const data = await response.json();
    console.log(response);
    console.log(data);

    console.log("Name:", data[0].name);
    console.log("Email:", data[0].email);
    console.log("Username:", data[0].username);
}

fetchApiData();

