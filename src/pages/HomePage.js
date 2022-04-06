import React from 'react';
import rdpd from './rdpd.jpeg'
import classes from './HomePage.module.css'
function Home(){
    return (
        <React.Fragment>
            <div style={pageStyle}>
            <img src={rdpd} className={classes.img} alt="logo" />
            <h1>Rich Dad Poor Dad</h1>
            <p><b>Description about the book</b></p>
            <p>Rich Dad Poor Dad is a 1997 book written by Robert T. Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy (financial education), financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence (financial IQ).
            </p>
            <p>Rich Dad Poor Dad is written in the style of a set of parables, ostensibly based on Kiyosaki's life.[1] The titular "rich dad" is his friend's father who accumulated wealth due to entrepreneurship and savvy investing, while the "poor dad" is claimed to be Kiyosaki's own father who he says worked hard all his life but never obtained financial security.
            {/* </li> */}
            {/* <li> Check the box for Making the task as completed</li>
            <li>Use the X button to delete the task from the list</li> */}
            </p>
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
    border: '5px solid #FFFF00',
    padding: '25px'
    
}
const page = {
    position: 'relative',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
border: '5px solid #FFFF00',
padding: '10px'

 
}
export default Home;