/* 
    1. DOM이 생성된 후에 DOM에서 이미지와 버튼을 가져오기
    2. 버튼 클릭 이벤트 만들기
    3. 랜덤수(1~6) 생성 => Math.floor(Math.random()*6 +1)
    4. 랜덤수에 해당하는 이미지를 src속성에 넣기
*/



document.addEventListener("DOMContentLoaded", () => {
    // 1. DOM이 생성된 후에 DOM에서 이미지와 버튼을 가져오기
    const comImg = document.querySelector('#com')
    const userImg = document.querySelector('#user')
    const bt1 = document.querySelector('#bt1')
    const bt2 = document.querySelector('#bt2')
    const bt3 = document.querySelector('#bt3')
    const bt4 = document.querySelector('#bt4')
    const bt5 = document.querySelector('#bt5')
    const bt6 = document.querySelector('#bt6')

    const btCreate = (bt, n) => {
        bt.addEventListener('click', ()=>{
            const m = Math.floor(Math.random()*6 +1);
            comImg.setAttribute('src',`./img/${m}.png`);
            comImg.setAttribute('alt',`${m}`);
            userImg.setAttribute('src',`./img/${n}.png`);
            userImg.setAttribute('alt',`${n}`);
        })     
    }

    btCreate(bt1, 1)
    btCreate(bt2, 2)
    btCreate(bt3, 3)
    btCreate(bt4, 4)
    btCreate(bt5, 5)
    btCreate(bt6, 6)




});
