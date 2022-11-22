


const btn = document.querySelector('button.btn');
btn.addEventListener('click', e=>{
    //validateInput();

    const inputText = document.querySelector('input#input').value;
    const selectValue = document.querySelector('select').value;

    const div = document.querySelector('div#qrcode');
      if (validateText(inputText))
      {

      
    const arrWords = selectValue.split('x')
    const div = document.querySelector('div#qrcode');
    div.innerHTML = ''
    var qrcode = new QRCode(div, {
        text: inputText,
        width: arrWords[0],
        height: arrWords[1],
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    qrcode.makeCode(inputText)
   

    throwMessage("Image successfully generated!", '#32de84');
     
    } 

    else
    {
       throwMessage("Please Enter all fields!", '#E31837');
       //clear field
       div.innerHTML = ''
    }
    
    


})


//validateText

function validateText(text)
{
    if(text===null || text==='')
    {
        return false;
    }
    else{
        return true;
    }


}


function throwMessage(message, color)
{
    var messageBox = document.querySelector('div.msg');
    messageBox.id = "message"

     messageBox.textContent = message;
     messageBox.style.backgroundColor = color;

     setTimeout(()=>{
      
        messageBox.id = "";
        messageBox.textContent = ''
     }, 2000)
}