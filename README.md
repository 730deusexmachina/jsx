# 最近書いたもの(主に拡張子が.jsx)  
特に注意書きのないものは、Windows用のInDesign上で動くExtend Script

## jsx/このドキュメントの格納パスをExplorerで開く/

### このドキュメントの格納パスをExplorerで開く(バッチファイル版).jsx
app.activeDocumentがsavedである時、右ペインでそのファイルが選択された状態のエクスプローラを開く(バージョン1)
* エクスプローラ起動部分を「バッチファイル作る→バッチファイル実行する→バッチファイル削除する」で実現  _subScript.batはこの方法で作成されるバッチファイルのサンプル
	* よい点：特にない
	* 悪い点：ない方がよいファイルI/Oがある(バッチファイル作る・バッチファイル削除する)
	* 悪い点：エクスプローラ起動部分をバッチファイルで実現しているため、実行するとDOS窓が開くのが邪魔
  
  

### このドキュメントの格納パスをExplorerで開く(VBScript版).jsx
app.activeDocumentがsavedである時、右ペインでそのファイルが選択された状態のエクスプローラを開く(バージョン2)
* エクスプローラ起動部分を「VBScript作る→VBScript実行する→VBScript削除する」で実現  _subScript.vbsはこの方法で作成されるVBScriptのサンプル
	* よい点：実行してもDOS窓が開かない
	* 悪い点：ない方がよいファイルI/Oがある(VBScript作る・BScript削除する)

→vbs/このドキュメントの格納パスをExplorerで開く/に続く
  
  

## jsx/全レイヤーのロックを外す/
app.activeDocumentの全レイヤーに対して、ロックを解除する

## jsx/選択した文字のコードを調べる/
InDesignドキュメント中で1文字選択して実行すると、文字コードをダイアログ表示する
* <http://blog.kanemu.net/2009/05/blog-post.html> にあるコードのほとんど丸パクりですすみません‥‥‥
  
  

## jsx/このドキュメントを開き直す/
app.activeDocumentがsavedである時、一旦(セーブせずに)閉じて、再度開く
  
  

