document.addEventListener("DOMContentLoaded", ()=>{
    const btDiv = document.getElementById('btDiv'); //html의 btDiv 아이디를 가진 속성을 btDiv로 js에서 변수 선언
    const msg = document.querySelector('#msg')
    // console.log("DOM 완성") //구동 잘되는 지 확인하는 방법 = print함수 // 크롬 개발자환경(F12) - 콘솔에서 확인가능
    const bt1 = document.createElement('button');    //const 상수 선언(값을 유지함/업데이트, 재선언 불가)
    const bt1Txt = document.createTextNode('버튼11');    //캡션을 만든다.
    // bt1.setAttribute('id','bt11'); //버튼의 id속성을 bt11로 추가한다.
    // bt1.appendChild(bt1Txt);    //캡션을 버튼의 자식요소를 추가한다.
    // btDiv.append(bt1);    //btDiv에 bt1을 보여준다.

    const bt2 = document.createElement('button'); 
    const bt2Txt = document.createTextNode('버튼12');


    const btCreate = (bt, idTxt, captionNode, parentNode)=>{ //btCreate라는 함수를 만든다
        bt.setAttribute('id',idTxt); //버튼의 id속성을 bt11로 추가한다.
        bt.appendChild(captionNode);  //캡션을 버튼의 자식요소를 추가한다.
        parentNode.append(bt); //btDiv에 bt1을 보여준다.
    }
    btCreate(bt1, 'bt11', bt1Txt, btDiv);
    btCreate(bt2, 'bt12', bt2Txt, btDiv);

    brCreate(bt1,);



    // bt1.addEventListener('click', ()=>{     //클릭하면 안녕하세요 출력, 안녕하세요 있을 때 삭제
    //     if(msg.innerHTML == '')
    //         msg.innerHTML = '<h1>안녕하세요</h1>';
    //     else
    //         msg.innerHTML = '';
    // })

    bt1.addEventListener('click',()=>{
        msg.innerHTML = '<h1>안녕하세요</h1>'
    })
    bt2.addEventListener('click',()=>{
        msg.innerHTML = ''
    })


});
// html의 구조가 다 완성되면 인수가 함수가 된다. ()는 이름 없는 함수 = function(){}