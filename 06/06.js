document.addEventListener('DOMContentLoaded',()=>{
    // 1. 불러오기
    const sel1 = document.querySelector('#sel1')
    const sel2 = document.querySelector('#sel2')

    const txt1 = document.querySelector('#txt1')
    const txt2 = document.querySelector('#txt2')

    const lb1 = document.querySelector('#lb1')
    const lb2 = document.querySelector('#lb2')

    // 2. 왼쪽 option 변화에 따라 <label>값과 오른쪽 option 변경
    const show = (s1, s2, l1, l2) => {
        if(s1.value== '°C') s2.value ='°F';
        else s2.value = '°C';

        l1.textContent = s1.value
        l2.textContent = s2.value
    }



    sel1.addEventListener('change',()=>{
        show(sel1, sel2, lb1, lb2)
    })

    // 3. user에게 값을 입력 받아 오른쪽에 변환
    txt1.addEventListener('change', ()=>{
        if(sel1.value == '°C' & sel2.value =='°F')
            txt2.value = (txt1.value *1.8 +32).toFixed(2); 
        else if(sel1.value == '°F' & sel2.value =='°C')        
            txt2.value = ((txt1.value -32)*5/9).toFixed(2);
        else (sel1.value == sel2.value)
    })
    

})