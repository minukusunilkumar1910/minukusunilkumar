import './Contact.css';
import git from './icons/github.png';
import lin from './icons/linkedin.png';
import twitter from './icons/twitter.png';
function Contact()
{

   let images =[git,lin,twitter];
   let link=
   {  
       hub:"https://github.com/minukusunilkumar1910",
       lin:"https://www.linkedin.com/in/minukusunilkumar",
       twitter:"https://x.com/MinukuSunil"

   };
   
   console.log(link[0]);
   console.log(link[1]);
   console.log(link[2]);
    function Carding({images})
    {


      return(
         <div className="contactme carding">
             
         <a href={link}>  <img className="githubimg" src={images} alt=""/></a>
       
      </div>
      )
    }

   return(
      <section id="contactsection">

      <div className="contactmainpage">

         <div className="contactmail">
            <div className="touchdiv">
               <h1 className='pop'>Get in touch</h1>

            {/* <div className="loader"></div> */}
            </div>
            <div className="mymail">
               <a href="https://mail.google.com/mail">minukusunil425@gmail.com</a>
            </div>
         </div>


         <div className="contactpage">
   
            <Carding images={images[0]} links={link[0]}/>
            <Carding images={images[1]} links={link[1]}/>
            <Carding images={images[2]} links={link[2]}/>
 
         </div>
      </div>
   </section>
   );

}

export default Contact;