import React from 'react';
import "./App.css"; 
import UdemyList from './UdemyList';

// const productList = [
//   {
//     id: "1",
//     image:
//       "https://static-01.daraz.com.np/p/9a5f85c067833bdf7a746142c5d68213.png_300x0q75.webp",
//     name: "Royal Blue Water Purifier",
//     price: 10395,
//   },
//   {
//     id: "2",
//     image:
//       "https://static-01.daraz.com.np/p/67789aac75b2c560fc34336b77fbb147.png_300x0q75.webp",
//     name: "Aqua Fresh Accent Plus RO",
//     price: 14599,
//   },
//   {
//     id: "3",
//     image:
//       "https://static-01.daraz.com.np/p/6131ef9f232eefcea78fabf3265333c6.png_300x0q75.webp",
//     name: "Kent Grand Plus B",
//     price: 31550,
//   },
//   {
//     id: "4",
//     image:
//       "https://static-01.daraz.com.np/p/57485880e1f1dd76081e795428e25b34.jpg_300x0q75.webp",
//     name: "Kent Grand Plus",
//     price: 22500,
//   },
//   {
//     id: "5",
//     image:
//       "https://static-01.daraz.com.np/p/550c369110dda9e872a4a73e7c2f663f.jpg_300x0q75.webp",
//     name: "Adidas",
//     price: 9500,
//   },
//   {
//     id: "6",
//     image:
//       "https://www.maketheswitch.ph/cdn/shop/products/43VidaaTransparent.png?v=1669004891",
//     name: "Samsung | Full HD | 55 inch",
//     price: 96000,
//   },
//   {
//     id: "7",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxWzagIjgLT7VLC5_O36vHMP7z5GjcJoiGGgewClCAyQ&s",
//     name: "LG Washing Machine | ThinQ AI | Power saving | Less water",
//     price: 85000,
//   },
// ];

const courseList=[{
  image:"https://img-c.udemycdn.com/course/480x270/5870326_43ef.jpg",
  name:"The Complete 2024 Web Development Bootcamp",
  tutorName:"Dr. Angela Yu",
  price:13.99
},
{
  image:"https://img-c.udemycdn.com/course/480x270/5885590_8cb1_2.jpg",
  name:"HTMX-The Practical Guide",
  tutorName:"Dr. Angela Yu",
  price:12.99
},
{
  image:"https://img-c.udemycdn.com/course/480x270/5866912_6d70_3.jpg",
  name:"Data Analysis and Machine Learning: Python + GPT 3.5 & GPT 4",
  tutorName:"Dr. Angela Yu",
  price:19.99
},
{
  image:"https://img-c.udemycdn.com/course/480x270/5852586_0202_2.jpg",
  name:"Consuming RESTful API in SwiftUI Apps - Mini Course",
  tutorName:"Dr. Angela Yu",
  price:15.99
},
{
  image:"https://img-c.udemycdn.com/course/480x270/5196034_e1f9_2.jpg",
  name:"Java Programming: A Comprehensive Bootcamp from Zero to Hero",
  tutorName:"Dr. Angela Yu",
  price:23.99
},
{
  image:"https://img-c.udemycdn.com/course/480x270/5869302_43c6.jpg",
  name:"Control Rig for Unreal Engine 5",
  tutorName:"Dr. Angela Yu",
  price:11.99
},
{
  image:"https://img-c.udemycdn.com/course/480x270/5853416_2e0f.jpg",
  name:"SQL Masterclass: A-Z Database Management Bootcamp",
  tutorName:"Dr. Angela Yu",
  price:20.99
},
{
  image:"https://img-c.udemycdn.com/course/480x270/5855220_e5de.jpg",
  name:"Essentials of Physical Network Connectivity",
  tutorName:"Dr. Angela Yu",
  price:17.99
},
]
const App = () => {
 
  return (
    <div>
      {/* <NameShow studentName="suresh" college="BroadWay" address="Pokhara" /> */}
     {/* <ProductCard
        image="https://itti.com.np/_next/image?url=https%3A%2F%2Fadmin.itti.com.np%2Fstorage%2Fproduct%2Fmsi-gf63-thin-10scxr-price-nepal%2Fthumb%2F09da26e7-a503-4f80-bcdf-bf76ed9ec325.webp&w=1920&q=75"
        name="MSI GF63 Thin 10SCXR i7 10TH GEN / GTX 1650 / 8GB RAM / 512GB SSD / 15.6 FHD"
        price={112000}
      />

      <ProductCard image="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/laptop/emea-na-au-nz-my-sg-in-ph-id-vn-jp-kr-vostro-5630-with-fpr-rf-800x620.png?fmt=png-alpha&wid=800&hei=620" name="Laptop Computers & 2-in-1 PCs for Business | Dell" price={1450000}/> */}

     {/* {
      displayList.map((item)=>{
        const {image, name, price}=item
      return (<DisplayList key={item.id} image={image} name={name} price={price}/>)

      })
     } */}
  {/* <div style={{display:"flex",gap:"2rem",flexDirection:"row", flexWrap:"wrap"}}>
    {

      productList.map((item,index)=>{
        const {image,name,price} =item
        return (
        
        <ProductCard1 key={index} image={image} name={name} price={price} />
     
        
      )

      })
    }
    </div> */}

<div style={{display:"flex",gap:"2rem", flexDirection:"row", flexWrap:"wrap", alignItems:"center"}}>
{
  courseList.map((item,index)=>{
    const {image,name,tutorName,price}=item
    return (
      <UdemyList key={index} image={image} name={name} tutorName={tutorName} price={price}/>
    )
  })
}
</div>

    </div>
  )
}

export default App