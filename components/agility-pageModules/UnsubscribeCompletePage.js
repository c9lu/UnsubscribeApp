import styles from '../agility-pageModules/UnsubscribeFrontPage.module.css';
import {useRouter} from 'next/router';
import { renderHTML } from "@agility/nextjs";
import $ from "jquery";
import { useEffect } from 'react';

const UnsubscribeCompletePage=({module})=>{
   // let router = useRouter();
    const {fields} = module;
    let router = useRouter();
    let {language, orgid} = router.query;
    
    if(language){
        language = language.toUpperCase();
    }else{
        language = 'EN'
    }
    useEffect(()=>{
    if(orgid =="402"){
        $("#homePageUrl").attr("href", "https://yorkdale.com/");
      
      }
      else if(orgid =="403"){
        $("#homePageUrl").attr("href", "https://uppercanadamall.com/");
       
      }
      else if(orgid=="404"){
       
        $("#homePageUrl").attr("href","https://shopsquareone.com/");
      }
      else if(orgid=="405"){
        $("#homePageUrl").attr("href", "https://scarboroughtowncentre.com/");
      }
      else if(orgid=="406"){
        
         $("#homePageUrl").attr("href", "https://www.southcentremall.com/");
      }
      else if(orgid=="407"){
     
         $("#homePageUrl").attr("href", "http://hillcrestmall.ca/");
      }
      else if(orgid=="408"){
     
         $("#homePageUrl").attr("href", "https://www.galeriesdelacapitale.com/");
      }
      else if(orgid=="409"){
        
         $("#homePageUrl").attr("href", "https://www.lespromenades.com/");
      }
      else if(orgid=="410"){
        
         $("#homePageUrl").attr("href", "https://www.kingswaymall.com/");
      }

      else if(orgid=="916"){
        
         $("#homePageUrl").attr("href", "https://www.quartierdix30.com/en/");
      }
      else{
        
         $("#homePageUrl").attr("href", "https://www.oxfordproperties.com/"); 
          orgid="0";
      }
    });
  


return (

<div className={styles.container}>

 <h1 className={styles.msg1}>
    {language=='EN'?fields.unsubscribeCompletedMessage1EN:fields.unsubscribeCompletedMessage1FR}
</h1>
<p>
    {language=='EN'?fields.unsubscribeCompletedMessage2EN:fields.unsubscribeCompletedMessage2FR}
</p>

<div className={styles.container} role="main"><div dangerouslySetInnerHTML={{__html:fields.unsubscribeCompletedMessage3EN}}/> </div>

</div>
    );
}
export default UnsubscribeCompletePage;