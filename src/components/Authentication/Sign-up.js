const SIGN_UP = () => {
  return (
    <section className="h-full text-white">
      <main className="h-full w-full bg-Circles dark:bg-darkCircles overflow-hidden dark:bg-darkMode" style={{
        'backgroundPosition' : 'center center'
      }}>
        <div>
          <p>Hello Champ, Choose your best login option below
          </p>
        </div>
        <div>
          {/* Login with Google here */}
            <button>Login with Google</button>
          {/* Login with Metamask here */}
            <button>Login with Metamask</button>
        </div>
      </main>
    </section>
  )
}

export default SIGN_UP;
