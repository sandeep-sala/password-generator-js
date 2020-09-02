


function generatrePass(){
    var c_l = document.getElementById('pass_length').value
    var e = document.getElementById('in_symbol').checked
    var n = document.getElementById('in_number').checked
    var s = document.getElementById('in_LC').checked
    var c = document.getElementById('in_UC').checked
    var a = document.getElementById('in_AC').checked
    console.log(makePass(c_l,c,s,n,e,a))
    document.getElementById('password-genratered').value = makePass(c_l,c,s,n,e,a)
  
}

function makePass(length,c,s,n,e,a) {
    var result     = '';
    var o_charL    = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var o_charS    = 'abcdefghijklmnopqrstuvwxyz';
    var o_num      = '0123456789';
    var o_spe      = '!@#$%^&*|?';
    var o_abm      = '{}[]()\/"`~,;:.<>'+"'";
    var char       = '';
    if(c == true){ char+= o_charL }
    if(s == true){ char+= o_charS }
    if(n == true){ char+= o_num }
    if(e == true){ char+= o_spe }
    if(a == true){ char+= o_abm }

    var charactersLength = char.length;
    for ( var i = 0; i < length; i++ ) {
       result += char.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }


 function copyText() {
    var copyText = document.getElementById("password-genratered");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}