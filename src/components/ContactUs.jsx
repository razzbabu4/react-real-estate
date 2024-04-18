import { Helmet } from "react-helmet-async";
import human from '../assets/Humaaans.png'


const ContactUs = () => {
    return (
        <div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:text-gray-800 border lg:my-10">
                <Helmet>
                    <title>Haven Harbor | Contact Us</title>
                </Helmet>
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className="text-4xl font-bold leading-tight lg:text-5xl">Lets talk!</h2>
                        <img data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" src={human} alt="" className="p-6 h-52 md:h-64" />
                    </div>
                </div>
                <form noValidate="" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-[#23BE0A] dark:text-gray-50">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;