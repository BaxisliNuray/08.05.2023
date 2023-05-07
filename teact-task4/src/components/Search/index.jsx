import { Input } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import React from 'react'

function Search({ storage, setCard }) {
    let handleChange = (e) => {
        const filtercard=storage.current.filter(x=>x.title.toLowerCase().includes(e.target.value.toLowerCase().trim()))
        setCard(filtercard)
    }
    return (


        <div style={{ width: '30%', margin: '20px auto' }}>
            <Input size="large" onChange={handleChange} placeholder="Enter Input..." prefix={<UserOutlined />} />

        </div>



    )
}

export default Search