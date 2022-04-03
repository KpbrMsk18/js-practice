const sleep = (val) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(val++);
            resolve(val);
        }, 1000);
    });
}

Promise.all([sleep(0), sleep(1), sleep(2)]).then(() => console.log('end'));