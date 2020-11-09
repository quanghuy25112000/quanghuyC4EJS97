let s1=prompt("nhap s1");
let s2=prompt("nhap s2");
let s3="";
if(s1.length>s2.length){
    for(let i=0;i<s1.length;i++){
        if(s2[i]===undefined) s3+=s1[i];
        else s3+=s1[i]+s2[i]
    }
}
else{
    for(let i=0;i<s2.length;i++){
        if(s1[i]===undefined) s3+=s2[i];
        else s3+=s1[i]+s2[i]
    }
}

console.log(s3);