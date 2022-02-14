import { v4 as uuidv4 } from 'uuid';

export const uuidToken = () => {
  let uuidToken = localStorage.getItem('uuidToken');
  if (!uuidToken) {
    uuidToken = uuidv4();
    localStorage.setItem('uuidToken', uuidToken);
  }
  return uuidToken;
}