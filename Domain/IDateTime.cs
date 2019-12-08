using System;

namespace Todo.Domain
{
    public interface IDateTime
    {
        DateTime Now { get; }
    }
}
