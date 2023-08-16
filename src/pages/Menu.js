import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { dividerClasses } from '@mui/material';


function Menu() {
  const menuItems = [
    {
      title:'Menu1',
      image:'./images/indir.jpg',
      fiyat: 30
    },
    {
      title:'Menu2',
      image:'./images/indir (1).jpg'
    }, 
    {
      title:'Menu3',
      image:'./images/indir (1).jpg'
    },
    {
      title:'Menu4',
      image:'./images/indir (1).jpg'
    },
    {
      title:'Menu5',
      image:'./images/indir (1).jpg'
    },
    {
      title:'Menu6',
      image:'./images/indir (1).jpg'
    },
    {
      title:'Menu7',
      image:'./images/indir.jpg'
    },
    {
      title:'Menu8',
      image:'./images/indir (1).jpg'
    }, 
   
   
  ]
  return (
   <div>
    <div className='menuNavbar'>
        <Header/>
    </div>
    <Container className="my-3 ">
    <Row className="justify-content-center d-flex ">
        {menuItems.map((item, index) => (
           <Col key={index}  className="mb-4 col-lg-3 col-md-6 col-sm-6  col-12 ">
          <Card  key={index} sx={{ maxWidth: 300, backgroundColor:'#FCCB4C' }}>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Container className='my-4'>
            <CardMedia
              sx={{ height: 160,borderRadius: '3%'  }}
              image={item.image}
              title="Menu Item"
            />
            </Container>
            <CardContent>
                Fiyat:{item.fiyat}
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
             
                <Button  size="small">Sepete Ekle</Button>
              
            </CardActions>
          </Card>
          </Col>
         
        ))}
         </Row>
          </Container>
          <div className='menuFooter'>
            <Footer/>
          </div>
          </div>
          
      
  )
}

export default Menu
