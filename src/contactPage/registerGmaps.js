const callbackName = '_gmcb';
const callbacks = [];
const key = process.env.GMAPS_API_KEY;

let isLoading = false;
let isLoaded = false;

window[callbackName] = () => {
  callbacks.forEach((cb) => {
    cb();
  });
  isLoading = false;
  isLoaded = true;

  delete window[callbackName];
};

export default (callback) => {
  console.log(process.env);
  console.log(process.env.GMAPS_API_KEY);

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
};
