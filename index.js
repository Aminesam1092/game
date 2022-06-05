const FONT = "48px monospace"; //フォントサイズ

//タイマーイベント発生時
function WmTimer(){
    const ca = document.getElementById("main"); //メインキャンバスの要素を取得
    const g =ca.getContext("2d"); //2D 描画コンテキストを取得
    g.font = FONT;
    g.fillText("hello world", 0, 64);
}

// ブラウザ起動イベント
window.onload = function(){

    setInterval(function(){ WmTimer() }, 60); //60ms間でWmTimer()を呼び出す
}