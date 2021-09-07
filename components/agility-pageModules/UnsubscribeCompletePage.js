import styles from '../agility-pageModules/UnsubscribeFrontPage.module.css';
import {useRouter} from 'next/router';
import { renderHTML } from "@agility/nextjs";
const UnsubscribeCompletePage=({module})=>{
   // let router = useRouter();
    const {fields} = module;
    let router = useRouter();
    let {language} = router.query;
    
    if(language){
        language = language.toUpperCase();
    }else{
        language = 'EN'
    }
    
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