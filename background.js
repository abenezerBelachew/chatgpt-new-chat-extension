chrome.commands.onCommand.addListener((command) => {
    if (command === "open-new-chat") {
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        const tab = tabs[0];
        const url = new URL(tab.url);
        if (url.hostname === "chatgpt.com") {
          chrome.tabs.update(tab.id, {url: "https://chatgpt.com/"});
        } else {
          console.log("This shortcut only works on chatgpt.com");
        }
      });
    }
  });
  

// chrome.commands.onCommand.addListener((command) => {
//     if (command === "open-new-chat") {
//       chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
//         const tab = tabs[0];
//         const url = new URL(tab.url);
//         if (url.hostname === "chatgpt.com") {
//           chrome.tabs.create({url: "https://chatgpt.com/"});
//         } else {
//           console.log("This shortcut only works on chatgpt.com");
//         }
//       });
//     }
//   });
  