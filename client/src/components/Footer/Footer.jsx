import { FaInstagram, FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="h-[20vh] bg-gray-950 flex justify-between">
        <div className="w-1/2  flex justify-center items-end p- text-slate-50 p-10">
          © 2024. All rights reserved.
        </div>
        <div className="w-1/2 flex items-end justify-end p-5">
          <div className="flex flex-col gap-2">
            <div className="text-xl font-bold text-slate-50">Follow us in social media:</div>
            <div className="icons flex flex-row gap-4 text-slate-50">
             <Link to="http://www.instagram.com" target="_blank"><FaInstagram size={40}/></Link> 

              <Link to="http://www.facebook.com" target="_blank"><FaFacebook size={40}/></Link>

              <Link to="http://www.whatsapp.com" target="_blank"><FaWhatsapp size={40}/></Link>

              <Link to="http://www.youtube.com" target="_blank"><FaYoutube size={40}/></Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  ); 
}

export default Footer;
