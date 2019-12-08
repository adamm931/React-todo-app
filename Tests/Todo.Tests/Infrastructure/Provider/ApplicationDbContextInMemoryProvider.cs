using Microsoft.EntityFrameworkCore;
using Todo.Application.Common.Interfaces;
using Todo.Infrastructure;
using Todo.Infrastructure.Seed;
using Todo.Tests.Mocks;

namespace Todo.Tests.Infrastructure.Provider
{
    public class ApplicationDbContextInMemoryProvider
    {
        public static IApplicationDbContext GetInMemoryContext()
        {
            var optionsbuilder = new DbContextOptionsBuilder<ApplicationDbContext>();
            optionsbuilder.UseInMemoryDatabase("TodosInMemory");

            var context = new ApplicationDbContext(optionsbuilder.Options, new MockedDateTimeProvider());
            var seeder = new ApplicationDbContextSeeder(context);

            seeder.SeedAsync().Wait();

            return context;
        }
    }
}
