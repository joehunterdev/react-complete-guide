import redirect from 'react-dom'
export function action(){
    localStorage.removeItem('token');
    return redirect('/');
}