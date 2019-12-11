using AutoMapper;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using Todo.Application.Pipelines;

namespace Todo.Application.Extensions
{
    public static class DependancyInjection
    {
        public static void AddApplication(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(DependancyInjection).Assembly);

            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(LoggingBehavior<,>));
            services.AddMediatR(typeof(DependancyInjection).Assembly);
        }
    }
}