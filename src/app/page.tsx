import Image from 'next/image'
import Header from './Components/Header';
import Footer from './Components/Footer';
import AccountCreation from './Components/AccountCreation';

export default function Home() {
  return (
    <div className='bg-gray-100'>
      <Header />
      <AccountCreation />
      <Footer />
    </div>
  )
}
