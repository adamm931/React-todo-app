export class AddTodoState {
    Input?: string;

    IsEmpty = this.Input === '';

    Clear = () => {
        this.Input = '';
    }

    SetInput = (value: string) => {
        this.Input = value;
    }
}