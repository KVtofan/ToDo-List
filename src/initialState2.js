export const initialState = {
  filter: {
    search: '',
    done: true,
    chosenCategoryId: 1,
  },
  editMode: false,
  categories:[
    {
      id: 1,
      ancestorId: 0,
      name: 'Category 1',
      tasks: [
        { id: 2, name: 'Task2', done: true, description: '' },
      ],
    },
    {
      id: 2,
      ancestorId: 0,
      name: 'Category 2',
      tasks: [
        { id: 1, name: 'Task1', done: false, description: '' },
      ],
    },
    {
      id: 2,
      ancestorId: 0,
      name: 'Category 2',
      tasks: [
        { id: 1, name: 'Task1', done: false, description: '' },
      ],
    }
  ]
}
