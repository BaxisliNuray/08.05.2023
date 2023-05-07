import { Button, Input } from 'antd'
import React, { useState } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';

function Task2() {
    const [add, setadd] = useState("")
   const ChangeInput = (e) => setadd(e.target.value)
   const handleCLick=(e)=>{
        if (add.length < 5) {
            window.alert("Username shouldn't less 5 characters")
        }
        else {
            setadd(e.target.value)
        }
    }

    return (

        <Row >
            <Col span={8}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Input size="large" onChange={ChangeInput} placeholder="Enter Input..." prefix={<UserOutlined />} />
                    <Button type="primary"  onClick={handleCLick} ghost>Primary</Button>
        


                </div>


            </Col>

        </Row>

    )
}

export default Task2