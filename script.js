
//  chp 83


// function registrationForm(){
//     let Name = document.getElementById('name').value
//     let  Contact= document.getElementById('contact').value
//     let Email = document.getElementById('email').value
//     let Password = document.getElementById('password').value
//     let Confirm_Password = document.getElementById('conf_pass').value
    
//     if(Name==""||Contact==""||Email==""|| Password==""||Confirm_Password==""){
//         alert("All Field are Mandatory to fill")
//         return false;
//     }
//     else if(Contact.lenth>10 || Contact.length<10){
//         alert("number should be of 10 digits")
//         return false
//     }
//     // else if(Password =!Confirm_Password){
//     //     alert("Enter the same password")
//     //     return false 
//     // }
//     else if(isNaN (Contact)){
//         alert("enter the digits in numbers")
//         return false
//     }
//     else{
//     return true;
//     }
//      }


//  chp 84
// function checkForSelection()
//  { if (document.getElementById("states").selectedIndex === 0)
//   {     alert("Please select a state."); 
//    return false;  }  }


//  chp 87


//  to handle the error through try and catch error
function greetWorld() { 
    try{
     let greeting = "Hello world!"; 
     
     aler(greeting); 
     }
    
     catch(error){
  alert (error)
     }}
     greetWorld()
