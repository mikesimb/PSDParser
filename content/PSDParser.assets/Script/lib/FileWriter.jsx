function FileWriter(env)
{
	if(FileWriter.unique != undefined)
	{
		return FileWriter.unique;
	}
	FileWriter.unique = this;
	this.env = env;
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
        alert("json文件写入失败，可以尝试\n1、把unity工具中对相应json文件的引用删去\n2、把psd文件关闭再打开");
    }
}
