/**
 * @jest-environment jsdom
 */
import TaskList from './taskList.js';

document.body.innerHTML = '<ul class=\'listContainer\'></ul>';

// Tests for Adding Tasks
describe('Test for Adding Tasks', () => {
  test('Add task, array not to be null', () => {
    const taskList = new TaskList();
    taskList.add('FirstTask', false, 0);

    expect(taskList.length).not.toBeNull();
  });

  test('Add task, return description property', () => {
    const taskList = new TaskList();
    taskList.add('Microverse', false, 0);

    expect(taskList.listArray[0].description).toEqual('Microverse');
  });

  test('Add task, return completed property', () => {
    const taskList = new TaskList();
    taskList.add('MyFirstTask', true, 0);

    expect(taskList.listArray[0].completed).toEqual(true);
  });

  test('Add task, return index property', () => {
    const taskList = new TaskList();
    taskList.add('MyFirstTask', false, 0);
    taskList.add('MySecondTask', false, 1);
    taskList.add('MyThirdTask', false, 2);

    expect(taskList.listArray[1].index).toEqual(1);
  });

  test('Add task', () => {
    const taskList = new TaskList();
    taskList.add('Task1', false, 0);

    expect(taskList.listArray[0].description).toEqual('Task1');
  });

  test('Add multiple tasks, return description property', () => {
    const taskList = new TaskList();
    taskList.add('ThisIsTask1', false, 0);
    taskList.add('ThisIsTask2', false, 1);
    taskList.add('ThisIsTask3', false, 2);
    taskList.add('ThisIsTask4', false, 3);
    taskList.add('ThisIsTask5', false, 4);

    expect(taskList.listArray[2].description).toEqual('ThisIsTask3');
  });
});

// Tests for Removing Tasks
describe('Test for Removing Tasks', () => {
  test('Remove task, array to be null', () => {
    const taskList = new TaskList();
    taskList.add('FirstTask', false, 0);
    taskList.remove(0);

    expect(taskList.length).toBeUndefined();
  });

  test('Remove task, from a multiple added tasks, return length', () => {
    const taskList = new TaskList();
    taskList.add('FirstTask', false, 0);
    taskList.add('SecondTask', false, 1);
    taskList.add('ThirdTask', false, 2);
    taskList.remove(1);

    expect(taskList.listArray).toHaveLength(2);
  });

  test('Remove task, from a multiple added tasks, return description property', () => {
    const taskList = new TaskList();
    taskList.add('FirstTask', false, 0);
    taskList.add('SecondTask', false, 1);
    taskList.add('ThirdTask', false, 2);
    taskList.remove(1);

    expect(taskList.listArray[1].description).toEqual('ThirdTask');
  });

  test('Remove task, from a multiple added tasks, return description property', () => {
    const taskList = new TaskList();
    taskList.add('FirstTask', false, 0);
    taskList.add('SecondTask', false, 1);
    taskList.add('ThirdTask', false, 2);
    taskList.remove(1);
    taskList.display();
    taskList.remove(0);

    expect(taskList.listArray[0].description).toEqual('ThirdTask');
  });

  test('Remove task, from a multiple added tasks, return description property', () => {
    const taskList = new TaskList();
    taskList.add('FirstTask', false, 0);
    taskList.add('SecondTask', false, 1);
    taskList.add('ThirdTask', false, 2);
    taskList.remove(1);
    taskList.display();
    taskList.remove(0);
    taskList.add('FourthTask', false, 1);
    taskList.add('FifthTask', false, 2);
    taskList.add('SixthTask', false, 3);

    expect(taskList.listArray[2].description).toEqual('FifthTask');
  });

  test('Remove task, from a multiple added tasks, return description property', () => {
    const taskList = new TaskList();
    taskList.add('FirstTask', false, 0);
    taskList.add('SecondTask', false, 1);
    taskList.add('ThirdTask', false, 2);
    taskList.remove(1);
    taskList.display();
    taskList.remove(0);
    taskList.add('FourthTask', false, 1);
    taskList.add('FifthTask', false, 2);
    taskList.add('SixthTask', false, 3);
    taskList.remove(3);

    expect(taskList.listArray).toHaveLength(3);
  });

  test('Remove multiple tasks, return length', () => {
    const taskList = new TaskList();
    taskList.add('Mavericks', false, 0);
    taskList.add('DeLeon', false, 1);
    taskList.add('Balitaan', false, 2);
    taskList.remove(2);
    taskList.remove(1);
    taskList.remove(0);
    taskList.add('Mavericks', false, 0);

    expect(taskList.listArray).toHaveLength(1);
  });

  test('Remove multiple tasks, return description property', () => {
    const taskList = new TaskList();
    taskList.add('Mavericks', false, 0);
    taskList.add('DeLeon', false, 1);
    taskList.add('Balitaan', false, 2);
    taskList.remove(2);
    taskList.remove(1);
    taskList.remove(0);
    taskList.add('Mavericks', false, 0);
    taskList.add('Balitaan', false, 1);

    expect(taskList.listArray[0].description).toEqual('Mavericks');
  });
});

