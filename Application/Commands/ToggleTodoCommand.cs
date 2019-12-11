using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Todo.Application.Common.Interfaces;

namespace Todo.Application.Commands
{
    public class ToggleTodoCommand : BaseTodoCommand
    {
        public class Handler : IRequestHandler<ToggleTodoCommand>
        {
            private readonly IApplicationDbContext _context;

            public Handler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(ToggleTodoCommand request, CancellationToken cancellationToken)
            {
                _context.Todos.Find(request.Id).Toogle();

                await _context.SaveAsync();

                return Unit.Value;
            }
        }
    }
}