import React from 'react'
import Shoes from './Shoes';
import shoes1 from '../assets/s1.png'
import shoes2 from '../assets/s2.png'
import shoes3 from '../assets/s3.png'
import shoes4 from '../assets/s4.png'
import shoes5 from '../assets/s5.jpeg'
import shoes6 from '../assets/s6.png'
import './Home.css'

function Home() {
  return (
    <div className="container">
     <Shoes id='1' image={shoes1} description='Sustainable Material' sname='Nike Pegasus 41' 
     scategory="Men's Road Runnig Shoes" scolor='1 Colour' price='MRP : ₹ 11 895.00' />
     <Shoes id='2' image={shoes2} description='Sustainable Material' sname='Nike Pegasus 41' 
     scategory="Women's Road Runnig Shoes" scolor='1 Colour' price='MRP : ₹ 11 895.00' />
     <Shoes id='3' image={shoes3} description='Sustainable Material' sname='Nike Pegasus 41' 
     scategory="Women's Road Runnig Shoes" scolor='1 Colour' price='MRP : ₹ 11 895.00' />
     <Shoes id='4' image={shoes4} description='Sustainable Material' sname='Nike Pegasus 41' 
     scategory="Women's Road Runnig Shoes" scolor='1 Colour' price='MRP : ₹ 11 895.00' />
     <Shoes id='5' image={shoes5} description='Sustainable Material' sname='Nike Pegasus 41' 
     scategory="Women's Road Runnig Shoes" scolor='1 Colour' price='MRP : ₹ 11 895.00' />
     <Shoes id='6' image={shoes6} description='Sustainable Material' sname='Nike Pegasus 41' 
     scategory="Women's Road Runnig Shoes" scolor='1 Colour' price='MRP : ₹ 11 895.00' />
    </div>
  )
}

export default Home
