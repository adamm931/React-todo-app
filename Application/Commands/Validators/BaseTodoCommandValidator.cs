using FluentValidation;
using System.Linq;
using Todo.Application.Common.Interfaces;
using Todo.Application.Common.Resources;

namespace Todo.Application.Commands.Validators
{
    public class BaseTodoCommandValidator<TCommand> : AbstractValidator<TCommand>
        where TCommand : BaseTodoCommand
    {
        private readonly IApplicationDbContext _context;

        public BaseTodoCommandValidator(IApplicationDbContext context)
        {
            _context = context;
        }

        public BaseTodoCommandValidator()
        {
            RuleFor(model => model.Id)
                .NotEmpty()
                .WithMessage(ValidationMessages.TodoNotEmptyId);

            RuleFor(model => model.Id)
                .Must(id => _context.Todos.Any(todo => todo.Id == id))
                .WithMessage(id => string.Format(ValidationMessages.TodoNotFound, id));
        }
    }
}
