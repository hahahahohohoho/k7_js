document.addEventListener("DOMContentLoaded",()=>{
    const txt1 = document.querySelector("#lefttxt")
    const txt2 = document.querySelector("#righttxt")
    const bts = document.querySelectorAll('button') //모든 버튼 불러오기 불러올때 배열 형태로 저장

    txt1.addEventListener('click',()=>{
        txt1.value = ''
    })

    bts[0].addEventListener('click',(e)=>{
        e.preventDefault();
        
        let t1 = txt1.value.replaceAll(' ','').localeCompare();
        let t2 = txt1.value.replaceAll(' ','').split('').reverse().join('').localeCompare();

        if(t1==t2) txt2.value = "회문입니다."
        else txt2.value = "회문이아닙니다."
    })

    bts[1].addEventListener('click',(e)=>{
        let total = 0
        for(let c of txt1.value){
            if(c >=0 & c<=9){
                total = total + parseInt(c);
            }
            txt2.value = total
        }
    })
    bts[2].addEventListener('click',()=>{
        txt2.value = ''
        txt1.value = '단어를 입력하세요'
    })
})