import logo from './logo.svg';
import './App.css';
import Record from './Record';
import{useEffect, useState} from 'react';
 
const App = () => {
  const [record,setAllrecord] = useState([
    {
      id: 1,
      name: "Samsung",
      price: "20000",
      qty: 1,
      categeroy: "Mobile",
      img : "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41kyuER2HjL._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
      id: 2,
      name: "Iphone",
      price: "40000",
      qty: 1,
      categeroy: "Mobile",
      img : "https://lh3.googleusercontent.com/spp/AE_ITi2yo-zSic-tRKGHgyVQJ7qINpsYNhLgfamfYwOyx2TP7BLSPPc3InbSenhBCyQ7E-hxozdIxwvK59ELh-6aPn1-I3qBlvm_fvXUwQ-P3dnIq6HXkXA8JEK_qq1dfck8DmsO0b_wK12JaYuTaIH7n3NbssqaeqXcRebpwo2YtjO_D9AeVV2rgnBMNO3jMPqwOX9GTE5nAg=s512-rw-pd-pc0x00ffffff"
    },
    {
      id: 3,
      name: "Vivo",
      price: "25000",
      qty: 1,
      categeroy: "Mobile",
      img : "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41P7OQTdd6L._SY300_SX300_.jpg"
    },
    {
      id: 4,
      name: "Samsung-TV",
      price: "50000",
      qty: 1,
      categeroy: "Electronics",
      img : "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Hpcql9FeL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
      id: 5,
      name: "Washing Machine",
      price: "30000",
      qty: 1,
      categeroy: "Electronics",
      img : "https://www.lg.com/in/images/washing-machines/md07554070/gallery/FHP1411Z9B-Washer-Dryer-D-01v.jpg"
    },
    {
      id: 6,
      name: "Mac-Laptop",
      price: "15000",
      qty: 1,
      categeroy: "Electronics",
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI5H7inY9J3CV5Ft9zud3jHH7Ed5PDpJm3PxNHrN1XaaexfBCtl38br-k8ex-yjeYjyZo&usqp=CAU",
    },
    {
      id: 7,
      name: "Puma",
      price: "2000",
      qty: 1,
      categeroy: "Cloths",
      img : "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1050,h_1050/global/621147/07/mod01/fnd/IND/fmt/png/Mercedes-AMG-PETRONAS-Men's-Motorsport-Hooded-Sweatshirt",
    },
    {
      id: 8,
      name: "Nike",
      price: "1500",
      qty: 1,
      categeroy: "Cloths",
      img : "https://images.pexels.com/photos/11757389/pexels-photo-11757389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 9,
      name: "CK",
      price: "1000",
      qty: 1,
      categeroy: "Cloths",
      img : "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F04%2Fcalvin-klein-bts-jungkook-new-campaign-imagery-000.jpg?w=960&cbr=1&q=90&fit=max",
    },
    {
      id: 10,
      name: "Addidas",
      price: "3000",
      qty: 1,
      categeroy: "Shooes",
     img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWswxecxn5dKm1NHR7dgIUEOV15hKfLpEdMQ&usqp=CAU",
    },
    {
      id: 11,
      name: "Skechers",
      price: "5000",
      qty: 1,
      categeroy: "Shooes",
     img : "https://theharrispoll.com/wp-content/uploads/2023/09/AdobeStock_634484258_Editorial_Use_Only.jpeg",
    },
    {
      id: 12,
      name: "Crocs",
      price: "2500",
      qty: 1,
      categeroy: "Shooes",
      img : "https://i.etsystatic.com/35703364/r/il/19d808/5005863608/il_fullxfull.5005863608_6hsm.jpg",
    },
    {
      id: 13,
      name: "Pizza",
      price: "250",
      qty: 1,
      categeroy: "Food",
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsB-A0-ktup_x5sd_00KClAdQNXMl_M29gWA&usqp=CAU"
    },
    {
      id: 14,
      name: "Pani Puri",
      price: "20",
      qty: 1,
      categeroy: "Food",
      img : "https://moonrice.net/wp-content/uploads/2023/04/PaniPuri-7.jpg"
    },
    {
      id: 15,
      name: "CheeseCake",
      price: "20",
      qty: 1,
      categeroy: "Food",
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROpWDoPCn4piqPBfp0AoDVY0X8asUZcu57AA&usqp=CAU"
    },

  ])

  const [Filter,setFilter]= useState([]);

  const handleclick = (cate) => {
    let oldrecord=[...record];

    if(cate == "All"){
      setFilter(record)
    }
    else{
      oldrecord=record.filter((item)=>{
        return item.categeroy == cate;
      })
      setFilter(oldrecord)
    }
  }
  useEffect(()=>{
    setFilter(record)
  },[])
  return (
    <Record
    allrecord={Filter}
    btnclick={handleclick}
    />
  );
}

export default App;
