//関数：クローズしてオープン
function reOpen(document);
{

	//documentのファイル名を取得
	var fileName = File(app.document.fullName).fsName;

	//画面再描画抑止
	var enableRedraw = app.scriptPreferences.enableRedraw;
	app.scriptPreferences.enableRedraw = false;

	//アラート抑止
	var userInteractionLevel = app.scriptPreferences.userInteractionLevel;
	app.scriptPreferences.userInteractionLevel = UserInteractionLevels.NEVER_INTERACT;

	//app.activeDocumentを閉じる(セーブしない)
	document.close(SaveOptions.NO);

	//app.activeDocumentだったファイルを再度開く
	app.open(File(fileName));

	//アラート抑止解除
	app.scriptPreferences.userInteractionLevel = userInteractionLevel;

	//画面再描画抑止解除
	app.scriptPreferences.enableRedraw = enableRedraw;

	//終了
	alert("再オープンしました：\n" + fileName);
	return;
}


//main
exec(app.activeScript);
function exec(activeScript)
{
	app.doScript("main(activeScript)", ScriptLanguage.JAVASCRIPT, [], UndoModes.fastEntireScript);
	return;
}
function main(activeScript)
{

	/*  このドキュメントを開き直す.jsx  */
	if(0 < app.documents.length)
	{

		//app.activeDocumentがsavedである場合はクローズしてオープン
		if(app.activeDocument.saved)
		{
			reOpen(app.activeDocument);
		}
	}
	return;
}


