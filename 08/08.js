document.addEventListener('DOMContentLoaded',()=>{
    const txt1 = document.querySelector('#txt1');
    const bt8 = document.querySelectorAll('.bt8');
    const bt81 = document.querySelectorAll('.bt81');
    const bt82 = document.querySelectorAll('.bt82');
    
    let arr = [];
    let obj = {
        '사과' : '🍎',
        '바나나':'🍌',
        '수박':'🍉',
        '딸기':'🍓',
        '당근' : '🥕',
        '가지' : '🍆',
        '토마토' : '🍅',
        '감자' : '🥔'
    }

    //배열 추가
    for(let bt of bt8){
        bt.addEventListener('click',(e)=>{
            e.preventDefault();
            arr.push(obj[bt.textContent])
            // if(bt.textContent == '사과') arr.push('🍎')
            // else if(bt.textContent == '바나나') arr.push('🍌')
            // else if(bt.textContent == '수박') arr.push('🍉')
            // else if (bt.textContent == '딸기') arr.push('🍓')
            txt1.value = arr.join('') //input에 arr를 display한다.
        })
    }

    //배열 삭제
    for(let bt of bt81){
        bt.addEventListener('click',(e)=>{
            e.preventDefault();
            const k = obj[bt.textContent.replace(' 삭제','')];
            //배열 필터
            // arr = arr.filter((item)=>{return item != k;}); //item이 아닌 것만 필터해서 return해줌
            arr = arr.filter(item=>item != k); //return문만 있을 경우, 중괄호와 return 생략가능, 매개변수가 하나일 경우 매개변수 기호() 생략
            txt1.value = arr.join('')
        })
    }

    //배열 변환
    for(let bt of bt82){
        bt.addEventListener('click',(e)=>{
            e.preventDefault();
            let tm = bt.textContent.split('→')
            arr = arr.map(item=>item == obj[tm[0]]
                                        ?obj[tm[1]] : item);
            txt1.value = arr.join('')
        })
    }
})