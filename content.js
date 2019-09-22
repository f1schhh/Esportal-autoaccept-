function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
function update(){
    var acceptbtn = '//*[@id="matchmaking-ready-popover"]/div[4]/div[1]';
    if(getElementByXpath(acceptbtn) == null){
        
    }else{

        getElementByXpath(acceptbtn).click();
    }
}
setInterval(function(){
    update();
}, 3000);

