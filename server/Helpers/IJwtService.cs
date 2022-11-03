using System.IdentityModel.Tokens.Jwt;
using server.Entities;
using server.Models;

namespace server.Helpers
{
    public interface IJwtService
    {
        public string Generate(User user);
        public JwtSecurityToken Verify(string token);
    }
}
