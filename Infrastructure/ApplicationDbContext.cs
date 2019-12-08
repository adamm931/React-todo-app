using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Todo.Application.Common.Interfaces;
using Todo.Domain;
using Todo.Domain.Common;
using Todo.Domain.Entities;
using Todo.Infrastructure.Seed;

namespace Todo.Infrastructure
{
    public class ApplicationDbContext : DbContext, IApplicationDbContext, IDatabaseCreator
    {
        private readonly IDateTime _dateTime;

        public ApplicationDbContext(
            DbContextOptions options,
            IDateTime dateTime)
            : base(options)
        {
            _dateTime = dateTime;
        }

        public DbSet<TodoItem> Todos { get; set; }

        public async Task<bool> EnsureCreatedAsync()
        {
            return await Database.EnsureCreatedAsync();
        }

        public async Task SaveAsync()
        {
            var changes = ChangeTracker.Entries<AuditableEntity>();

            foreach (var entry in changes)
            {
                if (entry.State == EntityState.Added)
                {
                    entry.Entity.SetCreatedOn(_dateTime.Now);
                }

                if (entry.State == EntityState.Modified)
                {
                    entry.Entity.SetModifiedOn(_dateTime.Now);
                }

            }
            await base.SaveChangesAsync();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
        }
    }
}