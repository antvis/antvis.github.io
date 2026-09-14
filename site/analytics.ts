const measurementId = 'G-96Q5R280YF';
const analyticsWindow = window as Window & { dataLayer?: unknown[] };
const dataLayer = (analyticsWindow.dataLayer ??= []);
function track(..._args: unknown[]) {
  dataLayer.push(arguments);
}

track('js', new Date());
track('config', measurementId);
const script = document.createElement('script');
script.async = true;
script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
document.head.append(script);
