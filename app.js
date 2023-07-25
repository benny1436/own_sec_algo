const prompt = require('prompt-sync')();
const fs = require('fs');

function encrypt(fileToEncrypt,outputFile,key){
    fs.readFile(fileToEncrypt, 'utf8', function(err, data) {
        if (err) throw err;
        var new_str = ""
        for (var name_i = 0; name_i < data.length; name_i++) {
            var char = data.charCodeAt(name_i);
            var key_i = name_i % key.length;
            var key_char = key.charCodeAt(key_i);
            var new_char = char + key_char;
            new_str += String.fromCharCode(new_char)
        }
        console.log("Encrypted: " + new_str)
        fs.writeFile(outputFile, new_str, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
    });
}
function decrypt(fileToDecrypt,outputFile,key){
    fs.readFile(fileToDecrypt, 'utf8', function(err, data) {
        if (err) throw err;
        var new_str = ""
        for (var name_i = 0; name_i < data.length; name_i++) {
            var char = data.charCodeAt(name_i);
            var key_i = name_i % key.length;
            var key_char = key.charCodeAt(key_i);
            var new_char = char - key_char;
            new_str += String.fromCharCode(new_char)
        }
        console.log("Decrypted: " + new_str)
        fs.writeFile(outputFile, new_str, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
    });
}
function main(){
    //option to encrypt/decrypt
    var option = prompt("Encrypt or Decrypt? (e/d): ");
    //file to encrypt/decrypt
    var file = prompt("File to encrypt/decrypt: ");
    //output file
    var outputFile = prompt("Output file: ");
    //key
    var key = prompt("Key: ");
    if (option == "e"){
        encrypt(file,outputFile,key);
    } else if (option == "d"){
        decrypt(file,outputFile,key);
    }
}
main()
