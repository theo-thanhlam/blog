import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";




export default function Header(){
  const {setUserInfo, userInfo} = useContext(UserContext)
  const email = userInfo?.email;

  useEffect(() => {
    async function getProfile(){
      const userDoc = await fetch("http://localhost:3001/profile", {credentials:'include'}).then(response => response.json());
      setUserInfo(userDoc)
    }
    getProfile();
  }, 
  []);

  function logout(){
    fetch("http://localhost:3001/logout", {
      credentials:'include',
      method:"POST"
    });
    setUserInfo(null);
  }

  

    return (
        <header>
        <Link to='/' className='logo'>MyBlog</Link>
        <nav>
          {email && (
            <>
              <Link to='/create-post' className=''>Create new post</Link>
              <Link onClick={logout} className=''>Sign out</Link>
            </>
          )}
          {!email && (
            <>
              <Link to='/login' className=''>Login</Link>
              <Link to='/register' className=''>Register</Link>
            </>
          )
          }
        </nav>
      </header>
    );
}