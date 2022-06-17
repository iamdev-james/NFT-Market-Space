// Importing Google AUth
import GoogleLoginHooks from "../../hooks/AuthHooks/googlelogin";

const SIGN_UP = () => {
  return (
    <section className="h-full text-white text-center leading-loose">
      <main className="h-full w-full px-32 py-24 bg-Circles dark:bg-darkCircles overflow-hidden dark:bg-darkMode" style={{
        'backgroundPosition' : 'center center'
      }}>
        <div>
          <p>Hello Champ, Choose your best login option below
          </p>
        </div>
        <div>
          {/* Login with Google here */}
            <GoogleLoginHooks />
          {/* Login with Metamask here */}
            <button className='my-6 py-80 px-81 bg-primary rounded-header-btn text-lg text-white font-medium'>Login with Metamask</button>
        </div>
      </main>
    </section>
  )
}

export default SIGN_UP;
