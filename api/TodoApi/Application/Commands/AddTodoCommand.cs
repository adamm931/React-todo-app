using MediatR;
using System.Threading;
using System.Threading.Tasks;
using TodoApi.Application.Common.Interfaces;
using TodoApi.Domain.Entities;

namespace TodoApi.Application.Commands
{
    public class AddTodoCommand : IRequest
    {
        public string Name { get; set; }

        public class Handler : IRequestHandler<AddTodoCommand>
        {
            private readonly IApplicationDbContext _context;

            public Handler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(AddTodoCommand request, CancellationToken cancellationToken)
            {
                var todoItem = TodoItem.Create(request.Name);

                _context.Todos.Add(todoItem);

                await _context.Save();

                return Unit.Value;
            }
        }
    }
}