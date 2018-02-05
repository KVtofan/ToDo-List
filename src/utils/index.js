export const findCategoryById = (categories, desiredId) => {
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].id === desiredId) {
      return categories[i];
    }
  }
}

export const markTaskDone = (tasks, index) => {
  let taskToChange = tasks[index];
  tasks.splice(index, 1);
  taskToChange.done = !taskToChange.done;
  taskToChange.done ? tasks.push(taskToChange) : tasks.unshift(taskToChange);
  return tasks;
};

export const overwriteTask = (tasks, newTask) => {
  return tasks.map(task =>
    (task.id === newTask.id)
    ? newTask
    : task
  )
}

//  Calculate the percentage of completed jobs
export const calculatePercentageOfCompletedTasks = (categories) => {
  let CompletedCounter = 0;

  categories.forEach(category => {
    if (category.tasks.every(task => task.done)) {
      CompletedCounter++;
    }
  });

  console.log(CompletedCounter);
  return CompletedCounter / categories.length * 100;
}
