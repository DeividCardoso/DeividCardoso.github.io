
window.onload = function(e) {
    btnRun.click();
}

const btnRun = document.getElementById('btn-run');
btnRun.onclick = function(e){
    const editor = document.getElementById('editor');
    const result = document.getElementById('result');
    
    const iframeComponent = result.contentWindow.document;
    iframeComponent.open();
    iframeComponent.writeln(`${editor.innerText}`);
    iframeComponent.close();
}