/* 
    1. DOM이 생성된 후에 DOM에서 이미지와 버튼을 가져오기
    2. 버튼 클릭 이벤트 만들기
    3. 랜덤수(1~6) 생성 => Math.floor(Math.random()*6 +1)
    4. 랜덤수에 해당하는 이미지를 src속성에 넣기
*/



document.addEventListener("DOMContentLoaded", () => {
    
    const msg = document.querySelector('#msg')
    const comImg = document.querySelector('#com')
    const userImg = document.querySelector('#user')
    const bts = document.querySelectorAll('button')

    for(let bt of bts){
        bt.addEventListener('click', ()=>{
            const user = parseInt(bt.textContent.charAt(0))
            const com = Math.floor(Math.random()*6 +1)
            
            comImg.setAttribute('src',`./img/${com}.png`)
            comImg.setAttribute('alt',`computer dice num ${com}.`)
            userImg.setAttribute('src',`./img/${user}.png`)
            userImg.setAttribute('alt',`user dice num ${com}`)
            
            console.log(com, user)

            if(user === com) msg.innerHTML = '결과가 일치합니다.'
            else msg.innerHTML = '결과가 불일치합니다.'
            // ===은 데이터 타입까지 동일한 것만 True로 반환
        });
    }
});
