import redirect from 'react-dom'
export function action(){
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    return redirect('/');
}