console.log('HERE');

self.addEventListener('push', e=>{
    const data = e.data.json();

    console.log('Push Recied');

    self.registration.showNotifaction(data.title, {
    body: 'Notifed'
    })
})