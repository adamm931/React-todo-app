using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace Todo.Web.Middlewares
{
    public class TodoExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<TodoExceptionMiddleware> _logger;

        public TodoExceptionMiddleware(
            RequestDelegate next,
            ILogger<TodoExceptionMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task Invoke(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext); 
            }
            catch (Exception exception)
            {
                _logger.LogError(exception.ToString());

                throw new Exception(string.Empty, exception);
            }
        }
    }

    public static class TodoExceptionMiddlewareExtensions
    {
        public static IApplicationBuilder UseTodoExceptionMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<TodoExceptionMiddleware>();
        }
    }
}
