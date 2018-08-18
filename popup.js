chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.create({index: tabs[0].index + 1}, function(tab) {});
});
