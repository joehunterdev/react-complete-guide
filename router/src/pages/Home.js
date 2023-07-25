// import { Link } from 'react-router-dom';
import { Link, 
//  useNavigate
 } from 'react-router-dom';
function HomePage() {
  //Heres how we would nav programatically
  // const navigate = useNavigate();

  // function navigateHandler() {
  //   navigate('/products');
  // }

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>.
      </p>
    </>
  );
}

export default HomePage;