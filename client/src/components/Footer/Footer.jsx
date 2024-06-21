import { FaInstagram, FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="h-[20vh] bg-gray-700 flex justify-between">
        <div className="w-1/2  flex justify-center items-end text-sm lg:text-xl text-slate-50 p-6">
          © 2024. Site crafted with ❤️ by Sergio-916. All rights reserved.
        </div>
        <div className="w-1/2 flex items-end justify-end p-5">
          <div className="flex flex-col lg:flex-row lg:items-center gap-2">
            <div className="lg:text-xl text-lg font-bold text-slate-50">Follow us in social media:</div>
            <div className="icons flex flex-row gap-4 text-slate-50">
             <Link to="http://www.instagram.com" target="_blank"><FaInstagram size={35}/></Link> 

              <Link to="http://www.facebook.com" target="_blank"><FaFacebook size={35}/></Link>

              <Link to="http://www.whatsapp.com" target="_blank"><FaWhatsapp size={35}/></Link>

              <Link to="http://www.youtube.com" target="_blank"><FaYoutube size={35}/></Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  ); 
}

export default Footer;
