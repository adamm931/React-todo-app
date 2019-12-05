using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using TodoApi.Application.Common.Interfaces;
using TodoApi.Persistance;
using TodoApi.Persistance.Seed;

namespace TodoApi.Common
{
    public static class DependancyInjection
    {
        public static void AddReferences(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(Startup).Assembly);
            services.AddMediatR(typeof(Startup));
        }

        public static void AddApplicationDbContext(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IApplicationDbContextSeeder, ApplicationDbContextSeeder>();
            services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UseNpgsql(configuration.GetConnectionString("Todos"));
            });

            services.AddScoped<IApplicationDbContext>(provider => provider.GetService<ApplicationDbContext>());
            services.AddScoped<IApplicationDbContextInitializer>(provider => provider.GetService<ApplicationDbContext>());
        }
    }
}