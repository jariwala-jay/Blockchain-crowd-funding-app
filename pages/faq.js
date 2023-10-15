import React from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import Layout from "../components/Layout";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App() {
  return (
      <Layout>
      <h1>FAQ Page</h1>
    <MDBContainer className="mt-5" style={{maxWidth: '1000px'}}>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle="What is BitStart?">
        Kickstarter is a launchpad for creators to raise funds for the initial production of their inventions. Backers (that's you!) can support the creator by pledging and receiving in exchange a reward.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="What does it mean to back a project?">
        When you back a project, you’re funding the production of the product. That means you'll get your choice of bag once it's produced (based on the pledge level you selected during the campaign). Besides getting the product itself, you're also joining a community. Follow along the production process, take part in important surveys and give the creator valuable feedback to make the product even better.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="How can i back a project?">
          You can back any project you like with the help of decentralised wallets like metamask with ethereum. As it is based on Blockchain so you have to have Cryptocurrency to work with it.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle="What is Blockchain?">
          
Blockchain defined: Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding).
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={5} headerTitle="What is Metamask wallet?">
          
        MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. It allows users to access their Ethereum wallet through a browser extension or mobile app, which can then be used to interact with decentralized applications.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={6} headerTitle="Can i contribute with Rupee/Dollar?">
          
        As it is based on Blockchain, You can not contribute with any other currency than Ethereum as of now.
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>
    </Layout>
  );
}