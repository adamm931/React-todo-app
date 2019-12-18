using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using Swashbuckle.AspNetCore.Swagger;
using Todo.Application.Commands.Validators;
using Web.Extensions;

namespace Todo.Web.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static void ConfigureSwagger(this IServiceCollection services, IConfiguration configuration)
        {
            var swaggerOptions = configuration.GetSwaggerOptions();

            services
                .AddSwaggerGen(swagger =>
                {
                    swagger.DescribeAllParametersInCamelCase();
                    swagger.SwaggerDoc(swaggerOptions.VersionName, new OpenApiInfo
                    {
                        Title = swaggerOptions.AppName,
                        Version = swaggerOptions.VersionName
                    });
                });
        }

        public static void ConfigureMvc(this IServiceCollection services)
        {
            services
                .AddMvc(options => options.EnableEndpointRouting = false)
                .AddNewtonsoftJson(options =>
                {
                    options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                    options.SerializerSettings.Converters.Add(new StringEnumConverter());
                })
                .SetCompatibilityVersion(CompatibilityVersion.Version_3_0)
                .AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<AddTodoCommandValidator>());
        }
    }
}
