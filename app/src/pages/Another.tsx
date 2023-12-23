import HelloWorld from '@/components/app/HelloWorld';
import { SvgObject } from '@/components/app/SvgObject';

import styles from './Another.module.scss';

export const Another = () =>{
    return (
        <div className={styles.another}>
            <HelloWorld message="Hello world from Another page" />
            <SvgObject />
        </div>
    )
}
