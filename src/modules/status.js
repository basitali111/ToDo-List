export default class Status {
  constructor() {
    this.completed = false;
  }

    checked = (element) => {
      element.completed = true;
    }

    unchecked = (element) => {
      element.completed = false;
    }
}