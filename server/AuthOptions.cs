using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace server
{
    public class AuthOptions
    {
        public static string Issuer { get; set; } = "Issuer";
        public static string Audience { get; set; } = "Audience";
        public static string Secret_Key { get; set; } = "mysupersecret_secretkey!123";
    }
}