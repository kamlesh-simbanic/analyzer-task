export interface User {
  name: string;
  age: number;
  department: string;
  salary: number;
}

export interface ValidationError {
  [key: string]: string;
}
