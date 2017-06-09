function FileWriter(env)
{
	if(FileWriter.unique != undefined)
	{
		return FileWriter.unique;
	}
	this.env = env;
	FileWriter.unique = this;
}

FileWriter.prototype.write = function(path, content)
{
    var file = new File(path);
    file.encoding = "UTF8";
    if(file.open("w") == true)
    {
        file.write(content);
        file.close();
    }
    else
    {
        alert("json文件写入失败，可以尝试把psd文件关闭再打开");
    }
}
