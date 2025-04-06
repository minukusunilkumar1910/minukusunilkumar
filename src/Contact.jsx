import './Contact.css';
import git from './icons/github.png';
import lin from './icons/linkedin.png';
import twitter from './icons/twitter.png';

function Contact() {
   const images = [git, lin, twitter];
   const links = {
      hub: "https://github.com/minukusunilkumar1910",
      lin: "https://www.linkedin.com/in/minukusunilkumar",
      twitter: "https://x.com/MinukuSunil"
   };

   // Card component to display icon + link
   function Carding({ image, link }) {
      return (
         <div className="contactme carding">
            <a href={link} target="_blank" rel="noopener noreferrer">
               <img className="githubimg" src={image} alt="icon" />
            </a>
         </div>
      );
   }

   return (
      <section id="contactsection">
         <div className="contactmainpage">
            <div className="contactmail">
               <div className="touchdiv">
                  <h1 className="pop">Get in touch</h1>
               </div>
               <div className="mymail">
                  <a href="mailto:minukusunil425@gmail.com">minukusunil425@gmail.com</a>
               </div>
            </div>

            <div className="contactpage">
               <Carding image={images[0]} link={links.hub} />
               <Carding image={images[1]} link={links.lin} />
               <Carding image={images[2]} link={links.twitter} />
            </div>
         </div>
      </section>
   );
}

export default Contact;
