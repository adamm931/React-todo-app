﻿using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Todo.Application.Commands;
using Todo.Application.Queries;

namespace Todo.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodosController : ControllerBase
    {
        private readonly IMediator _mediator;

        public TodosController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> Get(GetTodosQuery query)
            => Ok((await _mediator.Send(query)));

        [HttpPost]
        public async Task<IActionResult> Add(AddTodoCommand command)
            => Ok((await _mediator.Send(command)));

        [HttpPost]
        [Route("toggle")]
        public async Task<IActionResult> Toggle(ToggleTodoCommand command)
            => Ok((await _mediator.Send(command)));

        [HttpDelete]
        public async Task<IActionResult> Delete(DeleteTodoCommand command)
            => Ok((await _mediator.Send(command)));
    }
}