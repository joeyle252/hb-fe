const s3PhotoUrls = Array(20)
  .fill()
  .map((val, idx) => `https://khanh-hb-photos.s3-ap-southeast-1.amazonaws.com/hotel${idx + 2}.jpg`);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const getRandomPhoto = () => {
  //random choose a num between 2-21
  const idx = getRandomInt(2, 21);
  const url = s3PhotoUrls[idx];
  return url;
};

export default getRandomPhoto;
