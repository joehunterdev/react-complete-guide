import redirect from 'react-dom'
export function getAuthToken() {
  return localStorage.getItem('token');
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  // this function will be added in the next lecture
  // make sure it looks like this in the end
  const token = getAuthToken();
  
  if (!token) {
    return redirect('/auth');
  }
 
  return null; // this is missing in the next lecture video and should be added by you
}