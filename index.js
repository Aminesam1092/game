const FONT = "48px monospace"; //フォントサイズ

let gFrame = 0; ///内部カウンター
let gImagMap;  //画像ファイル マップデータ
//タイマーイベント発生時
function WmTimer(){
    gFrame++; //内部カウンター加算
    const ca = document.getElementById("main"); //メインキャンバスの要素を取得
    const g =ca.getContext("2d"); //2D 描画コンテキストを取得

    for (let y= 0; y < 16; y++){
        for( let x = 0; x <16; x++){
            g.drawImage( gImagMap, x * 32, y * 32);
        }
    }

    g.font = FONT;
    g.fillText("hello world" + gFrame, gFrame / 10, 64);
}

// ブラウザ起動イベント
window.onload = function(){
    
    
    gImagMap = new Image(); gImagMap.src = "img/map.png"//マップ画像

    setInterval(function(){ WmTimer() }, 60); //60ms間でWmTimer()を呼び出す
}