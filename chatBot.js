document.addEventListener("DOMContentLoaded", function() {
    const chatbotContainer = document.getElementById("chatbotcontainer");
    const closeBtn = document.getElementById("closebtn");
    const sendBtn = document.getElementById("sendbtn")
    const chatBotInput = document.getElementById("chabotinput");
    const chatBotMessages = document.getElementById("chatbotmessages");
    const chatbotIcon = document.getElementById("chatboticon");
    const closeButton = document.getElementById("closebtn");

    chatbotIcon.addEventListener("click", function(){
        chatbotContainer.classList.remove("hidden");
        chatbotIcon.style.display = "none";
    });

    closeButton.addEventListener("click", function(){
        chatbotContainer.classList.add("hidden");
        chatbotIcon.style.display ="flex";
    });

    sendBtn.addEventListener("click", sendMessage);
    chatBotInput.addEventListener("keypress", function(e){
        if (e.key ==="Enter"){
            sendMessage();
        }
    });

});
