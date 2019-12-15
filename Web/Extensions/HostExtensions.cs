using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Todo.Infrastructure.Seed;

namespace Todo.Api.Extensions
{
    public static class HostExtensions
    {
        public static IHost Setup(this IHost host)
        {
            using var scope = host.Services.CreateScope();

            var databaseCreated = scope
                .ServiceProvider
                .GetRequiredService<IDatabaseCreator>()
                .EnsureCreatedAsync()
                .Result;

            if (databaseCreated)
            {
                scope
                    .ServiceProvider
                    .GetRequiredService<IApplicationDbContextSeeder>()
                    .SeedAsync()
                    .Wait();
            }

            return host;
        }
    }
}