using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using TodoApi.Persistance.Seed;

namespace TodoApi.Common
{
    public static class HostSetup
    {
        public static IHost Setup(this IHost host)
        {
            using var scope = host.Services.CreateScope();

            var serviceProvider = scope.ServiceProvider;
            var seeder = serviceProvider.GetRequiredService<IApplicationDbContextSeeder>();
            var initializer = serviceProvider.GetRequiredService<IApplicationDbContextInitializer>();

            initializer.InitializeAsync().Wait();
            seeder.SeedAsync().Wait();

            return host;
        }
    }
}