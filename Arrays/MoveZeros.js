const arr=[1,0,2,0,3,4];

const moveZeros=(arr)=>{
    let i=0;
    for(let j=0;j<arr.length; j++){
        if(arr[j]!==0){
            [arr[i],arr[j]]=[arr[j],arr[i]];
            i++;
        }
    }
    return arr;
}

console.log(moveZeros(arr));