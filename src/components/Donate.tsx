import { Link } from "react-router-dom"

const Donate = () => {
  return (
    <div className='fixed z-10 bottom-10 right-10 h-30 w-30 bg-warm-yellow text-deep-purple px-6 py-2 rounded-full font-montserrat font-semibold hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105'>
        <Link to="/donate-options">
          <p className='text-[1rem]'>Donate</p>
          <img src="/3.png" className="object-contain h-[2rem] mx-auto" />
        </Link>
    </div>
  )
}

export default Donate