import React, { Component } from 'react';
import Layout from '../../components/Layout';
import {Form, Button,Input,Message} from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import {Router} from '../../routes';


export default class CampaignNew extends Component {

    state={
        minimumContribution: '',
        errorMessage: '',
        loading:false,
        title:'',
        description:''
    };

    onSubmit = async (event) => {
        this.setState({loading: true,errorMessage:''})
        event.preventDefault();
        try{
        
        await factory.methods.createCampaign(this.state.title,this.state.description,web3.utils.toWei(this.state.minimumContribution,'ether')).send({
            from: ethereum.selectedAddress
        });
        Router.pushRoute('/');
        } catch(err){
            this.setState({errorMessage: err.message});
            
        }
        this.setState({loading: false});

        
    }

    render() {
        return (
            <Layout>
                <h3>Create New Campaign</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} >
                <Form.Field>
                        <label>Title</label>
                        <Input
                        value={this.props.title}
                        onChange={event=>this.setState({title: event.target.value})}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <Input 
                        value={this.props.description}
                        onChange={event=> this.setState({description: event.target.value})}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input 
                        label='ether' 
                        labelPosition='right' 
                        value={this.state.minimumContribution}
                        onChange={event =>this.setState({
                            minimumContribution: event.target.value
                        })}
                        
                        />
                        <Message 
                            error
                            header='Oops !' 
                            content={this.state.errorMessage}
                        />
                        <Button loading={this.state.loading}primary style={{marginTop: '10px'}}>Create</Button>
                    </Form.Field>
                </Form>
            </Layout>
        )
    }
}
