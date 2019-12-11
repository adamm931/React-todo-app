using Todo.Application.Common.Interfaces;

namespace Todo.Application.Commands.Validators
{
    public class DeleteTodoCommandValidator : BaseTodoCommandValidator<DeleteTodoCommand>
    {
        public DeleteTodoCommandValidator(IApplicationDbContext context) : base(context)
        { }
    }
}
