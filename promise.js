//  2) The Promises to handle the asynchronous code.

function asyn_add(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(a+b);},3000);
    })
}

function asyn_mul(a){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(a*a);},3000);
    })
}

function call_asyn_promise(a){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(a);},3000);
    })
}

asyn_add(5,5).then((sum)=>{
    console.log(sum);
    return asyn_mul(sum);
})
.then((result)=>{
    console.log(result);
    return call_asyn_promise(result);
})
.then((result)=>{
    console.log("The Final Response is:",result);
})
