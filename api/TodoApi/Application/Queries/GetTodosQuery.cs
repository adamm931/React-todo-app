using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TodoApi.Application.Common.Interfaces;
using TodoApi.Application.ViewModels;
using TodoApi.Domain.Common;
using TodoApi.Domain.Entities;

namespace TodoApi.Application.Queries
{
    public class GetTodosQuery : IRequest<IEnumerable<TodoItemVm>>
    {
        public FilterType FilterType { get; set; }

        public class Handler : IRequestHandler<GetTodosQuery, IEnumerable<TodoItemVm>>
        {
            private readonly IMapper _mapper;
            private readonly IApplicationDbContext _context;

            public Handler(IMapper mapper, IApplicationDbContext context)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<IEnumerable<TodoItemVm>> Handle(GetTodosQuery request, CancellationToken cancellationToken)
            {
                var items = await GetItemsByFilter(request.FilterType).ToListAsync();
                var itemsVm = _mapper.Map<IEnumerable<TodoItemVm>>(items);

                return itemsVm;
            }

            private IQueryable<TodoItem> GetItemsByFilter(FilterType filterType)
            {
                var todos = _context.Todos;

                return filterType switch
                {
                    FilterType.Completed => todos.Where(todo => todo.Completed),
                    FilterType.Uncompeted => todos.Where(todo => !todo.Completed),
                    FilterType.All => todos,
                    _ => todos,
                };
            }
        }
    }
}