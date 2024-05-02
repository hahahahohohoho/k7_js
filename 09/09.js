document.addEventListener('DOMContentLoaded',()=>{
    const bt = document.querySelector('#bt1')
    const dv = document.querySelector('.spdv')

    bt.addEventListener('click',(e)=>{
        e.preventDefault();
        let arr = [];
        
        while(arr.length<7){
            let n = Math.floor(Math.random() * 45) + 1
            if(!arr.includes(n))arr.push(n);
        }
        arr.sort();
        console.log(arr)
        let tags = arr.map((item)=>{
            return `<span class="sp${Math.floor(item/10)}">${item}</span>`
        });
        //배열 중간에 문자열 추가
        tags.splice(6,0,'<span id="spplus">+</span>')
        tags = tags.join('');
        dv.innerHTML = tags

        //내가 풀어본 방식
        // let tag = `<span id="spplus">+</span><span class="spbonus">${Math.floor(Math.random() * 45) + 1}</span>`
        // dv.innerHTML = tags + tag;
    })
})