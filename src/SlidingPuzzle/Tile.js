import React from 'react'


export const Tile =({ tileId, position }) => {
  
    const id = tileId;
    const pos = position;
    let color = 'teal'
    if (id == null){
        color = ''
    }

    
      

    return (
    <div
        style={{
        backgroundColor: color,
        width: '100%',
        height: '100%',
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        }}
    >
        {id}
    </div>
    )
}

export default Tile