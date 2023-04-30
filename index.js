const btn=document.getElementById("btn");
const date=document.getElementById("birthday");
const res=document.getElementById("result")
function cala(){
    const bval=date.value;
    if(bval==""){
        alert("Please Enter Your Birthday")
    }
    else{
        const age1=getAge(bval);
        res.innerText = `Your age is ${age1} ${age1 > 1 ? "years" : "year"} old`;
        console.log(age1)
    }
}

function getAge(bval){
    const cdate =new Date()
    const bdate= new Date(bval)
    let age =cdate.getFullYear()-bdate.getFullYear()
    console.log(age)
    const mon=cdate.getMonth()-bdate.getMonth()
    if(mon<0 || (mon===0 && cdate.getDate()<bdate.getDate())){
        age--;
    }

    return age;
}



btn.addEventListener("click",cala);