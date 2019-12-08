using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Todo.Application.ViewModels
{
    public class TodoItemVm
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public bool Completed { get; set; }
    }
}