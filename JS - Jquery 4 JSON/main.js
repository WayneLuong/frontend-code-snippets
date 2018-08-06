/* if(window.jQuery){
    alert("jquery loaded");
} */

/* ----------------GET---------- */
$.ajax ({
    type: "GET",
    url: 'people.json',
    success: (data) => {
        console.log("success", data);
        /* get JSON attribute */
        console.log(data.name, data.age);
        /* get JSON object */
        console.log(data.address.street);
        /* get JSON array */
        console.log(data.children[1]);
    },
    error: ()=>{
        alert("Error Getting"); 
    }
})

/* ----------------POST---------- */
var newPerson = {
    name: "Elaine",
        age : 18,
        address: {
            street: "5 main street",
            city: "Wolverhampton"
        },
        children : ["Sophie", "Will"]
}

$.ajax ({
    method: 'POST',
    url:'people.json',
    data: {newPerson},
    success: ()=> {
        console.log("Success Posting")
    },
    error: ()=>{
        console.log("Error Posting"); 
    }
})

/* $.post('people.json', {
    name: "Elaine",
    age : 18,
    address: {
        street: "5 main street",
        city: "Wolverhampton"
    },
    children : ["Sophie", "Will"]
}) */

/* ------------------- AJAX DELETE --------------------- */

       $.ajax ({
          type:'DELETE',
          url:'people.json',
          data: {
              name
          },
          success: function(){

          }
      }) 

 /* ------------------- AJAX PUT --------------------- */

$.ajax({
    type:'PUT',
    url: 'people.json',
    data: {
        name:"John"
    },
    success: function(){
        //Do something
    },
    error: function(){
    }
})