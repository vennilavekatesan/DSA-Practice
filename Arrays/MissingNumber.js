const arr=[3,0,1];

const missingNumber=(arr)=>{
    let n=arr.length;

    let sum = n*(n+1)/2;
    let arrSum=0;
    for(let i=0; i<n; i++){
        arrSum+=arr[i];
    }
    return sum-arrSum;
}

console.log(missingNumber(arr));