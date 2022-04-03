/** Asyncを使って宣言された関数はPromiseオブジェクトを返す→thenを繋げられる
* AwaitはPromiseを返す関数の非同期処理が終わるまでまつ
* 関数ないでawaitが記述されている場合、asyncが関数の先頭にないとエラーとなる
*
 *  以下を簡略化して書く
* const sleep = (val) => {
*     return new Promise((resolve) => {
*         setTimeout(() => {
*             console.log(val++);
*             resolve(val);
*         }, 1000);
*     })
* }
* sleep(0).then(sleep).then(sleep).then(sleep);
 */

const sleep = (val) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(val++)
            resolve(val);
        }, 1000);
    });
};

async function init() {
    let val = await sleep(0);
    val = await sleep(val);
    val = await sleep(val);
    val = await sleep(val);
    val = await sleep(val);
    return val;
};

init().then((val) => console.log(`val: ${val}`));


//asyncが返すもの、受けられるものはPromiseオブジェクトそのもの
//awaitで受けられるものはPromiseのinstance
