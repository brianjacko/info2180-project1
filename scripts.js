/* Add your JavaScript to this file */
window.onload = function()
{
    btns = document.getElementsByClassName("btn")
    
    
    var message = document.getElementsByClassName("message")
    message = message[0]

    btns[1].addEventListener("click", function(){
        var email = document.getElementById("email").value
        if (email == "")
        {
            message.innerHTML = "Please enter a valid email address"

        }
        else
        {
            message.innerHTML = "Thank you! Your email address " + email + " has been added to our mailing list"

        }
    
    
    })
}