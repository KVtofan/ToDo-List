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
      name: 'Category 1',
      tasks: [
        { id: 1, name: 'Task1', done: false, description: '' },
        { id: 2, name: 'Task2', done: true, description: '' },
        { id: 3, name: 'Task3', done: false, description: '' },
      ],
      subCategories: [
        { id: 3, name: 'FirstSub', tasks: [], subCategories:[] },
      ],
    },
    {
      id: 2,
      name: 'Category 2',
      tasks: [
        { id: 1, name: 'Task2', done: false, description: '' },
        { id: 2, name: 'Task2', done: false, description: '' },
        { id: 3, name: 'Task2', done: false, description: '' },
        { id: 4, name: 'Task2', done: false, description: '' },
      ],
      subCategories: [
        { id: 4, name: 'SecondSub', tasks: [], subCategories:[] },
      ],
    },
  ]
}
