using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using TodoApi.Application.Common.Interfaces;
using TodoApi.Domain.Entities;
using TodoApi.Persistance.Seed;

namespace TodoApi.Persistance
{
    public class ApplicationDbContext : DbContext, IApplicationDbContext, IApplicationDbContextInitializer
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<TodoItem> Todos { get; set; }

        public async Task InitializeAsync()
        {
            await Database.EnsureCreatedAsync();
        }

        public async Task Save()
        {
            await base.SaveChangesAsync();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(typeof(Startup).Assembly);
        }
    }
}