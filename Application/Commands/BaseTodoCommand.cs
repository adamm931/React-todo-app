using MediatR;
using System;

namespace Todo.Application.Commands
{
    public class BaseTodoCommand : IRequest
    {
        public Guid Id { get; set; }
    }
}
