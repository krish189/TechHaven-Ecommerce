import React from 'react';
import './WarrantyPolicy.css';
import Marquee from '../Home/Marquee/Marquee';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';

function WarrantyPolicy() {
  return (
    <>
    <Marquee/>
    <Header/>
    <div className="wp-container">
        <p className="wp-head">Warranty Policy</p>
        <p className="para">At TechHaven, we stand behind the quality of our products. Our warranty policy ensures that customers can purchase with confidence, knowing that we are committed to supporting their needs if any issues arise.</p>
        <p className="small-heading">Warranty Coverage</p>
        <p className="para">All products sold through TechHaven come with a standard manufacturer’s warranty, unless explicitly stated otherwise. The warranty period and terms may vary depending on the product category and manufacturer.</p>
        <p className="para">All electronic products, including laptops, cameras, headphones, microphones, and similar items, are covered by a 1-year warranty for manufacturing defects. Accessories, such as laptop stands, cooling pads, and USB hubs, come with a 1-year warranty that covers defects in materials and workmanship. Storage devices, including SSDs, HDDs, and memory cards, are also covered under a 1-year warranty.</p>
        <p className="para">Please check the individual product listings for specific warranty details.</p>
        <p className="small-heading">What is Covered?</p>
        <p className="para">The warranty covers defects in materials and workmanship under normal use. The following are examples of issues covered by our warranty:</p>
        <ul className='wp-ul'>
            <li>Manufacturing defects</li>
            <li>Hardware malfunctions</li>
            <li>Defective materials or components</li>
        </ul>
        <p className="small-heading">What is Not Covered?</p>
        <p className="para">The warranty does not cover issues resulting from:</p>
        <ul className='wp-ul'>
            <li>Normal wear and tear</li>
            <li>Misuse, abuse, or neglect of the product</li>
            <li>Unauthorized modifications or repairs</li>
            <li>Damage caused by accidents or improper use (e.g., water damage, electrical surge)</li>
            <li>Loss or theft of the product</li>
        </ul>
        <p className="small-heading">Claim Process</p>
        <p className="para">If you believe your product is defective and falls within the warranty period, please follow these steps to submit a claim:</p>
        <ol>
           <li><b>Contact TechHaven Support:</b> Reach out to our customer support team via email at support@techhaven.com or call our helpline at [helpline number]. Please include your order number, product details, and a description of the issue.</li>
           <li><b>Verification and Assessment:</b> Once we receive your claim, we will verify your product purchase and the warranty status. We may request additional details such as photos, videos, or proof of purchase for assessment purposes.</li>
           <li><b>Return the Product:</b> If required, you may need to return the defective product for inspection. Our team will provide instructions on how to return the product. Please ensure that the item is returned with all accessories and original packaging (if available).</li>
           <li><b>Repair or Replacement:</b> Based on the assessment, we will either repair or replace the defective product free of charge. If a replacement is not available, we will offer an equivalent product or issue a refund as per our return policy.</li>
        </ol>
        <p className="small-heading">Warranty Limitations</p>
        <p className="para">The warranty is valid only for products purchased from TechHaven. Any unauthorized repairs or modifications void the warranty. The warranty is non-transferable and applies only to the original purchaser.</p>
        <p className="small-heading">Extended Warranty (If Applicable)</p>
        <p className="para">In addition to the standard warranty, we may offer extended warranty options for select products. Please refer to the product page or contact our support team for more details on extended warranty plans.</p>
        <p className="para"><b>Note:</b> TechHaven reserves the right to modify or update this Warranty Policy without prior notice. It is the customer’s responsibility to review the policy regularly.</p>
    </div>
    <Footer/>
    </>
  )
}

export default WarrantyPolicy