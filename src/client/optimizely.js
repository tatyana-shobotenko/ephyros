if (process.env.OPTIMIZELY_PROJECT_ID) {
  const projectId = process.env.OPTIMIZELY_PROJECT_ID;
  const scriptTag = document.createElement('script');
  scriptTag.type = 'text/javascript';
  scriptTag.async = true;
  scriptTag.src = `https://cdn.optimizely.com/js/${projectId}.js`;
  const s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(scriptTag, s);

  setTimeout(() => {
    window.optimizely = window.optimizely || [];
    if (!window.optimizely.data) {
      window.optimizely.push('timeout');
    }
  }, process.env.OPTIMIZELY_TIMEOUT);
}
