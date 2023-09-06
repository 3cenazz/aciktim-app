import React from "react";
import { useSelector } from "react-redux";
import { useCartActions } from "../components/addActions";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import menuItems from "../components/Products";
//import cartSlice from "../redux/cartSlice";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Menu() {

  const cart = useSelector((state) => state.cart.products);
  const { handleAddToCart, handleRemoveFromCart } = useCartActions();

  return (
    <div>
      <Navbar />

    <Container className="my-5 ">
      <Row className="justify-content-center">
        <Col className="text-center mb-4">
          <h2 className="mb-3">MENÜLER</h2>
          <hr className="w-25 mx-auto " />
        </Col>
      </Row>
      <Row className="justify-content-center text-center  ">
        {menuItems.map((item, index) => (
          <Col
            key={index}
            className="mb-5 col-lg-4 col-md-4 col-sm-6 col-8"
          >
            <Card
              key={index}
              sx={{ maxWidth: 300, backgroundColor: "#FCCB4C",margin: "0 auto" }}
            >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="text-center"
              >
                {item.name}
              </Typography>
              <Container className="my-4">
                <CardMedia
                  sx={{ height: 160, borderRadius: "3%" }}
                  image={item.image}
                  title="Menu Item"
                />
              </Container>
              <CardContent>
                <Typography variant="body1" color="textSecondary">
                  Fiyat:
                </Typography>
                <Typography variant="h6" color="primary">
                  ₺ {item.price.toFixed(2)}
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: "flex-end" }}>
                {cart.some((cartItem) => cartItem.id === item.id) ? (
                  <Button
                    size="small"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    Sepetten Çıkar
                  </Button>
                ) : (
                  <Button size="small" onClick={() => handleAddToCart(item)}>
                    Sepete Ekle
                  </Button>
                )}
                <ToastContainer autoClose={1000} />
              </CardActions>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    <Footer />
    </div>
  );
}

export default Menu;


// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, removeFromCart } from "../redux/cartSlice";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

// import img1 from "../images/indir (1).jpg"
// import img from "../images/indir.jpg"

// // import cartSlice from "../redux/cartSlice";
// function Menu() {
//   const menuItems = [
//     {
//       id: 1,
//       name: "Havyar",
//       image: img1,
//       number: 1,
//       price: 80.5,
//       description: "öçasmdçöas.dçasömd",
//     },
//     {
//       id: 2,
//       name: "Menu2",
//       number: 1,
//       price: 80.5,
//       image: img1,
//     },
//     {
//       id: 3,
//       name: "Menu3",
//       number: 1,
//       price: 90,
//       image: img1,
//     },
//     {
//       id: 4,
//       name: "Menu4",
//       number: 1,
//       price: 76,
//       image: img1,
//     },
//     {
//       id: 5,
//       name: "Menu5",
//       number: 1,
//       price: 46.99,
//       image: img1,
//     },
//     {
//       id: 6,
//       name: "Menu6",
//       number: 1,
//       price: 75,
//       image: img1,
//     },
//     {
//       id: 7,
//       name: "Menu7",
//       number: 1,
//       price: 44,
//       image: img,
//     },
//     {
//       id: 8,
//       name: "Menu8",
//       number: 1,
//       price: 95,
//       image: img1,
//     },
//     {
//       id: 9,
//       name: "Menu9",
//       number: 1,
//       price: 80.5,
//       image: img1,
//     },
//     {
//       id: 10,
//       name: "Menu10",
//       number: 1,
//       price: 800,
//       image: img1,
//     },
//     {
//       id: 11,
//       name: "Menu11",
//       number: 1,
//       price: 70,
//       image: img1,
//     },
//     {
//       id: 12,
//       name: "Menu12",
//       number: 1,
//       price: 48,
//       image: img,
//     },
//   ];

//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart.products);

//   const handleAddToCart = (item) => {
//     const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);

//     if (!isItemInCart) {
//       dispatch(addToCart(item));
//       toast.success(item.name + " adlı ürün sepete eklendi", {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     } else {
//       dispatch(removeFromCart(item.id));
//       toast.info(item.name + " adlı ürün sepetten çıkarıldı", {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     }
//   };
//   const handleRemoveFromCart = (item) => {
//     dispatch(removeFromCart(item.id));
//     toast.info(item.name + " adlı ürün sepetten çıkarıldı", {
//       position: toast.POSITION.TOP_CENTER,
//     });
//   };

//   return (
//     <div>
//       <Navbar />
//     <Container className="my-5 ">
//       <Row className="justify-content-center">
//         <Col className="text-center mb-4">
//           <h2 className="mb-3">MENÜLER</h2>
//           <hr className="w-25 mx-auto " />
//         </Col>
//       </Row>
//       <Row className="justify-content-center text-center  ">
//         {menuItems.map((item, index) => (
//           <Col
//             key={index}
//             className="mb-5 col-lg-4 col-md-4 col-sm-6  col-12  "
//           >
//             <Card
//               key={index}
//               sx={{ maxWidth: 300, backgroundColor: "#FCCB4C" }}
//             >
//               <Typography
//                 gutterBottom
//                 variant="h6"
//                 component="div"
//                 className="text-center"
//               >
//                 {item.name}
//               </Typography>
//               <Container className="my-4">
//                 <CardMedia
//                   sx={{ height: 160, borderRadius: "3%" }}
//                   image={item.image}
//                   name="Menu Item"
//                 />
//               </Container>
//               <CardContent>
//                 <Typography variant="body1" color="textSecondary">
//                   Fiyat:
//                 </Typography>
//                 <Typography variant="h6" color="primary">
//                   ₺ {item.price.toFixed(2)}
//                 </Typography>
//               </CardContent>

//               <CardActions sx={{ justifyContent: "flex-end" }}>
//                 {cart.some((cartItem) => cartItem.id === item.id) ? (
//                   <Button
//                     size="small"
//                     onClick={() => handleRemoveFromCart(item)}
//                   >
//                     Sepetten Çıkar
//                   </Button>
//                 ) : (
//                   <Button size="small" onClick={() => handleAddToCart(item)}>
//                     Sepete Ekle
//                   </Button>
//                 )}
//                 <ToastContainer autoClose={1000} />
//               </CardActions>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//     <Footer/>
//     </div>
//   );
// }

// export default Menu;
