using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Todo.Application.Common.Interfaces;
using Todo.Domain.Entities;
using Todo.Infrastructure.Seed;

namespace Todo.Infrastructure
{
    public class ApplicationDbContext : DbContext, IApplicationDbContext, IDatabaseCreator
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<TodoItem> Todos { get; set; }

        public async Task<bool> EnsureCreatedAsync()
        {
            return await Database.EnsureCreatedAsync();
        }

        public async Task SaveAsync()
        {
            await base.SaveChangesAsync();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
        }
    }
}