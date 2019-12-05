using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TodoApi.Application.Commands;
using TodoApi.Application.ViewModels;
using TodoApi.Application.Queries;

namespace TodoApi.Controllers
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
    }
}