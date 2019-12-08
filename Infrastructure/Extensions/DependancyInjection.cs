using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Todo.Application.Common.Interfaces;
using Todo.Domain;
using Todo.Infrastructure.Seed;
using Todo.Infrastructure.Services;

namespace Todo.Infrastructure.Extensions
{
    public static class DependancyInjection
    {
        public static void AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IApplicationDbContextSeeder, ApplicationDbContextSeeder>();
            services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UseNpgsql(configuration.GetConnectionString("Todos"));
            });

            services.AddScoped<IDateTime, DateTimeProvider>();
            services.AddScoped<IApplicationDbContext>(provider => provider.GetService<ApplicationDbContext>());
            services.AddScoped<IDatabaseCreator>(provider => provider.GetService<ApplicationDbContext>());
        }
    }
}