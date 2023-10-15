import React from 'react';
import factory from '../ethereum/factory';
import { Card } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link} from '../routes';
import Campaign from '../ethereum/campaign';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


class CampaignIndex extends React.Component {

    static async getInitialProps(props){
        let AllCampaignDetails=[];
        
        function NewCampaignDetails(address,title,description){
            this.address=address;
            this.title=title;
            this.description=description;
        }
        const campaign = await factory.methods.getDeployedCampaign().call();

        for(let i=0;i<campaign.length;i++){
            let address= campaign[i];
            const title =  await Campaign(address).methods.CampaignTitle().call();
            const description = await Campaign(address).methods.CampaignDescription().call();
            AllCampaignDetails[i] = new NewCampaignDetails(address,title,description);
        }
        return {campaign,AllCampaignDetails};
    }

    renderCampaigns() {
        
        const items = this.props.campaign.map((address,index) => {
            

            return {
               
                header: this.props.AllCampaignDetails[index].title,
                meta:'Description',
                description:this.props.AllCampaignDetails[index++].description,
                extra:(
                <Link route={`/campaigns/${address}`}><a>View Campaign</a></Link>),
                fluid: true,
                style: {  backgroundColor: '#f5f5f5' , boxShadow:' 0px 0px 5px rgba(0, 0, 0, 0.2)' }
              
            };
        
        });
        return <Card.Group  items={items}/>
    }

    render(){
        
    return (
    <Layout>
        
       
        <h1 style={{"padding-bottom":"10px"}}>Open Campaign</h1>
        <Link route='/campaigns/new'>
            <a>
            <Button style={{"background-color":"#4056a1","color":"white"}}
            content="Create Campaign"
            icon="add"
            primary
            floated="right"
        />
            </a>
        </Link>
        <div>
        {this.renderCampaigns()}
        </div>
      
       
    </Layout>);
    }
}

export default CampaignIndex;