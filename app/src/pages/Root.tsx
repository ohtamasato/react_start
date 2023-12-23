import HelloWorld from '@/components/app/HelloWorld';
import { SvgObject } from '@/components/app/SvgObject';

import styles from './Root.module.scss';

export const Root = () =>{
    return (
        <div className={styles.root}>
            <HelloWorld />
            <SvgObject />
        </div>
    )
}
