using Todo.Application.Common.Interfaces;

namespace Todo.Application.Commands.Validators
{
    public class ToggleTodoCommandValidator : BaseTodoCommandValidator<ToggleTodoCommand>
    {
        public ToggleTodoCommandValidator(IApplicationDbContext context) : base(context)
        { }
    }
}
