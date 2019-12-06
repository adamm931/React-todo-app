using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Todo.Domain.Entities;

namespace Todo.Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<TodoItem> Todos { get; set; }

        Task SaveAsync();
    }
}