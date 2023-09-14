let sum="";
let btns=document.querySelectorAll('.btn');
Array.from(btns).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML== '='){
            sum=eval(sum);
            document.querySelector('input').value=sum;
        }
        else if(e.target.innerHTML== 'C'){
            sum=""
            document.querySelector('input').value=sum;
        }
        else{
            console.log(e.target);
            sum=sum + e.target.innerHTML;
            document.querySelector('input').value=sum;
        }
    })
});