// Tests for Editing Tasks Description Property
describe('Test for Editing Tasks Description', () => {
  test('Edit task, return new description property', () => {
    const taskList = new TaskList();
    taskList.add('FirstTask', false, 0);
    taskList.remove(0);
    taskList.add('SecondTask', false, 0);
    taskList.add('ThirdTask', false, 1);
    taskList.display();

    taskList.listArray[1].description = 'HelloWorld';
    expect(taskList.listArray[1].description).toMatch('HelloWorld');
  });

  test('Edit task, return new description property', () => {
    const taskList = new TaskList();
    taskList.add('FirstTask', false, 0);
    taskList.remove(0);
    taskList.add('SecondTask', false, 0);
    taskList.add('ThirdTask', false, 1);
    taskList.display();

    taskList.listArray[1].textContent = 'Developer';
    expect(taskList.listArray[1].textContent).toMatch('Developer');
  });

  test('Edit task, return length', () => {
    const taskList = new TaskList();
    const listContainer = document.querySelectorAll('.listContainer li');
    taskList.add('FirstTask', false, 0);
    taskList.remove(0);
    taskList.add('SecondTask', false, 0);
    taskList.display();
    taskList.add('ThirdTask', false, 1);
    taskList.display();

    expect(listContainer).toHaveLength(2);
  });

  test('Edit task, return new index property', () => {
    const taskList = new TaskList();
    taskList.add('FirstTask', false, 0);
    taskList.remove(0);
    taskList.add('SecondTask', false, 0);
    taskList.add('ThirdTask', false, 1);
    taskList.display();
    taskList.listArray[0].index = 5;
    expect(taskList.listArray[0].index).toEqual(5);
  });

  test('Edit task, return new index property', () => {
    const taskList = new TaskList();
    taskList.add('FirstTask', false, 0);
    taskList.remove(0);
    taskList.add('SecondTask', false, 0);
    taskList.add('ThirdTask', false, 1);
    taskList.display();
    taskList.listArray[1].index = 5;
    expect(taskList.listArray[1].index).toEqual(5);
  });

  test('Edit task, return new description property', () => {
    const taskList = new TaskList();
    taskList.add('FirstTask', false, 0);
    taskList.remove(0);
    taskList.add('SecondTask', false, 0);
    taskList.add('ThirdTask', false, 1);
    taskList.remove(1);
    taskList.add('FourthTask', false, 1);
    taskList.add('FifthTask', false, 2);
    taskList.display();

    taskList.listArray[1].textContent = 'FourthTaskChangeToMyFourth';
    expect(taskList.listArray[1].textContent).toMatch('FourthTaskChangeToMyFourth');
  });
});

