using Microsoft.Extensions.Configuration;
using Todo.Web.Common;
using Web.Options;

namespace Web.Extensions
{
    public static class ConfigurationExtensions
    {
        public static SwaggerOptions GetSwaggerOptions(this IConfiguration configuration)
        {
            var options = new SwaggerOptions();

            configuration
                .GetSection(Constants.ConfigurationSections.Swagger)
                .Bind(options);

            return options;
        }
    }
}