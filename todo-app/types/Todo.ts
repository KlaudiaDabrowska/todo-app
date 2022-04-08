export interface IListTodo {
  listOfToDos: ITodo[];
}

export interface ITodo {
  id: number;
  description: string;
  isDone: boolean;
}
