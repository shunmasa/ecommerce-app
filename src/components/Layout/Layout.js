import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from './layout.module.scss'
import Head from 'next/head'

const Layout = ({children,className,...rest}) =>{
    let layoutClassName = styles.layout
    if(className){
        layoutClassName = `${layoutClassName} ${className}`
    }
    return (
        <div className={layoutClassName} {...rest}>
                <Head>

       <link rel="icon" href="/favicon.ico" />
               </Head>

                 <Header/>
           <main> {children}</main>
         <Footer/>
  
            </div>
            
    )
}

export default Layout  