import firebase from '../database/firebase';

class LocationService {
    constructor() {
        this.getLocations = this.getLocations.bind(this);
        this.postLocation = this.postLocation.bind(this);
        this.db = firebase.firestore();
        this.db.settings({
            timestampsInSnapshots: true
        });
    }

    async getLocations() {
        const snapshot = await firebase.firestore().collection('locations').get();
        return snapshot.docs.map(doc => {
            let value = doc.data();
            value.lat = parseFloat(value.latitude);
            value.lng = parseFloat(value.longitude);
            return value;
        });
    }

    postLocation() {

    }
}

const locationService = new LocationService();

export { locationService };