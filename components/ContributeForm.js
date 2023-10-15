import React, { Component } from 'react';
import {Form,Input,Message, Button} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import {Router} from '../routes';


export default class ContributeForm extends Component {
    state={
        value: '',
        loading:false,
        errMessage: ''
    }
    onSubmit = async event => {
        event.preventDefault();

        this.setState({loading: true,errMessage: ''});
        const campaign = Campaign(this.props.address);

        try{
            //const accounts = await web3.eth.getAccounts();

            await campaign.methods.contribute().send({
                from: ethereum.selectedAddress,
                value: web3.utils.toWei(this.state.value,'ether')
            });
            Router.replaceRoute(`/campaigns/${this.props.address}`);

        }catch(err){
            this.setState({errMessage: err.message});
        }
        this.setState({loading: false, value: ''});
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errMessage}>
                <Form.Field>
                    <label>
                        Amount to Contribute
                    </label>
                    <Input
                    value={this.state.value}
                    onChange={event => this.setState({value: event.target.value})}
                    label='Ether' labelPosition='right'
                    />
                    <Message 
                            error
                            header='Oops !' 
                            content={this.state.errMessage}
                        />
                    <Button loading={this.state.loading} primary style={{marginTop: '10px'}}>
                        Contribute
                    </Button>
                </Form.Field>
            </Form>   
        )
    }
}
