function handleClick(n) {
    // document.querySelector('#msg').innerHTML = '<h1>안녕하세요!</h1>';
    document.querySelector('#msg').innerHTML = `<h1>안녕하세요! ${n} </h1>`; //백틱 ` = '~'물결표시임
}



document.addEventListener("DOMContentLoaded", ()=>{
    // document.getElementById('msg').innerHTML = '안녕하세요';
    // document.querySelector('#msg').innerHTML = '<h1>안녕하세요</h1>';
});