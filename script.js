const boldBtn = document.querySelector('#bold-btn');
const underlineBtn = document.querySelector('#underline-btn');
const italicBtn = document.querySelector('#italic-btn');
const fontSBtn = document.querySelector('#fontSize');
const fontSBtn2 = document.querySelector('#fontSize2');
const fontSBtn3 = document.querySelector('#fontSize3');
const st = document.querySelector('#st-btn');
const ari = document.querySelector('#ari');
const s = document.querySelector('#s');
const ss = document.querySelector('#ss');
const h1 = document.querySelector('#h1');
const h2 = document.querySelector('#h2');
const h4 = document.querySelector('#h4');
const olBtn = document.querySelector('#olb');
const ul = document.querySelector('#ul');
const ind = document.querySelector('#ind');
const vid = document.querySelector('#vid');
const img = document.querySelector('#img');
const linK = document.querySelector('#linK');
const colorBtn = document.querySelector("#color-btn");
const jl = document.querySelector('#jl');
const jr = document.querySelector('#jr');
const jc = document.querySelector('#jc');
const jf = document.querySelector('#jf');
const htemel = document.querySelector('#htemel');


boldBtn.addEventListener('click', () => {
    document.execCommand('bold')
});

underlineBtn.addEventListener('click', () => {
    document.execCommand('underline')
});

italicBtn.addEventListener('click', () => {
    document.execCommand('italic')
});

fontSBtn.addEventListener('click', () => {
    document.execCommand( "fontSize", false, "2" );   
});

fontSBtn2.addEventListener('click', () => {
    document.execCommand( "fontSize", false, "4" );   
});

fontSBtn3.addEventListener('click', () => {
    document.execCommand( "fontSize", false, "6" );   
});

st.addEventListener('click', () => {
    document.execCommand( "strikeThrough", false, "" );   
});

ari.addEventListener('click', () => {
    document.execCommand( "fontname", false, "Arial" );   
});


s.addEventListener('click', () => {
    document.execCommand( "fontname", false, "Serif" );   
});


ss.addEventListener('click', () => {
    document.execCommand( "fontName", false, "stencil" );   
});

h1.addEventListener('click', () => {
    document.execCommand( "formatBlock", false, "<h1>" );   
});

h2.addEventListener('click', () => {
    document.execCommand( "formatBlock", false, "<h2>" );  
});

h4.addEventListener('click', () => {
    document.execCommand( "formatBlock", false, "<h4>" );   
});

olBtn.addEventListener('click', () => {
    document.execCommand( "insertOrderedList", false, "" );    
});

ul.addEventListener('click', () => {
    document.execCommand( "insertUnorderedList", false, "" );
});

ind.addEventListener('click', () => {
    document.execCommand ("indent" , false, "" );
});

img.addEventListener('click', () => {
    let theImaij = prompt("Enter your image url:");
	if(theImaij != null) {
		document.execCommand("insertImage",false,theImaij);
	}
});

vid.addEventListener('click', () => {
    let theVid = prompt("Enter your video url:");
	if(theVid != null) {
		document.execCommand("insertVideo",false,theVid);
	}
}) ;

linK.addEventListener('click', () => {
	let linc = prompt("Enter your url:");
	if(linc != null) {
		document.execCommand("createLink",false,linc);
	}
});

colorBtn.addEventListener("input", () => {
    document.execCommand("forecolor", false, colorBtn.value);
});

jl.addEventListener('click', () => {
    document.execCommand('justifyLeft')
});

jr.addEventListener('click', () => {
    document.execCommand('justifyRight')
});

jf.addEventListener('click', () => {
    document.execCommand('justifyFull')
});

jc.addEventListener('click', () => {
    document.execCommand('justifyCenter')
});


function htemelView() {
  var x = document.getElementById("content");
    x.innerHTML.style.display = 'block';
}

