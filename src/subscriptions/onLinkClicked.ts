import { Subscription } from "hyperapp";

const onLinkClickedFx = (dispatch, action) => {

  const handleClicks = (ev) => {
    let target = ev.target;
    while (target && !target.matches("a")) target = target.parentElement;

    if (
      !target
      || ev.ctrlKey
      || ev.metaKey
      || ev.shiftKey
    ) {
      return;
    }

    const href = target.getAttribute('href');

    if (!href.startsWith('/')) {
      return
    }

    ev.preventDefault();

    dispatch(action, href)
  };

  document.addEventListener('click', handleClicks);

  return () => {
    document.removeEventListener('click', handleClicks);
  };
};

const onLinkClicked = (action): Subscription<any> => [onLinkClickedFx, action]

export default onLinkClicked
