using System;
using System.Net;
using Microsoft.AspNetCore.Mvc;

namespace Todo.Web.Attributes
{
    public class SwaggerReponseTypeAttribute : ProducesResponseTypeAttribute
    {
        public SwaggerReponseTypeAttribute(HttpStatusCode statusCode = HttpStatusCode.OK)
            : base((int)statusCode)
        { }

        public SwaggerReponseTypeAttribute(Type type, HttpStatusCode statusCode = HttpStatusCode.OK)
            : base(type, (int)statusCode)
        { }
    }
}
