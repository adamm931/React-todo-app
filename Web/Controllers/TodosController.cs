using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Collections;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using Todo.Application.Commands;
using Todo.Application.Queries;
using Todo.Application.ViewModels;
using Todo.Web.Attributes;

namespace Todo.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodosController : ControllerBase
    {
        private readonly IMediator _mediator;

        public TodosController(IMediator mediator) => _mediator = mediator;

        [HttpPost]
        [Route("filter")]
        [SwaggerReponseTypeAttribute(typeof(IEnumerable<TodoItemVm>))]
        public async Task<IActionResult> Filter(FilterTodosRequest request)
            => Ok((await _mediator.Send(request)));

        [HttpPost]
        [SwaggerReponseTypeAttribute(typeof(TodoItemVm))]
        public async Task<IActionResult> Add(AddTodoCommand command)
            => Ok((await _mediator.Send(command)));

        [HttpPost]
        [Route("toggle")]
        [SwaggerReponseTypeAttribute]
        public async Task<IActionResult> Toggle(ToggleTodoCommand command)
            => Ok((await _mediator.Send(command)));

        [HttpDelete]
        [SwaggerReponseTypeAttribute]
        public async Task<IActionResult> Delete(DeleteTodoCommand command)
            => Ok((await _mediator.Send(command)));
    }
}