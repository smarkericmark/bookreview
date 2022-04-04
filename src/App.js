import React from "react"
import Navbar from "./components/Navbar"
import CardReview from "./components/CardReview"
import data from "./data"
import Footer from "./components/footer"


export default function App() {
  
  
  const cards = data.map(item => {
    return (
      <CardReview
          img={item.coverImg}
          rating={item.rating}
          review={item.review}
          publisher={item.publisher}
          title ={item.title}
          link={item.purchaseLink} 
      />
    )
  })
  

  return (
    <div className="App">
      <Navbar />
      {/*<CardReview />*/}
      
      <section className="cards-list">
        {cards}
      </section>
      <Footer />
  
    </div>
  )
}
