chrome.webNavigation.onCompleted.addListener((details) => {
    console.log("Visited:", details.url);
}, { url: [{ urlMatches: 'https://*/*' }] });
