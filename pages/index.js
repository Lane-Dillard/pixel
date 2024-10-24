import Link from 'next/link';
import Layout from '../components/layout'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <Layout>
    <Navbar />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Home Page</h1>
      <div style={{ marginTop: '20px' }}>
        <Link href="/login">
          <button style={{ marginRight: '10px', padding: '10px 20px' }}>Login</button>
        </Link>
        <Link href="/register">
          <button style={{ padding: '10px 20px' }}>Register</button>
        </Link>
      </div>
    </div>
    </Layout>
  );
}

 