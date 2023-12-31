import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import {Button,Table} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';

export default class RequestIndex extends Component {
    static async getInitialProps(props){
        const {address} = props.query;
        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestCount().call();
        const TotalApprovers = await campaign.methods.approversCount().call();
       
       
        const requests = await Promise.all(
            Array(parseInt(requestCount)).fill().map((element,index) => {
                return campaign.methods.requests(index).call();
            })
        );
        
        return{address, requests ,requestCount, TotalApprovers};
    }
    renderRow() {
        return this.props.requests.map((request,index)=>{
            return <RequestRow
            key={index}
            id={index}
            request={request}
            address={this.props.address}
            TotalApprovers={this.props.TotalApprovers}
            />
        })
    }

    render() {
        const{Header, Row, HeaderCell,Body} = Table;
        return (
            <Layout>
    <h3>Requests</h3>
                <Link  route={`/campaigns/${this.props.address}`}>
                <a>
                    <Button primary floated='right' style={{marginBottom: '10px'}}>Back</Button>
                </a>
                </Link>
                <Link  route={`/campaigns/${this.props.address}/requests/new`}>
                <a>
                    <Button primary floated='right' style={{marginBottom: '10px'}}>Add Request</Button>
                </a>
                </Link>
                 <Table>
                     <Header align='center'>
                         <Row>
                             <HeaderCell>Id</HeaderCell>
                             <HeaderCell>Description</HeaderCell>
                             <HeaderCell>Amount</HeaderCell>
                             <HeaderCell>Recipient</HeaderCell>
                             <HeaderCell>Approval Count</HeaderCell>
                             <HeaderCell>Approve</HeaderCell>
                             <HeaderCell>Finalize</HeaderCell>
                         </Row>
                     </Header>
                     <Body align='center'>
                         {this.renderRow()}
                     </Body>
                 </Table>
        <div> Found {this.props.requestCount} Requests</div>
            </Layout>
        );
    }
}
