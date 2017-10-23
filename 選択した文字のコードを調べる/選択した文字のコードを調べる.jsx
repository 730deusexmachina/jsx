//main
exec(app.activeScript);
function exec(activeScript)
{
	app.doScript("main(activeScript)", ScriptLanguage.JAVASCRIPT, [], UndoModes.fastEntireScript);
	return;
}
function main(activeScript)
{

	/*  選択した文字のコードを調べる.jsx  */
	if(0 < app.selection.length)
	{
		var character = app.selection[0];
		var code = "(SpecialCharacters Enumeration)";
		try
		{
			code = character.contents.charCodeAt(0);
		}
		catch(e)
		{
		}
		alert("selected : " + character.contents + "\ncode : " + code);
	}
	return;
}


