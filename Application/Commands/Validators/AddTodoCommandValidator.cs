using FluentValidation;
using Todo.Application.Common.Resources;
using Todo.Common;

namespace Todo.Application.Commands.Validators
{
    public class AddTodoCommandValidator : AbstractValidator<AddTodoCommand>
    {
        const int MaxLenght = 100;

        public AddTodoCommandValidator()
        {
            RuleFor(model => model.Name)
                .NotEmpty()
                .WithMessage(ValidationMessages.TodoNotEmptyName);

            RuleFor(model => model.Name)
                .MaximumLength(MaxLenght)
                .WithMessage(ValidationMessages.TodoNameMustBeMaximumLenghtOf.Format(MaxLenght));
        }
    }
}
