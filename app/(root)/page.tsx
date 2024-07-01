import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox'


const Home = () => {

  const loggedIn = {firstName: "Adrian"};
  return (
    <section className='home'>
      <div className='home-content'>
        <div className='header'>
          <HeaderBox 
          type = "greeting"
          title = "welcome"
          user = {loggedIn?.firstName || 'Guest'}
          subtext = "Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox 
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {1250.35}
          />
        </div>
      </div>
    </section>
  )
}

export default Home