const code = () =>{
    let html = document.getElementById("html").value;
    let css = "<style>" +document.getElementById("css").value +"</style>";
    let js = document.getElementById("js").value;
    let output = document.getElementById("output");
    output.contentDocument.body.innerHTML = html+css;
  
    output.contentWindow.eval(js);
}
document.getElementById("html").addEventListener("keyup", code);
document.getElementById("css").addEventListener("keyup", code);
document.getElementById("js").addEventListener("keyup", code);