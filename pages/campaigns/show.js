import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import {Grid,Card, Button} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';

export default class CampaignShow extends Component {
    
    static async getInitialProps(props){
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();
        const title = await campaign.methods.CampaignTitle().call();
        const Description = await campaign.methods.CampaignDescription().call();

        return {
            title: title,
            Description:Description,
            address: props.query.address,
            minimumContribution: summary[0],
            contractBalance: summary[1],
            requestCount : summary[2],
            approversCount : summary[3],
            manager: summary[4]
        };
    }

    renderCards() {
        const {
            title,
            Description,
            contractBalance,
            manager,
            minimumContribution,
            requestCount,
            approversCount
        } = this.props;

        const items = [
            {
                header: title,
                meta: 'About Campaign',
                description: Description,
                style : {overflowWrap: 'break-word', backgroundColor: '#f5f5f5' , boxShadow:' 0px 0px 5px rgba(0, 0, 0, 0.2)'}
            },
            {
                header: manager,
                meta: 'Address of Manager',
                description: 'Manager Created this campaign and can create requests to withraw money',
                style : {overflowWrap: 'break-word', backgroundColor: '#f5f5f5' , boxShadow:' 0px 0px 5px rgba(0, 0, 0, 0.2)'}
            },
            {
                header: web3.utils.fromWei(minimumContribution,'ether'),
                meta: 'Minimum Contribution (ether)',
                description: 'You must contribute atleast this much eth to become an approver',
                style : {overflowWrap: 'break-word', backgroundColor: '#f5f5f5' , boxShadow:' 0px 0px 5px rgba(0, 0, 0, 0.2)'}
            },
            {
                header: requestCount,
                meta: 'Number of Requests',
                description: 'A request tries to withraw money from the contract. Requests must be approved by approvers',
                style : {overflowWrap: 'break-word', backgroundColor: '#f5f5f5' , boxShadow:' 0px 0px 5px rgba(0, 0, 0, 0.2)'}
            },
            {
                header: approversCount,
                meta: 'Number of Contributor',
                description: 'Number of people who have already contributed',
                style : {overflowWrap: 'break-word', backgroundColor: '#f5f5f5' , boxShadow:' 0px 0px 5px rgba(0, 0, 0, 0.2)'}
            },
            {
                header: web3.utils.fromWei(contractBalance,'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has left',
                style : {overflowWrap: 'break-word', backgroundColor: '#f5f5f5' , boxShadow:' 0px 0px 5px rgba(0, 0, 0, 0.2)'}
            }
        ];
        return <Card.Group items={items}/>
    }

    render() {
        return (
            <Layout>
                <h3>Campaign Details</h3>
                <Grid>
                    <Grid.Row>
                    <Grid.Column width={10}>
                    {this.renderCards()}
                    
                    </Grid.Column>
                    <Grid.Column width={6}>
                    <ContributeForm address={this.props.address}/> 
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                        <Link route={`/campaigns/${this.props.address}/requests`}><a>
                        <Button primary >View Requests</Button>
                        </a></Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        )
    }
}

