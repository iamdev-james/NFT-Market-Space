const circleStyle = {
  width: '15px',
  height: '15px',
  borderRadius: '50%',
  backgroundColor: '#BBC0D0',
  marginTop: '35px',
  marginLeft: '10px'
}

function ShowCase4 () {
  return (
    <main className="dark:bg-darkMode max-w-body px-24 pt-24">
      <div className="flex flex-col justify-start items-start"
      style={{
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
      }}>
        <div className="flex flex-row justify-start items-center pl-3" style={{
          borderBottom: '30px solid #F2F3F6',
          borderRight: '25px solid transparent',
          borderTopLeftRadius: '10px',
          height: '0',
          width: '240px'
        }}>
          <div style={circleStyle}></div>
          <div style={circleStyle}></div>
          <div style={circleStyle}></div>
        </div>
        <div className="pl-32 bg-secondary py-16 rounded-b-xl rounded-tr-xl flex flex-row justify-between items-center dark:bg-[#262840]">
          <div className="flex-1 h-full flex flex-col justify-between items-start">
            <p className="text-primary mb-2">OVERLINE</p>
            <p className="text-5xl leading-semi font-bold mb-8 dark:text-white">Cursus vitae sollicitudin donec nascetur. Join now</p>
            <p className="w-5/6 text-primary text-justify">Donec volutpat bibendum justo, odio aenean congue est porttitor ut. Mauris vestibulum eros libero amet tincidunt.</p>
            <div className='w-2/3 mt-12 flex flex-row justify-between items-center'>
              <button className='py-80 px-82 bg-primary rounded-header-btn text-lg text-white font-medium'>Get started</button>
              <button className='py-80 px-82 rounded-header-btn text-lg border-2 border-solid border-primary text-primary font-medium'>Learn more</button>
            </div>
          </div>
          <div className="flex-1">
            <img src="https://i.im.ge/2022/06/02/r8RoZD.png" alt="customers" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default ShowCase4;