console.log("Background script running")

chrome.tabs.onActivated.addListener(function(info){
    chrome.tabs.get(info.tabId, isIMSLP)
})

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    isIMSLP(tab)
})

function isIMSLP(tab){
    console.log(tab.url)
    if(tab.url !== undefined && tab.url.match(/https?:\/\/imslp\.org\/?/)){
        chrome.browserAction.setIcon({path: './icon.png', tabId: tab.id});
        console.log('IMSLP enabled')
    } else {
        chrome.browserAction.setIcon({path: './icon-disabled.png', tabId: tab.id});
        console.log('IMSLP disabled')
    }
}
