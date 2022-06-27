import Popup from "reactjs-popup";

// React toastify for messages
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const closeBtn = {
  cursor: 'pointer',
  position: 'absolute',
  display: 'block',
  padding: '2px 8px',
  right: '-10px',
  top: '-10px',
  fontSize: '20px',
  background: '#1B1C1E',
  borderRadius: '50%'
}

export const Contact = () => {
  return (
    <main>
      <ToastContainer />
       <Popup
          trigger={<button className='my-6 lg:my-0 py-78 px-82 rounded-header-btn text-lg border-2 border-solid border-primary text-primary font-medium'>Contact</button>}
          modal
          nested
        >
          {close => (
            <div className='scale-95 md:scale-100 mx-2 sm:mx-0 px-3 md:px-16 pt-20 pb-12 rounded-xl bg-primary text-center text-white'>
              <button style={closeBtn} onClick={close}>
                &times;
              </button>
              <main>
                <div>
                  <p className="pb-3 font-bold text-2xl">CONTACT US</p>
                  <p className="text-sm font-medium py-3">Fill the form below to contact our customer support team</p>
                </div>
                <div>
                <form className="flex flex-col justify-start items-center text-justify leading-loose">
                  <label className="my-2 font-medium sm:text-core text-sm">
                    Name:
                    <input type="text" className="text-sm md:text-core w-[250px] md:w-[300px] ml-5 px-4 text-black outline-none rounded-lg h-12" placeholder="Enter your name" required />
                  </label>
                  <label className="my-2 font-medium sm:text-core text-sm">
                    Email:
                    <input type="text" className="text-sm md:text-core w-[250px] md:w-[300px] ml-5 px-4 text-black outline-none rounded-lg h-12" placeholder="Enter your Email" required />
                  </label>
                  <label className="my-2 font-medium sm:text-core text-sm">
                    Title:
                    <input type="text" className="text-sm md:text-core w-[250px] md:w-[300px] ml-8 px-4 text-black outline-none rounded-lg h-12" placeholder="What's your message about..." required />
                  </label>
                  <label className="my-2 font-medium sm:text-core text-sm">
                    Message:
                    <textarea className="text-sm md:text-core w-[250px] md:w-[300px] ml-2 px-4 text-black outline-none rounded-lg h-24" placeholder="Type in your message" required />
                  </label>
                  <input
                   className="w-[280px] mt-6 px-10 py-3 rounded-xl bg-secondary text-black flex flex-row justify-center items-center text-black text-sm md:text-lg font-bold md:font-medium hover:bg-gray-300 cursor-pointer"
                   type="submit" 
                   value="Submit"
                   onClick={(event) => {
                    toast.success('Form response has beeen submitted', {
                      position: "top-right",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      });
                    event.preventDefault();
                    close();
                  }} />
                </form>
                </div>
              </main>
            </div>
          )}
        </Popup>
    </main>
  )
}