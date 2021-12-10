function foo() {
    let input_1= document.getElementById("input_1").value;
    let input_2= document.getElementById("input_2").value;
    let input_3= document.getElementById("input_3").value;
    let tbx =document.getElementById("textarea").value;
    if(input_1 !==" " && input_2 !==" "  && input_3 !== " " && tbx !== " "){
        
    }else{
        alert("Please fill the blank cells ")
    }
}
foo()