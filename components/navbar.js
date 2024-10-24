import Link from 'next/link';
import { useRef } from 'react';

export default function Navbar() {
  const hamburger = useRef();
  const navbar = useRef();

  const showMobileNavbar = () => {
    hamburger.current.classList.toggle('is-active');
    navbar.current.classList.toggle('is-active');
  };

  return (
    <nav className="navbar mb-3 is-warning px-5 is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/" className="navbar-item">Home</Link>
        
        <div 
          role="button" 
          className={`navbar-burger ${hamburger.current?.classList.contains('is-active') ? 'is-active' : ''}`} 
          aria-label="menu" 
          aria-expanded="false" 
          onClick={showMobileNavbar}
          ref={hamburger}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div className={`navbar-menu ${navbar.current?.classList.contains('is-active') ? 'is-active' : ''}`} ref={navbar}>
        <div className="navbar-start">
          <Link href="/posts" className="navbar-item">Posts</Link>
        </div>
        <div className="navbar-end">
          <Link href="/login" className="navbar-item">Log in</Link>
          <Link href="/register" className="navbar-item">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

