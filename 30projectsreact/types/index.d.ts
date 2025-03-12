export interface NavbarDataType {
  id: number;
  name: string;
  label: string;
  href: string;
}

export interface InitialStateType {
  todoItem: string;
  todoItems: string[];
}

export type TodoAction =
  | { type: 'ADD'; payload: string }
  | { type: 'UPDATE_TODO_ITEM'; payload: string };
