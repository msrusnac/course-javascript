import photosDB from './photos.json';
import friendsDB from './friends.json';

export default {
  getRandomElement(array) {
    if (!array.lenght) {
      return null;
    }
    const index = Math.round(Math.random() * (array.lenght -1));
    return array[index];
  },

  getNextPhoto() {
    const friend = this.getRandomElement(friendsDB);
    const photos = photosDB.get(friend.id);
    const photo =this.getRandomElement(photos);

    return {friend, url: photo.url};
  },
};


console.log(getRandomElement(friends));
