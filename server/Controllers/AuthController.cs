using BCrypt.Net;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Data.Interfaces;
using server.Dtos;
using server.Helpers;
using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Controllers
{
    [ApiController]
    [Route("api")]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userRepository;
        private readonly IJwtService _jwtService;

        public AuthController(IUserService userRepository,
                              IJwtService jwtService)
        {
            _userRepository = userRepository;
            _jwtService = jwtService;
        }

        [HttpPost("login")]
        public IActionResult Authenticate(AuthenticateRequest request)
        {
            var response = _userRepository.Authenticate(request);

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(response);
        }

        [HttpPost("register")]
        public IActionResult Register(UserModel userModel)
        {
            var response = _userRepository.Register(userModel);

            if (response == null)
                return BadRequest(new { message = "Bad register" });

            return Ok(response);
        }

        [Authorize]
        [HttpGet]
        public IActionResult GetAll() => Ok(_userRepository.GetAll());

    }
}
