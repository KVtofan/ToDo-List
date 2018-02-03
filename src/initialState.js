export const initialState = {
  filter: {
    search: '',
    done: true,
    chosenCategoryId: 1,
  },
  editMode: {
    isActive: false,
    elementToEdit: null,
    ancestorId: 0,
  },
  categories:[
    {
      id: 1,
      ancestorId: 0,
      name: 'Category 1',
      tasks: [
        { id: 1, name: 'Task1', done: false, description: '' },
      ],
    },
    {
      id: 2,
      ancestorId: 0,
      name: 'Category 2',
      tasks: [
        { id: 2, name: 'Task2', done: false, description: '' },
      ],
    },
    {
      id: 3,
      ancestorId: 1,
      name: 'Category 2',
      tasks: [
        { id: 3, name: 'Task2-1', done: true, description: '' },
      ],
    },
  ]
}
