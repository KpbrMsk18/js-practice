//自分で解いてみた（間違えた）
// const sleep = new Promise((callback, val) => {
//     setTimeout(() => {
//         console.log(val++);
//         resolve(val);
//     }, 1000);
// })

/**
 * sleepには数値を渡す
 * Promiseの引数はresolve or reject
 * 今回はrejectしないのでresolveだけ渡すようにする。
 * setTimeoutで1秒ごとにvalをカウントアップして出力するようにする
 * */

const sleep = (val) => {
    return new Promise((resolve) => {
    //new Promise((resolve) => {
        setTimeout(() => {
            console.log(val++);
            resolve(val);
        }, 1000);
    })
}

//関数呼び出し
//sleep(0).then(sleep).then(sleep).then(sleep);

sleep(0)
    .then((val) => sleep(val))
    .then((val) => sleep(val))
    .then((val) => sleep(val))
    .then((val) => sleep(val))
    .then((val) => sleep(val));

//sleep(0)のあとで.thenができるのは関数sleepがPromiseオブジェクトをreturnしているから