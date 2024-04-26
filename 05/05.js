document.addEventListener("DOMContentLoaded", () => {
    // 1. dom에서 제어할 노드를 가져오기
    const bt = document.querySelector('#bt1')
    const img = document.querySelector('img')
    const input = document.querySelector('input')
    const title = document.querySelector('#title')



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
    let cl = 0
    let imgName;

    bt.textContent = '숫자를 생성하세요'
    input.style.display = 'none'

    bt.addEventListener('click', (e) => {
        //폼태그 사용 시 다시 호출되지 않도록
        e.preventDefault

        if (!flag) { // flag == false
            flag = true;
            n = Math.floor(Math.random() * 100) + 1
            console.log(n)

            title.innerHTML = `UpDown 게임 남은 횟수 : 5`
            img.setAttribute('src', `./img/what.png`)
            input.style.display = 'inline'
            bt.textContent = '확인'
            input.value = '';
        }


        if (input.value == '') {
            alert('값을 입력하세요.')
            input.focus();
            return;
        }


        if (input.value == '') {
            alert('값을 입력하세요.')
            input.focus();
            return;
        }

        if (parseInt(input.value) > 100 | parseInt(input.value) < 1) {
            alert('1부터 100사이의 값을 입력하세요')
            input.value = ""
            input.focus();
            return;  //함수를 종료시키려고 넣음
        }


        //한번할때마다 기회가 줄고 다 줄어들면 실패 alert
        const op = () => {
            cl++
            title.innerHTML = `UpDown 게임 남은 횟수 : ${5 - cl}`
            if (cl > 4) {
                cl = 0
                flag = false;
                alert('실패했습니다.')
                imgName = 'what'
                input.style.display = 'none' // input 박스 안보이기
                bt.innerHTML = '<p1>숫자를 생성해주세요</p1>'
                title.innerHTML = `UpDown 게임 남은 횟수 : 5`
            };
        }




        if (parseInt(input.value) > n) {
            imgName = 'down';
            op();

        }
        else if (parseInt(input.value) < n) {
            imgName = 'up';
            op();
        }
        else {
            imgName = 'good'
            input.style.display = 'none' // input 박스 안보이기
            alert('정답입니다.')
            title.innerHTML = `UpDown 게임`
            bt.textContent = '숫자를 생성해주세요' //캡션바꾸기 
            cl = 0
            flag = false;//flag를 false로변경
        }



        if (imgName === 'up' || imgName === 'down') {
            input.value = ''
            input.focus
        }

        img.setAttribute('src', `./img/${imgName}.png`)
    })
})