/* 
    1. DOM이 생성된 후에 DOM에서 이미지와 버튼을 가져오기
    2. 버튼 클릭 이벤트 만들기
    3. 랜덤수(1~6) 생성 => Math.floor(Math.random()*6 +1)
    4. 랜덤수에 해당하는 이미지를 src속성에 넣기
*/



document.addEventListener("DOMContentLoaded", ()=>{  
    // 1. DOM이 생성된 후에 DOM에서 이미지와 버튼을 가져오기
    const img = document.querySelector('#btDiv > img')
    const bt = document.querySelector('#btDiv > button')       
    

    // 2. 버튼 클릭 이벤트 만들기
    bt.addEventListener('click', ()=>{
        // 3. 랜덤수(1~6) 생성 => Math.floor(Math.random()*6 +1)
        const m = Math.floor(Math.random()*6 +1);
        img.setAttribute('src',`./img/${m}.png`);
        img.setAttribute('alt',`${n}`);
    })         

    
});