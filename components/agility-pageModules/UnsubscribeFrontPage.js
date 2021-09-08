import styles from '../agility-pageModules/UnsubscribeFrontPage.module.css';
import { renderHTML } from "@agility/nextjs";
import {useRouter} from 'next/router';
import React,{useState} from 'react';


const UnsubscribeFrontPage = ({module})=>{

    const router = useRouter();
    let {language, email, orgid} = router.query;
    const { fields } = module;
    const[_email,setEmail]=useState(email);
    
    if(language){
        language = language.toUpperCase();
    }else{
        language = 'EN'
    }
    const Unsubscribe=()=>{      
       location.href='/unsubscribecomplete?orgid='+orgid+'&language='+ language;
    }
  
    return(
      <div className={styles.container}>
             
            <div>
              <h1 className={styles.msg1}><b>{language=='EN'?fields.introMessage1EN:fields.introMessage1FR}</b></h1>
             <br/>
              <p>
               {email?  <strong>{_email}</strong>:null}
              </p>
              {email==null || email===undefined?
                <p>{language=='EN'?fields.introMessage2EN:fields.introMessage2FR} 
               
                <span>&nbsp;&nbsp;</span>            
                  <input type="email" size="38"  className={styles.emailTextbox} onChange={e=>setEmail(e.target.value)}/>
                </p>:null}
            </div>
              <button className={styles.colorButton} onClick={()=>{Unsubscribe()}}>{language=='EN'?'Unsubscribe':'Se désabonner'}</button>
            </div>
  
    );


}
export default UnsubscribeFrontPage;