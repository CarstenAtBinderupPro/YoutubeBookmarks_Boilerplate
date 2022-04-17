(() => {
  const fetchBookmarks = () => {};

  const addNewBookmarkEventHandler = () => {};

  const newVideoLoaded = () => {};

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    response();
  });
})();

const getTime = t => {
  var date = new Date(0);
  date.setSeconds(t);

  return date.toISOString().substr(11, 8);
};
