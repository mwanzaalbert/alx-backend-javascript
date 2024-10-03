/**
 * Represents a Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Creates a new @see {@link HolbertonCourse}.
   *
   * @param {String} name - The name of the course.
   * @param {Number} length - How long the course is (in months).
   * @param {String[]} students - The names of students in the course.
   */
  // Constructor with validation for name, length, and students
  constructor(name, length, students) {
    this._name = this._validateName(name);
    this._length = this._validateLength(length);
    this._students = this._validateStudents(students);
  }

  // Getter and setter for 'name'
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this._validateName(value);
  }

  // Getter and setter for 'length'
  get length() {
    return this._length;
  }

  set length(value) {
    this._length = this._validateLength(value);
  }

  // Getter and setter for 'students'
  get students() {
    return this._students;
  }

  set students(value) {
    this._students = this._validateStudents(value);
  }

  // Validation methods
  _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return name;
  }

  _validateLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return length;
  }

  _validateStudents(students) {
    if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return students;
  }
}
