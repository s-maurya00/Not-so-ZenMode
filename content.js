chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    console.log(message.txt);
    if(message.txt === "Pressed"){
        let bdy = document.getElementsByTagName('p');

        var head = document.getElementsByTagName('HEAD')[0]; 
  
        // Create new link Element
        var link = document.createElement('style');
  
        // set the attributes for link element 
        link.innerHTML = 'div { border-radius: 15px;background-color: black; animation-name: example; animation-duration: 1s; animation-iteration-count: infinite} @keyframes example { from {background-color: black;} to {background-color: gray;} }'; 
        
        // Append link element to HTML head
        head.appendChild(link); 

    }
}