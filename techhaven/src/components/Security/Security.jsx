import React from 'react';
import './Security.css';
import Marquee from '../Home/Marquee/Marquee';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';

function Security() {
  return (
    <>
    <Marquee/>
    <Header/>
    <div className='security-container'>
        <p className='security-head'>Security Strategy</p><br></br>
        <p className="small-heading">Public Feedback Interface</p>
        <p className="para">Security researchers and users can notify TechHaven of any security vulnerabilities found in our e-commerce platform or related systems.</p>
        <ul className='security-ul'>
          <li><b>Contact for Security Issues:</b> security@techhaven.com</li>
        </ul>
        <p className="small-heading">Security Reports from Independent Experts</p>
        <p className="para">TechHaven has partnered with a Security Corporation to conduct regular security tests and assessments of its e-commerce platform and infrastructure. A detailed security report will be provided after each assessment.</p>
        <p className="small-heading">Software Vulnerability Monitoring</p>
        <p className="para">TechHaven actively monitors public security databases for vulnerabilities in the software components used in our systems. We maintain regular checks through the following sources:</p>
        <ul className='security-ul'>
            <li><b>CVE Database:</b>  http://cve.mitre.org/</li>
            <li><b>National Vulnerability Database (NVD):</b>  https://nvd.nist.gov/</li>
            <li><b>Common Weakness Enumeration (CWE):</b> http://cwe.mitre.org/</li>
        </ul>
        <p className="small-heading">Software Maintenance Update Strategy</p>
        <p className="para">TechHaven ensures that all third-party software components used on the platform are up-to-date with the latest security patches. Our approach includes:</p>
        <ul className="security-ul">
          <li>Monitoring version updates of third-party components.</li>
          <li>Updating to the latest versions to avoid known vulnerabilities.</li>
          <li>Bundling security patches with general software updates.</li>
        </ul>
        <p className="small-heading">Firmware and Software Vulnerability Response</p>
        <p className="para">If a vulnerability is identified, TechHaven will follow this procedure to address it:</p>
        <ol>
          <li><b>Vulnerability Identification:</b> Vulnerabilities may be reported by customers, users, or discovered internally.</li>
          <li><b>Immediate Action:</b> A security review meeting will be scheduled as soon as possible. Attendees include: Project Development Manager, Technical Director and External partners responsible for software or firmware development</li>
          <li><b>Vulnerability Assessment:</b> The Common Vulnerability Scoring System (CVSSv3) will be used as a reference for assessing and prioritizing vulnerabilities.</li>
          <li><b>Solution Development:</b> Developers will implement the necessary patches or fixes.</li>
          <li><b>Code Review:</b> The fixes will be reviewed by the Security Technology Manager and the Project Development Team.</li>
          <li><b>Firmware Release:</b> After a successful review, the updated firmware or software patch will be prepared for release.</li>
          <li><b>QA Testing:</b> The QA team will test the firmware thoroughly. If issues are found, the process returns to the development phase.</li>
          <li><b>Code Integration:</b> The updated code will be merged into the main project branch.</li>
          <li><b>Customer Notification:</b> Customers will be informed about the update and will be required to confirm the upgrade.</li>
          <li><b>OTA Updates:</b> TechHaven will perform Over-the-Air (OTA) updates for relevant systems to ensure all customers are protected.</li>
        </ol>
        <p className="small-heading">Security Response Plan</p>
        <p className="para">In case of a security incident, TechHaven follows a robust incident response protocol:</p>
        <ol>
          <li><b>Incident Escalation:</b> All security incidents are treated with the highest priority. Top management, including the CEO and the CTO, will be informed and participate in the response.</li>
          <li><b>Incident Handling:</b> If the incident is related to software maintenance, it will be handled according to the steps outlined in the “Software Maintenance Update Strategy.”</li>
          <li><b>Internal Crisis Meeting:</b> A meeting between TechHaven and external partners or solution providers will be convened immediately. The meeting will gather all available information about the incident, determine the impact and scope of the issue and estimate timelines for remediation.</li>
          <li><b>Customer Communication:</b> For incidents with significant impact, TechHaven will collaborate with affected customers to agree on a timeline and resolution strategy.</li>
          <li><b>Remediation:</b> TechHaven will implement and test any necessary patches, keeping all stakeholders updated on progress.</li>
        </ol>
    </div>
    <Footer/>
    </>
  )
}

export default Security