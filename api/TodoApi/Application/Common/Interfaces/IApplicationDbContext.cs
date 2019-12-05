using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using TodoApi.Domain.Entities;

namespace TodoApi.Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<TodoItem> Todos { get; set; }

        Task Save();
    }
}