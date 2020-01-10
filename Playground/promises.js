const doWorkPromise = new Promise( (resolve,reject) => {
    setTimeout(() => {
      // resolve([1,4,7])
        reject('This is my error!')
        resolve([1,4,7])
    },2000)
})

doWorkPromise.then((result) => {
    console.log('Success!',result)
}).catch((error) => {
    console.log('Error',error) 
})

//once either reject or resolve is called then promise stops looking for furthur resolve and reject fn