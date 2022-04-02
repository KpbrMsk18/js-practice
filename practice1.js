//非同期処理実践練習
new Promise((resolve, reject) => {
    console.log('Promise');
    setTimeout(() => {
        resolve('hoge');
    }, 1000);
})
.then((data) => {
    console.log(`then1 - ${data}`);
    return data;
})
.then((data) => {
    console.log(`then2 - ${data}`);
})
.catch((data) => {
    console.log(`catch - ${data}`);
})
.finally((data) => {
    console.log(`finally - ${data}`);
});

console.log('global  end');