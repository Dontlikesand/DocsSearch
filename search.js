
function search(){
    var textbox = document.getElementById("searchbar");
    if (textbox.value !== "") {
        console.log(textbox.value);
        documentation(textbox)
        textbox.value = "";
        
    }
}

document.getElementById("searchbar").onkeyup = function(ev){
    if (ev.code === "Enter"){
        search();
    }
};

function documentation(element){
    var disp = document.getElementById('mddisp');
    try {
    var input = element.value;
    var generatedlink = 'https://raw.githubusercontent.com/mdn/content/main/files/en-us/web/html/element/' + input + '/index.md'
    disp.innerHTML = '<zero-md src="' + generatedlink + '"></zero-md>'
    console.log(generatedlink +' link')
    }catch{
        console.log("not a link!")
        disp.innerHTML = '<zero-md src="' + error.md + '"></zero-md>'
    }
}

