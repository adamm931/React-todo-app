using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;

namespace Todo.Web.Extensions
{
    public static class HostingEnviromentExtensions
    {
        public static IConfiguration BuildConfiguration(this IHostEnvironment environment)
        {
            return new ConfigurationBuilder()
                .SetBasePath(environment.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{environment.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables()
                .Build();
        }
    }
}
