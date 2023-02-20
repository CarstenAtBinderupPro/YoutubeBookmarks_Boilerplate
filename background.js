console.log("D")
//Hmm - det lort virker ikke - ved ikke hvorfor - har fulgt videoen 
chrome.tabs.onUpdated.addListener((tabId, tab) => {
    console.log("A")
    if (tab.url && tab.url.includes("youtube.com/watch")) {
        const queryParameters = tab.url.split("?")[1];
        const urlParameters = new URLSearchParams(queryParameters);
        console.log(urlParameters);

        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            videoId: urlParameters.get("v")
        });
    }
    console.log("B")
})
console.log("E")

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log("A")
})
