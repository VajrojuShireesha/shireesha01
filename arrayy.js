function sumofevenoddnbrs(a){
var even=0;
var odd=0;
for(let i=0; i<=a.length; i++) {
    if(a[i]%2 == 0){
        sumofeven+=a[i]
    }
    else{
        sumofodd+=a[i]
    }
}
return[sumofeven,sumofodd]
}
var a=[1,2,3,4,5,6]
console.log(sumofevenoddnbrs(a))

