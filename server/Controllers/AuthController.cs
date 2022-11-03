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
        public IActionResult Login(AuthenticateRequest request)
        {
            var response = _userRepository.Authenticate(request);

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(response);
        }

        [HttpPost("register")]
        public IActionResult Register(UserModel userModel)
        {
            _userRepository.Register(userModel);
            return Ok(new { message = "Registration successfull" });
        }

        [Authorize]
        [HttpGet("getall")]
        public IActionResult GetAll() => Ok(_userRepository.GetAll());

        [HttpGet("user")]
        public IActionResult User(string token)
        {
            try
            {
                var validatedToken = _jwtService.Verify(token);

                int userId = int.Parse(validatedToken.Claims.First(c => c.Type == "id").Value);

                var user = _userRepository.GetById(userId);

                return Ok(user);
            }
            catch (Exception)
            {
                return Unauthorized();
            }
        }

        // [HttpPost("logout")]
        // public IActionResult Logout()
        // {
        //     Response.Cookies.Delete("jwt");

        //     return Ok(new
        //     {
        //         message = "success"
        //     });
        // }

    }
}
