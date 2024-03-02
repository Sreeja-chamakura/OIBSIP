let output=document.getElementById('output');
let  btn=document.querySelectorAll('input[type="button"]');

let txt="";
let array=Array.from(btn);
array.forEach(button =>{
    button.addEventListener('click',(e)=>{
        if(e.target.value=="AC"){
            txt=""
            output.value=txt
        }
        else if(e.target.value=="="){
            txt= eval(txt)
            output.value=txt
        }
        else if(e.target.value=="DEL"){
            txt=txt.substring(0,txt.length-1)
            output.value=txt
        }
        else{
            txt =txt+e.target.value
            output.value=txt
        }
    })
})