//main
exec(app.activeScript);
function exec(activeScript)
{
	app.doScript("main(activeScript)", ScriptLanguage.JAVASCRIPT, [], UndoModes.fastEntireScript);
	return;
}
function main(activeScript)
{

	/*  このドキュメントの格納パスをExplorerで開く(VBScript版).jsx  */

	//何かドキュメントを開いている場合は実行
	if(0 < app.documents.length)
	{
		var document = app.activeDocument;
		if(document.saved)
		{

			//このドキュメントを選択した状態のExplorerを開くコマンドをサブスクリプトに出力
			var subScript = new File(File(activeScript).parent.fsName + "\\_subScript.vbs");
			if(subScript.open("w"))
			{
				subScript.writeln('Set Shell = CreateObject("WScript.Shell")');
				subScript.writeln('Shell.Run "explorer.exe /e,/select,""' + File(document.fullName).fsName + '"""');
				subScript.writeln('Set Shell = Nothing');
				subScript.close();
			}

			//サブスクリプトが存在する場合の処理
			if(subScript.exists)
			{

				//サブスクリプトを実行
				if(subScript.execute());
				{

					//スリープ(すぐ削除するとサブスクリプト実行が成功しない)
					$.sleep(500);

					//サブスクリプトを削除
					subScript.remove();
				}
			}
		}
	}
	return;
}


