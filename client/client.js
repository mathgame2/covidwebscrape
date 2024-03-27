


const publicVapidKey = 'BMdD-XnbKsYWBzV2UP7MCOSW8p5cAPh-3Q7f2XI5GVwpme1R1XJH4K0xWFazlfKKW8OYQVmPLufejjo9M6Ga-Os';


    send().catch(err => console.error(err));



async function send(){
    const register = await navigator.serviceWorker.register('/worker.js',{
        scope: '/'
    });

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });

console.log('fetching....');
    await fetch('/subscribe'), {
        method:'POST',
        body: JSON.stringify(subscription),
        headers: {
            'content-type': 'application/json'
        }
    }
console.log('fetched');

}


function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }