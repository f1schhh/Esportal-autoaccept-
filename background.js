// Get the behavior of the plugin; the default is set to "onClick", the other option is "alwaysOn"
chrome.storage.sync.get({
    extensionBehavior: 'onClick'
}, function(items) {
    if(items.extensionBehavior == 'onClick'){
      chrome.browserAction.setIcon({path: "on.png"});
    }
    else {
      chrome.browserAction.setIcon({path: "off.png"});
    }
});