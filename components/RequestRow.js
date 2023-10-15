import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import { Button } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import {Router} from '../routes';

export default class RequestRow extends Component {
  state={
    Aloading:false,
    Floading:false
  }
  onApprove = async () => {
    this.setState({Aloading: true});
    const campaign = Campaign(this.props.address);
    try{

    
    await campaign.methods.approveRequest(this.props.id).send({
      from: ethereum.selectedAddress,
    });
    
    Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
    }catch(err){

    }
    this.setState({Aloading: false});
  };
  onFinalize = async () =>{
    this.setState({Floading: true});
    const campaign = Campaign(this.props.address);
    try{
    await campaign.methods.finalizeRequest(this.props.id).send({
      from: ethereum.selectedAddress,
    });
    
    Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
    }catch(err){

    }
    this.setState({Floading: false});
  };

  render() {
    const { Row, Cell } = Table;
    const { id, request, TotalApprovers } = this.props;
    const readyToFinalize = request.approvalCount > TotalApprovers/2;
    return (
      <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
        <Cell>{id + 1}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, "ether")}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>
          {request.approvalCount}/{TotalApprovers}
        </Cell>
        <Cell> 
            {request.complete ? 'Approved':(
          <Button loading={this.state.Aloading} color="green" basic onClick={this.onApprove}>
            Approve
          </Button>)}
        </Cell>
        <Cell>
            {request.complete ? 'Finalized':(
        <Button color="teal" loading={this.state.Floading} basic onClick={this.onFinalize}>
            Finalize
          </Button>)}
        </Cell>
      </Row>
    );
  }
}
