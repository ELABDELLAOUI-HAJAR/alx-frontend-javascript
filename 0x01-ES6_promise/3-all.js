import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const [uploadPhotoResp, createUserResp] = values;
      console.log(`${uploadPhotoResp.body} ${createUserResp.firstName} ${createUserResp.lastName}`);
    })
    .catch(() => { console.log('Signup system offline'); });
}
