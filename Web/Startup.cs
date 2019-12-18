using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Converters;
using Todo.Application.Commands.Validators;
using Todo.Application.Extensions;
using Todo.Infrastructure.Extensions;
using Todo.Web.Extensions;
using Todo.Web.Middlewares;

namespace Todo.Api
{
    public class Startup
    {
        public Startup(IHostEnvironment enviroment)
        {
            Configuration = enviroment.BuildConfiguration();
            Environment = enviroment;
        }

        public IConfiguration Configuration { get; }

        public IHostEnvironment Environment { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddApplication();
            services.AddInfrastructure(Configuration);

            services.ConfigureSwagger(Configuration);
            services.ConfigureMvc();

            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
        }

        public void Configure(
            IApplicationBuilder app,
            IWebHostEnvironment env,
            ILoggerFactory loggerFactory)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.InstallSwagger(Configuration);
            app.UseTodoExceptionMiddleware();
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.InstallSpa();

            loggerFactory.AddFile("Logs/TodoApp-{Date}.txt");
        }
    }
}