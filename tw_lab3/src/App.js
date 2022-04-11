import React from 'react';
import './App.css';
import { Breadcrumb, Layout, Menu } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Card, Col, Row } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { message } from 'antd';



const {Header, Footer, Sider, Content} = Layout;
const { Meta } = Card;




const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const info = () => {
  message.info('Fast LogIn');
};


function App() {
  return(
    <div className='App'>
      <Layout>
      <Header>
        <Title style={{color:'gray'}} level={3}  align="left">Falinschi CR-193</Title>
      </Header>
        <Layout>
          <Sider>
            <Menu>
              <Menu.Item key='Dashboard'>
                Dashboard
              </Menu.Item>
              <SubMenu
              title={
                <span>About Us</span>
              }
              >
                <Menu.ItemGroup key='AboutUs' title='Information'>
                  <Menu.Item key='History'>History</Menu.Item>
                  <Menu.Item key='Location'>Location</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-card-wrapper">
              <Row gutter={16}>
                <Col span={8}>
                <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg" />}
            >
            <Meta title="Google" description="www.google.com" />
            </Card>
                </Col>
                <Col span={8}>
                <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://cdn.shopify.com/app-store/listing_images/21d07b9a03ab6e538a053381def7b15d/icon/CJnzrtj0lu8CEAE=.jpg" />}
            >
            <Meta title="Facebook" description="www.facebook.com" />
            </Card>
                </Col>
                <Col span={8}>
                <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://yt3.ggpht.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s900-c-k-c0x00ffffff-no-rj" />}
            >
            <Meta title="YouTube" description="www.youtube.com" />
            </Card>
                </Col>
              </Row>
            </div>,
            <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Location"
        name="Location"
        rules={[
          {
            required: true,
            message: 'Please input your location!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        
        <Button type="primary" htmlType="submit" onClick={info}>
          Submit
        </Button>
        
        
      </Form.Item>
    </Form>
          </Content>
          </Layout>
        </Layout>
      </Layout>
      <Layout/>
    </div>
  );
}

export default App;