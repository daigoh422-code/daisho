//HTML上のボタンとメッセージ表示部分を取得
const helloBtn =document.getElementByld("helloBtn");
const message = document.getElementByld("message");

//ボタンがクリックされた時の処理を登録
helloBtn.addEventListener("click",() =>{
    const hour=new Date().getHours();//現在の時刻(0～23)
    let greeting="こんにちは!";//デフォルトのあいさつ(昼)

    if(hour<12){
        greeting="おはようございます！"//朝(12時前)
    } else if(hour>=18){
        greeting="こんばんは！";//夜(18時以降)
    }

    //　メッセージエリアに結果を表示
    message.textContent= `${greeting}GitHub Pagesの公開に成功しました!`;
});