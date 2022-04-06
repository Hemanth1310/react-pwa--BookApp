import React from 'react';
import author from './author.jpeg'
import classes from './AboutPage.module.css'

function AboutPage(){
    return (
        <React.Fragment>
            <div style={pageStyle}>
            <h1>About the author</h1>
            <br></br>
            <img src={author} className={classes.img} alt="logo" />
            <br></br>
            <p><b>Robert Toru Kiyosaki</b> </p>
                
                <p>is an American businessman and author. Kiyosaki is the founder of Rich Global LLC and the Rich Dad Company, a private financial education company that provides personal finance and business education to people through books and videos.</p>
            </div>
        </React.Fragment>
    )
}
const pageStyle = {
    //  display:'flex',
    // background: '#333',
    // color: '#fff',
    //  textAlign: 'center',
    padding: '10px',
     justifyContent: 'left',
    // border: '5px solid #FFFF00',
    padding: '25px',
    background: '#CECBFF'
    
}
const page = {
    position: 'relative',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
border: '5px solid #FFFF00',
padding: '10px'

 
}
export default AboutPage;