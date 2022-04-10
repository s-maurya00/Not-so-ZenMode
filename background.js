chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab){
    let msg = {
        txt: "Pressed"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}