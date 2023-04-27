export const diskData = {
    tentativeNumber: 1,
    tasks: {
        '1': { id: 1},
        '2': { id: 2},
        '3': { id: 3}
      },
    columns: {
      column1: {
        id: 'column1',
        title: '1',
        taskIds: [1,2,3]
      },
      column2: {
        id: 'column2',
        title: '2',
        taskIds: []
      },
      column3: {
        id: 'column3',
        title: '3',
        taskIds: []
      }
    },
    // Facilitate reordering of the columns
    columnOrder: ['column1', 'column2', 'column3']
  }
  
  export default diskData