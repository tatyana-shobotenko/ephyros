const callbackName = '_gmcb';
const callbacks = [];
const key = process.env.GMAPS_API_KEY;

let isLoading = false;
let isLoaded = false;
let isGlobalCallbackSet = false;

function attach(callback) {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    // console.warn('Google maps can be used only on the client side')
    return;
  }

  if (!isGlobalCallbackSet) {
    window[callbackName] = () => {
      callbacks.forEach((cb) => {
        cb();
      });
      isLoading = false;
      isLoaded = true;

      delete window[callbackName];
    };
    isGlobalCallbackSet = true;
  }

  if (!isLoaded && !isLoading) {
    isLoading = true;
    callbacks.push(callback);

    // load script
    const e = document.getElementsByTagName('script')[0];
    const n = document.createElement('script');
    n.type = 'text/javascript';
    n.async = true;
    n.defer = true;
    n.src = `http://maps.googleapis.com/maps/api/js?key=${key}&callback=${callbackName}`;
    e.parentNode.insertBefore(n, e);
  } else if (isLoading) {
    callbacks.push(callback);
  } else {
    callback();
  }
}

export default attach;
