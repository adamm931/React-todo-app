﻿using System.Threading.Tasks;
using Todo.Application.Common.Interfaces;
using Todo.Domain.Entities;

namespace Todo.Infrastructure.Seed
{
    public class ApplicationDbContextSeeder : IApplicationDbContextSeeder
    {
        public ApplicationDbContextSeeder(IApplicationDbContext context)
        {
            Context = context;
        }

        public IApplicationDbContext Context { get; }

        public async Task SeedAsync()
        {
            var todoItems = new[]
            {
                TodoItem.Create("Go to bath"),
                TodoItem.Create("Lay on bed and have a rest"),
                TodoItem.Create("Get ready for coffee with girlfriend")
            };

            await Context.Todos.AddRangeAsync(todoItems);
            await Context.SaveAsync();
        }
    }
}