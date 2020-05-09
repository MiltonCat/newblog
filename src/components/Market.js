import React from 'react';
import '../assets/styles/components/Market.css';
import Smile from '../assets/static/smile3.png';



const Market = () =>{
  return(
 <>
   <div className="section">
   <div className="section-wrapper block">
     <div className="content-1300">
       <h2 id="about-me" className="entry-tilte section-title">Acerca de Mi</h2>
       <p className="seccion-info-pa">
       Soy Administrador de empresas y despues de algunos proyectos me daba cuenta que los puntos mas dificiles de cada uno de estos, fueron la comercializacion en la web, con negocios de exportacion y despues de visitar varios paises con mi trabajo, tome lña desicion de estudiar Desarrollo Web esto fue hace 5 años. En ese momento descubri que con la experiencia de mi trabajo anterior y el conocimiento adquidiro desarrolle un proyecto que podia cruzar la informacion y la experincia adquirida. Este proyecto lo LLame Market Patagonia.
      <img src={Smile} alt="smile" />
      <br/>
       Market Patagonia
        Es un Market Place que las personas pueden publicar sus productos y servicios de forma gratuita, solo cobramos si logras vender tu producto, este esta orientado a la Patagonia Argentina y Chilena. Si queres visitarla solo da Click abajo.
     </p>
         <div className="button-group-wrapper">
       <a href="https://www.marketpatagonia.com/" className="button">Market Patagonia</a>
     </div>
     </div>

   </div>
 </div>
 </>
  )
}

export default Market;