using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;
using Todo.Application.Common.Interfaces;

namespace Todo.Application.Commands
{
    public class DeleteTodoCommand : IRequest
    {
        public Guid Id { get; set; }

        public class Handler : IRequestHandler<DeleteTodoCommand>
        {
            private readonly IApplicationDbContext _context;

            public Handler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(DeleteTodoCommand request, CancellationToken cancellationToken)
            {
                var todo = _context.Todos.Find(request.Id);

                _context.Todos.Remove(todo);

                await _context.SaveAsync();

                return Unit.Value;
            }
        }
    }
}