// Tests for Updating Tasks Completed Property
describe('Test for Updating Tasks Status', () => {
  test('Update task, return new completed property', () => {
    const taskList = new TaskList();
    taskList.add('FirstTask', false, 0);
    taskList.remove(0);
    taskList.add('SecondTask', false, 0);
    taskList.add('ThirdTask', true, 1);
    taskList.display();

    taskList.listArray[0].completed = true;
    expect(taskList.listArray[0].completed).toBe(true);
  });

  test('Update task, return new completed property', () => {
    const taskList = new TaskList();
    taskList.add('FirstTask', false, 0);
    taskList.remove(0);
    taskList.add('SecondTask', false, 0);
    taskList.add('ThirdTask', true, 1);
    taskList.add('FourthTask', false, 2);
    taskList.display();

    taskList.listArray[1].completed = false;
    expect(taskList.listArray[1].completed).toBe(false);
  });

  test('Update task, return new completed property', () => {
    const taskList = new TaskList();
    taskList.add('FirstTask', false, 0);
    taskList.remove(0);
    taskList.add('SecondTask', false, 0);
    taskList.add('ThirdTask', true, 1);
    taskList.add('FourthTask', false, 2);
    taskList.display();
    taskList.remove(0);
    taskList.remove(1);
    taskList.remove(2);
    taskList.add('My Only Task', false, 0);
    taskList.display();

    taskList.listArray[0].completed = true;
    expect(taskList.listArray[0].completed).toBe(true);
  });

  test('Update task, return new completed property', () => {
    const taskList = new TaskList();
    taskList.add('FirstTask', false, 0);
    taskList.remove(0);
    taskList.add('SecondTask', false, 0);
    taskList.add('ThirdTask', true, 1);
    taskList.add('FourthTask', false, 2);
    taskList.display();
    taskList.remove(0);
    taskList.remove(1);
    taskList.remove(2);
    taskList.add('My First Task', false, 0);
    taskList.add('My Second Task', true, 0);
    taskList.display();

    taskList.listArray[1].completed = false;
    expect(taskList.listArray[1].completed).toBe(false);
  });
});

// Tests for Removing All Completed Tasks
describe('Test for Removing All Tasks with Complete Status', () => {
  test('Remove tasks with completed property equal to true', () => {
    const taskList = new TaskList();
    taskList.add('FirstTask', false, 0);
    taskList.remove(0);
    taskList.add('SecondTask', false, 0);
    taskList.add('ThirdTask', true, 1);
    taskList.display();
    taskList.clearAllCompleted();

    expect(taskList.listArray.length).toBe(1);
  });

  test('Remove tasks with completed property equal to true', () => {
    const taskList = new TaskList();
    taskList.add('FirstTask', true, 0);
    taskList.add('SecondTask', true, 1);
    taskList.add('ThirdTask', true, 2);
    taskList.clearAllCompleted();

    expect(taskList.listArray.length).toBe(0);
  });

  test('Remove tasks with completed property equal to true', () => {
    const taskList = new TaskList();
    taskList.add('FirstTask', false, 0);
    taskList.add('SecondTask', false, 1);
    taskList.add('ThirdTask', false, 2);
    taskList.clearAllCompleted();

    expect(taskList.listArray.length).toBe(3);
  });

  test('Remove tasks with completed property equal to true', () => {
    const taskList = new TaskList();
    taskList.add('FirstTask', false, 0);
    taskList.remove(0);
    taskList.add('SecondTask', false, 1);
    taskList.add('ThirdTask', false, 2);
    taskList.remove(0);
    taskList.remove(0);
    taskList.add('My 1st completed task', true, 0);
    taskList.add('My 2nd completed task', true, 1);
    taskList.clearAllCompleted();
    expect(taskList.listArray.length).toBe(0);
  });

  test('Remove tasks with completed property equal to true', () => {
    const taskList = new TaskList();
    taskList.add('FirstTask', false, 0);
    taskList.add('SecondTask', false, 0);
    taskList.listArray[0].completed = true;
    taskList.clearAllCompleted();
    expect(taskList.listArray.length).toBe(1);
  });

  test('Remove tasks with completed property equal to true', () => {
    const taskList = new TaskList();
    taskList.add('FirstTask', true, 0);
    taskList.clearAllCompleted();
    taskList.add('SecondTask', false, 0);
    taskList.listArray[0].completed = true;
    taskList.clearAllCompleted();
    expect(taskList.listArray.length).toBe(0);
  });
});