//main
exec(app.activeScript);
function exec(activeScript)
{
	app.doScript("main(activeScript)", ScriptLanguage.JAVASCRIPT, [], UndoModes.fastEntireScript);
	return;
}
function main(activeScript)
{

	/*  全レイヤーのロックを外す.jsx  */

	//何かドキュメントを開いている場合は実行
	if(0 < app.documents.length)
	{
		var document = app.activeDocument;
		for(var counter = 0; counter < document.layers.length; counter++)
		{
			document.layers[counter].locked = false;
		}
		alert("終了");
	}
	return;
}


