using AutoMapper;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace Todo.Application.Extensions
{
    public static class DependancyInjection
    {
        public static void AddApplication(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(DependancyInjection).Assembly);
            services.AddMediatR(typeof(DependancyInjection).Assembly);
        }
    }
}