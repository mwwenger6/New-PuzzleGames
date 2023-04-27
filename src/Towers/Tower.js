import { DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import './Tower.css';
import Disc from './Disc';

const bases = [
  { id: "firstBase", size: 4 },
  { id: "secondBase", size: 4 },
  { id: "thirdBase", size: 4 }
];

let towers = [
  {
      id: 'column1',
      title: '1',
      discs: [1,2,3]
  },
  {
      id: 'column2',
      title: '2',
      discs: []
  },
  {
      id: 'column3',
      title: '3',
      discs: []
  }
]

export const Tower = () =>{

  const column3 = towers.find(tower => tower.id === 'column3');


  const onDragEnd = (result) => {
    console.log(result);
   };


  return (
    <div>
      <h2 align='center'>Towers of Hanoi</h2>
      <DragDropContext >
        <Droppable droppableId="disks" onDragEnd={onDragEnd}>
          {(provided) => (
            <div className='container'>
              <div className='row'>
                {towers.map(({id, title, discs}, index) => {
                  return (
                    <div id={id} className='col s12 m3 l3' align='center' key={id} {...provided.droppableProps} ref={provided.innerRef}>
                      {discs.map((size, ind)=> {
                        const key = `${ind}`;
                        return (
                          <Draggable key={key} draggableId={key} index={ind}>
                            {(provided) => (
                              <div className='row tower' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                <Disc size={size}></Disc>
                              </div>
                            )}
                          </Draggable>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className='row'>
        {bases.map((base) => (
          <div key={base.id} id={base.id} className='col s12 m3 l3' align='center'>
            <div className='row'>
              <Disc size={base.size} />
            </div>
          </div>
        ))}
      </div>
      {column3.discs.length === 3 && (
        <div>
          <h1>Congrats, you completed the puzzle!</h1>
          <h4>To play again refresh page.</h4>
        </div>
      )}
    </div>
  );
};
