import styles from '../agility-pageModules/UnsubscribeFrontPage.module.css';
import { renderHTML } from "@agility/nextjs";
import {useRouter} from 'next/router';

const Logos = ({module})=>{

    let router = useRouter();
    const{ fields}=module;
    let {orgid} = router.query;
    return(
    <div>
        
    {orgid==null||orgid==0 || orgid==undefined? <img src={fields.oxfordLogo.url} className={styles.logo}/>:null} 
    {orgid==402? <img src={fields.yorkdaleLogo.url} className={styles.logo}/>:null}
    
    </div>
    )
}

export default Logos;