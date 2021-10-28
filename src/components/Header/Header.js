import styles from './Header.module.scss'
import Link from 'next/link';
import Container from '@components/Container'
import {FaShoppingCart} from 'react-icons/fa';
import {useSnipcart} from '@hooks/use-snipcart'

const Header =()=>{
    // const snipcart = useSnipcart()
    const {cart = {}} = useSnipcart()
    const {subtotal= '$0.00'} = cart;// snipcart value cart.subtotal 
    // if not subtotal value exists, default $0.00
    // console.log('snipcart',snipcart)

    return (
        <header className={styles.header}>
       <Container className={styles.headerContainer}>
            <p className={styles.headerTitle}>
            <Link href="/">
            <a>Hyper Bros. Trading Cards</a>
          </Link>
            </p>
            <p className={styles.headerCart}>
               <button className="snipcart-checkout">

  
                <FaShoppingCart/>
                <span className="snipcart-total-price">${subtotal}</span>
                </button>
           </p>
        </Container>
        </header>
    )
}
export default Header 