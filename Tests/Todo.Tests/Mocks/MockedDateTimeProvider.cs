using System;
using Todo.Domain;

namespace Todo.Tests.Mocks
{
    public class MockedDateTimeProvider : IDateTime
    {
        public DateTime Now => new DateTime(2019, 12, 8);
    }
}
