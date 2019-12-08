using AutoMapper;
using Todo.Application.ViewModels;
using Todo.Domain.Entities;

namespace Todo.Application.Profiles
{
    public class TodoItemProfile : Profile
    {
        public TodoItemProfile()
            => CreateMap<TodoItem, TodoItemVm>();
    }
}