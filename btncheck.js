var id = "aiijkdjdgemfpglpgicfibmghdiajjkh";
chrome.management.get(id,function(info) {
    // Gotta check if we got the info:
    if(chrome.runtime.lastError) {
      // Something's not right; probably extension is not installed.
      // Warn the user somehow? (but no alert(), it can break the popup)
    }


    document.getElementById("onoffbtn").checked = info.enabled;

    sendNumbers();

  });

document.getElementById("onoffbtn").addEventListener("change", function(e) {
    // You don't need the conditional if() {} else {}, just use the binary value
    chrome.management.setEnabled(id, this.checked);
});

function sendNumbers(){
        
    let onoffbtn = document.getElementById('onoffbtn');
    if (onoffbtn) {
        if(onoffbtn.checked == true){
            let params ={
                active: true,
                currentWindow: true
            }
            chrome.tabs.query(params, gotTab);
            function gotTab(tab){
                chrome.tabs.sendMessage(tab[0].id, 1);
            }
            console.log(1);
        }
        else{
            if(onoffbtn.checked == false){
                let params ={
                    active: true,
                    currentWindow: true
                }
                chrome.tabs.query(params, gotTab);
                function gotTab(tab){
                    chrome.tabs.sendMessage(tab[0].id, 0);
                }
                console.log(0);
            }
        } 
    }
             

        
}