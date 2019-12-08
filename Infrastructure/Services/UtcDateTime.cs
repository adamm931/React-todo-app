using System;
using Todo.Domain;

namespace Todo.Infrastructure.Services
{
    public class UtcDateTime : IDateTime
    {
        public DateTime Now => DateTime.UtcNow;
    }
}
