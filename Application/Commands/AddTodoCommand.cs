using AutoMapper;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Todo.Application.Common.Interfaces;
using Todo.Application.ViewModels;
using Todo.Domain.Entities;

namespace Todo.Application.Commands
{
    public class AddTodoCommand : IRequest<TodoItemVm>
    {
        public string Name { get; set; }

        public class Handler : IRequestHandler<AddTodoCommand, TodoItemVm>
        {
            private readonly IApplicationDbContext _context;
            private readonly IMapper _mapper;

            public Handler(
                IApplicationDbContext context,
                IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<TodoItemVm> Handle(AddTodoCommand request, CancellationToken cancellationToken)
            {
                var todoItem = TodoItem.Create(request.Name);

                _context.Todos.Add(todoItem);

                await _context.SaveAsync();

                return _mapper.Map<TodoItemVm>(todoItem);
            }
        }
    }
}