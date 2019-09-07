var change=document.getElementById("text");
function changeBold(){
    if (change.style.fontWeight=="normal")
    {change.style.fontWeight="Bold";}
    else change.style.fontWeight="normal";

}
function changeItalic(){
    if (change.style.fontStyle=="normal")
    {change.style.fontStyle="Italic";}
    else change.style.fontStyle="normal";

}
function changeUnderline(){
if (change.style.textDecoration=="")
{change.style.textDecoration="Underline";}
else change.style.textDecoration="";
}


function changeFont(font){
    document.getElementById("text").style.fontFamily = font.value;
}
function changeSize(fontSize){
    document.getElementById("text").style.fontSize = fontSize.value;
}

