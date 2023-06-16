function addRecord(){

    let inputMessageRef = document.querySelector("#id1");
    let message = inputMessageRef.value;
    const uri=`http://localhost:3000/home?message=${message}`;

    //connect the backend-ajax
    fetch(uri);

    message.value="";
}