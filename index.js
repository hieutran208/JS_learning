function test(){
    setTimeout(() => console.log('1'), 1000);
    console.log('2')
    console.log('3')
}
test()
const currentPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        
    },3000)
})