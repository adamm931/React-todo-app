using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Todo.Web.Common;
using Web.Extensions;

namespace Todo.Web.Extensions
{
    public static class ApplicationBuilderExtensions
    {
        public static void InstallSwagger(this IApplicationBuilder application, IConfiguration configuration)
        {
            var swaggerOptions = configuration.GetSwaggerOptions();

            application.UseSwagger();

            application.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint(swaggerOptions.Url, swaggerOptions.AppName);
            });
        }

        public static void InstallSpa(this IApplicationBuilder application)
        {
            application.UseStaticFiles();
            application.UseSpaStaticFiles();
            application.UseSpa(spa =>
            {
                spa.Options.SourcePath = "Clientapp";
                spa.UseReactDevelopmentServer(npmScript: "start");
            });
        }

    }
}
