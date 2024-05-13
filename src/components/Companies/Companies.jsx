import "./Companies.css"
import { tower, prologis, equinix, realty } from "../../assets"

const Companies = () => {
  return (
    <section id='companies' className="c-wrapper">
        <div className="paddings flexCenter innerWidth c-container">
            <img src={tower} alt="tower" />
            <img src={prologis} alt="prologis" />
            <img src={equinix} alt="equinix" />
            <img src={realty} alt="realty" />
        </div>
    </section>
  )
}

export default Companies