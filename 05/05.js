document.addEventListener("DOMContentLoaded", ()=>{
    // 1. dom에서 제어할 노드를 가져오기
    const bt = document.querySelector('#bt1')
    const img = document.querySelector('img')
    const input = document.querySelector('input')
    

    /*
    2. 버튼이 눌러지면 
        [확인]
         - 랜덤수를 생성 => 랜덤수는 다시하기 전까지 변경되면 안됨.
         - input 박스 값이 없으면 '값을 입력하세요.'출력
         - input 박스 값이 1에서 100 사이 숫자가 아니면 '입력오류' 메시지 출력
         - input 박스 값 > 랜덤수 -> down 이미지
         - input 박스 값 < 랜덤수 -> up 이미지
         - input 박스 값 == 랜덤수 -> good 이미지
            - input 보이지 않기
            - 버튼의 캡션을 '숫자를 생성해주세요'로 변경
        [숫자를 생성해주세요]
         - 초기화 : 랜덤수 생성, input박스 보이기 ...
    */
    let n
    let flag = false;

    bt.addEventListener('click', (e)=>{
        //폼태그 사용 시 다시 호출되지 않도록
        e.preventDefault

        if(!flag){ // flag == false
            flag = true;
            n = Math.floor(Math.random()*100)+1
            console.log(n)
        }
        
        if(input.value == ''){
            alert('값을 입력하세요.')
            input.focus();
            return;
        }

        if(input.value > 100 | input.value < 1 ){
            alert('1부터 100사이의 값을 입력하세요')
            input.focus();
            return;
        }

        if(input.value > n) img.setAttribute('src','./img/down.png')
        else if(input.value < n) img.setAttribute('src','./img/up.png')
    
    }) 

})