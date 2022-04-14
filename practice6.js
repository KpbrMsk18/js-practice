
new Promise ((resolve, reject) => {
    console.log('test');
    setTimeout(() => {
        resolve('hoge');
    }, 1000)
}).then((data) => {
    console.log(`then - ${data}`);
})