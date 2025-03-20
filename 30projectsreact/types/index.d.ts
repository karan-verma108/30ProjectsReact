export interface NavbarDataType {
  id: number;
  name: string;
  label: string;
  href: string;
}

export interface InitialStateType {
  todoItem: string;
  todoItems: string[];
  editTodoId: null | number;
  editedTodoValue: string;
}

export type TodoAction =
  | { type: 'ADD'; payload: string }
  | { type: 'UPDATE_TODO_ITEM'; payload: string }
  | { type: 'DELETE'; payload: number }
  | { type: 'EDIT'; payload: number }
  | { type: 'HANDLE_EDITED_TODO_ITEM'; payload: string }
  | { type: 'SAVE'; payload: number };
