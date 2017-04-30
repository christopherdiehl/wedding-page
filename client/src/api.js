const contentType = 'application/json';
const url = 'http://localhost:8080';

const api = {
  rsvp: (data) => {
    return fetch(url+'/api/rsvp', {
      method: 'POST',
      headers: {
        'Content-Type': contentType
      },
      body: JSON.stringify({
        guest: data.guest || '',
        plusone: data.plusone || '',
        attending: data.attending || '',
      })
    });
  }
}

export default api;
