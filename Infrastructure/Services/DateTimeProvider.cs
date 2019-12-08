using System;
using Todo.Domain;

namespace Todo.Infrastructure.Services
{
    public class DateTimeProvider : IDateTime
    {
        public DateTime Now => DateTime.UtcNow;
    }
}
