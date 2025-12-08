/*Group 8: Kyra O'Connor, Calum Cleary, Caoimhe O'Sullivan, Matthew Brink*/
document.addEventListener("DOMContentLoaded", function() {
    const weatherwiseContainer = document.getElementById("weatherwisecontainer");
    const closeBtn = document.getElementById("closebtn");
    const sendBtn = document.getElementById("sendbtn")
    const weatherwiseInput = document.getElementById("weatherwiseinput");
    const weatherwiseMessages = document.getElementById("weatherwisemessages");
    const weatherwiseIcon = document.getElementById("weatherwiseicon");
    const closeButton = document.getElementById("closebtn");

    weatherwiseIcon.addEventListener("click", function(){
        weatherwiseContainer.classList.remove("hidden");
        weatherwiseIcon.style.display = "none";
    });

    closeButton.addEventListener("click", function(){
        weatherwiseContainer.classList.add("hidden");
        weatherwiseIcon.style.display ="flex";
    });

    sendBtn.addEventListener("click", sendMessage);
    weatherwiseInput.addEventListener("keypress", function(e){
        if (e.key ==="Enter"){
            sendMessage();
        }
    });

    const promptBtns = document.querySelectorAll(".promptbtn");

    promptBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const text = btn.textContent;
            appendMessage("user", text);
            getBotResponse(text);
        });
    });

    window.weatherwiseInput = weatherwiseInput;
    window.weatherwiseMessages = weatherwiseMessages;



function sendMessage() {
    const userMessage = weatherwiseInput.value.trim();
    if(!userMessage) return 
        appendMessage("user", userMessage);
        weatherwiseInput.value = "";
        getBotResponse(userMessage);
    
}

    function appendMessage(sender, message, isHTML=false) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", sender);
        const avatar = document.createElement("img");
        avatar.classList.add("avatar");

        if (sender === "bot") {
            avatar.src = "Images/Alt lOGO.png";
        }
        else {
            avatar.src = "Images/profile_icon3.png";
            avatar.alt = "User";
        }

        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        const textElement = document.createElement("span");
        
        if (isHTML){
            textElement.innerHTML = message;
        }
        else{
            textElement.textContent = message;
        }

        const timeElement = document.createElement("div");
        timeElement.classList.add("timestamp");
        const now = new Date();
        const time = now.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
        const date = now.toLocaleDateString();  
        timeElement.textContent = time + " | " + date;
        bubble.appendChild(textElement);
        bubble.appendChild(timeElement);
        messageElement.appendChild(avatar);
        messageElement.appendChild(bubble);
        weatherwiseMessages.appendChild(messageElement);
        weatherwiseMessages.scrollTop = weatherwiseMessages.scrollHeight;

    }

    function getBotResponse(message) {
        const msg = message.toLowerCase().trim();

        if (msg === ("hi") || msg ===("hello") || msg ===("hey") || msg ===("well")) {
            appendMessage("bot", "Hey, I'm the WeatherWise bot! I'm here to answer any questions you might have <br><img src='/Images/Alt lOGO.png' style='width:160px; height:100px;'>", true);
        }

        else if(msg ===("is it going to rain today")) {
            appendMessage("bot", "There is meant to be rain between 2pm and 6pm, however it is best to keep an eye out closer and during that time.");
        }

        else if(msg ===("would you recommend i go fishing today")) {
            appendMessage("bot", "The weather is estimated to be highly suited for fishing. Although there is a possibility weather can change suddenly so keep that in mind!");
        }

        else if(msg ===("could you adjust my page to be marine suited")) {
            appendMessage("bot", "Yes of course! I'll attach a picture of how that might look and you can tell me what you think. <br><img src='Images/Alt lOGO.png' style='width:300px; height:200px;'>", true);
        }

        else if(msg ===("can you then change my location to be ovens")) {
            appendMessage("bot", "Yes of course! It should be now changed to Ovens. Is there any more changes you'd like me to make?");
        }

        else if(msg ===("is it safe to keep my cows outside in todays weather")) {
            appendMessage("bot", "There is estimated to be high winds and torrential rain today. To prevent harm, keeping them inside is a good choice for them!");
        }

        else if(msg ===("what kind of guardrails do you use")) {
            appendMessage("bot", "Great Question! Firstly I refrain from use of any toxic, harmful, biased or inappropriate content. Secondly I cannot use information that is blatently false or misleading. I am built to align with your expectations and will never drift away from my main purpose.");
        }

        else if(msg ===("how's the weather today?")) {
            appendMessage("bot", "The weather looks cloudy with a small chance of rain throughout the day. Make sure to wear a jacket! <br><img src='Images/weatherwidget.png' style='width:300px; height:200px;'>", true);
        }

        else if(msg ===("what is the average temperature today?")) {
            appendMessage("bot", "Today the average temperature looks to be 12 degrees. However weather and temperature can always change so keep that in mind when planning your day!");
        }

        else if(msg ===("is it going to rain between 3 & 6 today?")) {
            appendMessage("bot", "Light rain is to be expected during those hours, however it is meant to dissapate nearer to 6pm.");
        }

        else if(msg ===("are flights on schedule today?")) {
            appendMessage("bot", "Delays are expected between 7am and 11am due to dense fog. It's important you still get to the airport early as flight times can change.");
        }

        else if(msg ===("is it safe to go do my shopping today?")) {
            appendMessage("bot", "Based on current weather predicitions it should be safe to do your shopping today. But always be vigilant and safe when traveling, especially when driving! Would you like me to list nearby shops in the area?");
        }

        else {
            appendMessage("bot", "I'm not sure how to answer this yet!");
        }
    }
});
