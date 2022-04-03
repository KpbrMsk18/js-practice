fetch("https://www.google.com")
.then((response) => {
    return response.json();
})
.then((json) => {
    console.log(json);
})

//fetchができない。。。