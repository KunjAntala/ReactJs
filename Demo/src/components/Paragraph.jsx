import React from 'react'
import { useMemo } from 'react'

function Paragraph(props) {

    const {list:list} = props
    const localList = useMemo(() => {
        return props.list
    },[list])

    return (
        <p>{props.show ? props.list.map(item => item) : ''}</p>
    )
}

export default React.memo(Paragraph)
