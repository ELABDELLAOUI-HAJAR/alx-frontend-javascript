import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  const [signUpResp, uploadResp] = await Promise.allSettled(promises);

  return Promise.resolve([
    {
      status: signUpResp.status,
      value: signUpResp.status === 'fulfilled' ? signUpResp.value : signUpResp.reason,
    },
    {
      status: uploadResp.status,
      value: uploadResp.status === 'fulfilled' ? uploadResp.value : `Error: ${uploadResp.reason.message}`,
    },
  ]);
}
