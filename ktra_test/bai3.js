


function setnumber(e){
    
    let domnumber=document.getElementById(`number`);
    let n=domnumber.value.trim() ;  
    if(e.key===`Enter`){
          
        check(n);
        domnumber.value=``;
    }  
    
}
function check(n){
    let k=5;
    let domkq=document.getElementById(`check`);
    domkq.innerHTML=``
    if(n>10 ||n<1) domkq.innerHTML=`Nhập lại`
    else if(n!=k) domkq.innerHTML=`Sai rồi`
    else  domkq.innerHTML=`Chúc mừng bạn `
}