import React from 'react'
import Disc from './Disc'
import { Droppable } from 'react-beautiful-dnd'


export const  TowerPegs = ({size, id, index}) => {
    return (
      <div class = 'container'>
        <Droppable droppableId={index}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              <Disc
                    size={size}
                    id={id}
                    index={index}
                  />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    )
  }
export default TowerPegs;
