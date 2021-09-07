import styles from '../agility-pageModules/UnsubscribeFrontPage.module.css';
import { renderHTML } from "@agility/nextjs";
import {useRouter} from 'next/router';
import React,{useState} from 'react';


const UnsubscribeFrontPage = ({module})=>{

    const router = useRouter();
    let {language, email, orgid} = router.query;
    const { fields } = module;
    //this.state={email:_email};
    const[_email,setEmail]=useState(email);
    //  console.log(Object.keys(fields.oxfordLogo));
    
    //let language = GetQueryStringValue('language');
    if(language){
        language = language.toUpperCase();
    }else{
        language = 'EN'
    }
    const Unsubscribe=()=>{
      //alert(_email);
       location.href='/unsubscribecomplete?orgid='+orgid+'&language='+ language;
    }
   /* onChangeHandler=(event)=>{

      let value= event.target.value;
      setEmail(value);
    }*/
    // get featured post
   // const { featuredPost } = fields;
    return(
      <div className={styles.container}>
             
            <div>
              <h1 className={styles.msg1}><b>{language=='EN'?fields.introMessage1EN:fields.introMessage1FR}</b></h1>
              <p>
                <strong>{_email}</strong>
              </p>
              <p className={styles.msg1}>{language=='EN'?fields.introMessage2EN:fields.introMessage2FR}
                <input type="email" size="38" onChange={e=>setEmail(e.target.value)}/>
              </p>

              <button className={styles.colorButton} onClick={()=>{Unsubscribe()}}>{language=='EN'?'Unsubscribe':'Se désabonner'}</button>
            </div>
      </div>
    );


}
export default UnsubscribeFrontPage;