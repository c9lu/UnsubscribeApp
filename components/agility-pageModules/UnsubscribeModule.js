import Unsubscribe from '../agility-pageModules/Unsubscribe';
import styles from '../agility-pageModules/Unsubscribe.module.css';
import { renderHTML } from "@agility/nextjs";

const UnsubscribeModule = ({module})=>{

    const { fields } = module;
    console.log(Object.keys(fields.oxfordLogo));
    // get featured post
   // const { featuredPost } = fields;
    return(
      <div>
             <img src={fields.oxfordLogo.url} className={styles.logo}/>
            <div className={styles.introMessage} dangerouslySetInnerHTML={renderHTML(fields.introMessage)}/>  
      </div>
    );


}
export default UnsubscribeModule;