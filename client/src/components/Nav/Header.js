import React, {useState} from 'react'
import { Menu } from 'antd';
import {  
    AppstoreOutlined, 
    SettingOutlined, 
    LogoutOutlined,
    ShoppingOutlined,
    ReadOutlined,
    GithubOutlined
} from '@ant-design/icons';
import {Link} from 'react-router-dom'

const { SubMenu, Item } = Menu;

const Header = () => {
    const [current, setCurrent] = useState('')

    const handleClick = (e) => {
        setCurrent(e.key)
    }
    
    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme="dark">
            <Item key="home" icon={<AppstoreOutlined />}>
                <Link to="/" >Home</Link>
            </Item>
{/* 
            <Item key="shop" icon={<ShoppingOutlined />}>
                <Link to="/shop" >Shop</Link>
            </Item> */}

            <SubMenu key="SubMenu" 
                icon={<SettingOutlined />} 
                title={'QSM'}
            >
                {/* {user && user.role === 'subscriber' && (
                    <Item>
                        <Link to='/user/history'>User Dashboard</Link>
                    </Item>
                )} */}

              
                <Item>
                    <Link to='/siemens3t'>Siemens 3T</Link>
                </Item>

                <Item>
                    <Link to='/philips3t'>Philips 3T</Link>
                </Item>

            
                <Item icon={<LogoutOutlined/>}>Logout</Item>
            </SubMenu>

            <Item key="document" icon={<ReadOutlined />} style={{float: 'right'}} >
                <Link to="/" >Documentation</Link>
            </Item>

            <Item key="github" icon={<GithubOutlined />} style={{float: 'right'}} >
                <Link to="/" >Github</Link>
            </Item>
        </Menu>
    )
}

export default Header
