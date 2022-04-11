(() => {
  /* Fetch all bookmarks for current video */
  const fetchBookmarks = () => {};

  /* Handle request to add new bookmark */
  const addNewBookmarkEventHandler = () => {};

  /* this checks for whenever a new video is loaded or the current tab is reloaded */
  const newVideoLoaded = (refreshed) => {};

  /* respond to messages from background or popup pages */
  chrome.runtime.onMessage.addListener((obj, sender, sendResponse) => {
    sendResponse({});
  });
})();

const getTime = (t) => {};
