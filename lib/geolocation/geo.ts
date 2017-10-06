const fetch = require('node-fetch');

import * as google from '../config/google';

export function getCoordinates(addr: string): Promise<GeoCoordinates> {
    const encKey = encodeURIComponent(google.key);
    const encAddr = encodeURIComponent(addr);
    const uri = `https://maps.googleapis.com/maps/api/geocode/json?key=${encKey}&address=${encAddr}`;
    const req = new Request(uri, { method: 'GET' });
    return fetch(uri, { method: 'GET' })
        .then((res: any) => {
            return res.json();
        })
        .then((obj: any) => {
            if (!obj || !obj.results || obj.results.length < 1) {
                return Promise.reject('no results returned');
            }
            const geometry = obj.results[0].geometry;
            if (!geometry) {
                return Promise.reject('no geometry returned');
            }
            const location = geometry.location;
            if (!location || !location.lat || !location.lng) {
                return Promise.reject('no coordinates provided');
            }
            return Promise.resolve({lat: location.lat, lon: location.lng});
        });
}
