import ClientsSlider from "./ClientsSlider";

export default function ValuedClients(){
  return <section id="valuedclients">
  <div className="container">
  <div className="star"><img src="./images/star.png" alt="star icon" /></div>
  <h2>Our Valued Clients</h2>
  <div className="subtitle">At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving</div>
  <ClientsSlider />
  </div>
</section>
}