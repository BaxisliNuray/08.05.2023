import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'

function Loading() {
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)

    }, []);

    return (

        <Spin style={{ marginTop: '180px', display: Loading ? false : true }} tru size="large"><div className="content" /></Spin>

    )
}

export default Loading