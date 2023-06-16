function addRecord(){

    let inputMessageRef = document.querySelector("#id1");
    let message = inputMessageRef.value;
    const uri=`http://localhost:3000/home?message=${message}`;

    //connect the backend-ajax
    fetch(uri);

    inputMessageRef.value ="";

    readRecord();
}

async function readRecord(){
    const uri = "http://localhost:3000/findAll";

    let res = await fetch(uri);
    let list = await res.json();

    for(let item of list){
        let parentRef = document.querySelector("#parent");
        let existingVal = parentRef.innerHTML;
        let newVal = `<h1>${item.message}</h1>`;
        parentRef.innerHTML = newVal + existingVal;
    }
}