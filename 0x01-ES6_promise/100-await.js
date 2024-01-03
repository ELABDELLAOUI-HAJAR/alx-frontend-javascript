import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return { photo, user };
  } catch (err) {
    return { photo: null, user: null };
  }
}
