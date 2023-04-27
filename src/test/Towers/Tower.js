import { DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import './Tower.css';
import diskData from './diskData';
import TowerPegs from './TowerPegs';

export const Tower = () =>{

    const data = diskData;

    const bases = [
        { id: "firstBase", size: 4 },
        { id: "secondBase", size: 4 },
        { id: "thirdBase", size: 4 }
      ];


    const canDrop = (props, monitor) =>{

        const item = monitor.getItem();
        const draggedSize = item.size;
        
        // Get the top disc on the droppable, if any
        const topDisc = props.children[0].props.children[0];
        const topSize = topDisc ? topDisc.props.size : Infinity;
        
        // Check if the dragged disc is smaller than the top disc
        return draggedSize >= topSize;
    }

    const onDragEnd = (result) =>{
        const { destination, source, draggableId } = result
        if (!destination) {
            return
        }
        if (destination.droppableId === source.droppableId && destination.index < source.index){
            return
        }
        if (destination.droppableId !== source.droppableId && destination.index !== source.index) {
            return
        }
        const currentCol = data.columns[destination.droppableId]
        const lastTask = currentCol.taskIds[0]
        if (draggableId >= lastTask) {
            return
        }
        const start = data.columns[source.droppableId]
        const finish = data.columns[destination.droppableId]

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds)
            newTaskIds.splice(source.index, 1)
            newTaskIds.splice(destination.index, 0, draggableId)
      
            const newColumn = {
              ...start,
              taskIds: newTaskIds
            }
      
            const newData = {
              ...this.data,
              columns: {
                ...this.state.columns,
                [newColumn.id]: newColumn
              }
            }
      
            setData(newData)
            return
          }
    }

    return (
        <div>
            <h2 align='center'>Towers of Hanoi</h2>
            <DragDropContext onDragEnd={onDragEnd}>
                <div class= 'container'>
                    <div class='row'>
                        <div id="firstTower" class = 'col s12 m3 l3' align='center'>
                            <div class= 'row' className="tower">
                                <TowerPegs size={3} id="small" index={0}/>
                            </div>
                            <div class= 'row' className="tower">
                                <TowerPegs size={2} id="medium" index={1}/>
                            </div>
                            <div class= 'row' className="tower">
                                <TowerPegs size={1} id="large" index={2}/>
                            </div>
                        </div>
                        <div id="secondTower" class = 'col s12 m3 l3' align='center'>
                            <div class= 'row' className="tower">
                                
                            </div>
                        </div>
                        <div id="thirdTower" class = 'col s12 m3 l3' align='center'>
                            
                        </div>
                    </div>
                    <div class='row'>
                        {bases.map((base) => (
                            <div key={base.id} id={base.id} class='col s12 m3 l3' align='center'>
                            <div class='row'>
                                <Disc size={base.size} />
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </DragDropContext>
            {data.columns.column3.taskIds.length === 3 && (
                <div>
                    <h1>Congrats, you completed the puzzle!</h1>
                    <h4>To play again refresh page.</h4>
                </div>
            )}
        </div>
        
    );
};
