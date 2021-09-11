import React from "react";
import ReactDOM from "react-dom";
import Card from "./Component/Card/index";
import Header from "./Component/Header/index";
import Footer from "./Component/Footer";
import "../src/index.scss";
import App from "./App";


const menu = [
  {  img:"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ", title:"The Everyday Salad", description:"Take your boring salads up a knotch. This recipe is perfect for lunchand only contains 5 ingredients!" },
  {  img:"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ", title:"The Everyday Salad", description:"Take your boring salads up a knotch. This recipe is perfect for lunchand only contains 5 ingredients!" },
  {  img:"https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ", title:"Simple Risotto", description:"Fear Risotto no more! This simple recipe is perfect for family dinners." },
  {  img:"https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ", title:"Baked Cod with Vegetables", description:"Baked Cod with Vegetables. 30 minute meal!" },

  ];

  const header = [
    {logo:"Menu Makanan", menu:"Kelompok 31", logout:"Logout"}
  ]

  const footer = [
    {tulisan:"KELOMPOK 31", nama1:"Azzah Afifah", nama2:"Caerel Steven"}
  ]

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header header={header}/>
    <Card menu={menu}/>
    <Footer footer={footer}/>
</React.StrictMode>,
document.getElementById("root")
);