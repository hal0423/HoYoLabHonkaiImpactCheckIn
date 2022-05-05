'use strict';
chrome.runtime.onStartup.addListener(function () {
    setTimeout(onload, 5000);
});
async function onload() {
    var res = await fetch(
        "https://api-os-takumi.mihoyo.com/event/mani/sign",
        { 
            method: "POST", 
            body: JSON.stringify(
                { act_id: "e202110291205111" }) });
    console.log(await res.text());
}
