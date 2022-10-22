using System.Collections.Generic;
using server.Entities;
using server.Models;

namespace server.Data.Interfaces
{
    public interface IUserService
    {
        AuthenticateResponse Authenticate(AuthenticateRequest requestModel);
        void Register(UserModel userModel);
        IEnumerable<User> GetAll();
        User GetById(int id);
    }
}