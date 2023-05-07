import React, { useState, useEffect, useRef } from 'react'
import { Col, Row, Card } from 'antd';
import Search from '../Search';
import Loading from '../Loading';
const style = { padding: '8px 0' };
const { Meta } = Card;




function Tas3() {
    const [Cards, setCard] = useState([])
    const storage=useRef([])
    let fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/photos").then(response => {
            return response.json()
        }).then(data => {
            setCard(data);
            storage.current=data

        })

    }
    useEffect(() => {
        fetchData()
    }, [])

    return (


        <>
        <Loading/>
            <Search setCard={setCard} storage={storage} />
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {Cards.map((card) => (

                    < Col className="gutter-row" span={6}>
                        <div style={style}>

                            <Card id={card.id} hoverable style={{ width: 240 }} cover={<img alt="example" src={card.url} />}>
                                <Meta title={card.title} />
                            </Card>
                        </div>

                    </Col>
                ))}


            </Row >

        </>


    )
}

export default Tas3