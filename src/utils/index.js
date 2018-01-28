
//  More Information about bfs algorithm:
//  https://en.wikipedia.org/wiki/Breadth-first_search
export const bfs = (categories, desiredId) => {
  let queue = categories.slice();

  while(queue.length > 0){
    let tempNode = queue.shift();

    if (tempNode.id === desiredId) {
      return tempNode;
    }

    if (!tempNode.subCategories.length) {
      continue;
    }

    queue = queue.concat(tempNode.subCategories);
  }
}
