//main
exec(app.activeScript);
function exec(activeScript)
{
	app.doScript("main(activeScript)", ScriptLanguage.JAVASCRIPT, [], UndoModes.fastEntireScript);
	return;
}
function main(activeScript)
{

	/*  このドキュメントの格納パスをExplorerで開く.jsx  */

	//何かドキュメントを開いている場合は実行
	if(0 < app.documents.length)
	{
		var document = app.activeDocument;

		//バッチファイル名
		var batchFile = File(activeScript).parent.fsName + "\\_explorer.bat";

		//このドキュメントを選択した状態のExplorerを開くコマンドをバッチファイルに出力
		var batchFileObject = new File(batchFile);
		if(batchFileObject.open("w"))
		{
			var commandString = "";
			commandString += 'start explorer.exe /e,/select,\"';
			commandString += File(document.fullName).fsName;
			commandString += '\"\n';
			batchFileObject.write(commandString);
			batchFileObject.close();
		}

		//バッチファイルが存在する場合の処理
		if(batchFileObject.exists)
		{

			//バッチファイルを実行
			batchFileObject.execute();

			//スリープ(すぐ削除するとstart explorerが成功しない)
			$.sleep(3000);

			//バッチファイルを削除
			batchFileObject.remove();
		}
	}
	return;
}


