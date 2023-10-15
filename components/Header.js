import React from 'react';
import { Menu} from 'semantic-ui-react';
import {Link} from '../routes';

export default () => {
    return (
        <div style={{"background-color":"#4056a1","color":"white"}}>
        <Menu style={{
        "padding":'10px',"background-color":"#4056a1"
        }}>
            <Link route='/'>
                <a className='item'style={{"background-color":"#4056a1","color":"white" , "fontSize":"15px","paddingRight":"30px","paddingLeft":"30px"}}>
                Bit-Start
                </a>
            </Link>
            <Link route='/campaigns'>
                <a className='item' style={{"color":"white", "fontSize":"15px","paddingRight":"30px","paddingLeft":"30px"}}>
                Campaigns
                </a>
            </Link>
            <Link route='/faq'>
                <a className='item' style={{"color":"white", "fontSize":"15px","paddingRight":"30px","paddingLeft":"30px"}}>
                FAQ
                </a>
            </Link>
            <Link route='/community' >
                <a className='item' style={{"color":"white", "fontSize":"15px","paddingRight":"30px","paddingLeft":"30px"}}>
                Community
                </a>
            </Link>
            <Link route='/updates'>
                <a className='item' style={{"color":"white", "fontSize":"15px","paddingRight":"30px","paddingLeft":"30px"}}>
                Updates
                </a>
            </Link>
            <Menu.Menu position="right">
            
            <Link route='/campaigns/new'>
                <a className='item' style={{"background-color":"#f13c20","color":"white"}}>
                Start a Project
                </a>
            </Link>
            </Menu.Menu>
        </Menu>
        </div>
    );
};
