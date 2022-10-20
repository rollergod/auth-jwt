using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using server.Data.Interfaces;
using server.Entities;
using server.Helpers;
using server.Models;

namespace server.Data.Repository
{
    public class UserService : IUserService
    {
        private IRepository<User> _userRepository;
        private IJwtService _jwtService;
        private IMapper _mapper;

        public UserService(IJwtService jwtService,
                           IMapper mapper,
                           IRepository<User> userRepository)
        {
            _jwtService = jwtService;
            _mapper = mapper;
            _userRepository = userRepository;
        }
        public AuthenticateResponse Authenticate(AuthenticateRequest requestModel)
        {
            var user = _userRepository
                .GetAll()
                .FirstOrDefault(x => x.Name == requestModel.Name && x.Password == requestModel.Password);

            if (user == null)
                return null;

            var token = _jwtService.Generate(user);

            return new AuthenticateResponse(user, token);
        }

        public IEnumerable<User> GetAll()
        {
            return _userRepository.GetAll();
        }

        public User GetById(int id)
        {
            return _userRepository.GetById(id);
        }

        public AuthenticateResponse Register(UserModel userModel)
        {
            var user = _mapper.Map<User>(userModel);

            var addedUser = _userRepository.Add(user);

            var response = Authenticate(new AuthenticateRequest
            {
                Name = user.Name,
                Password = user.Password
            });

            return response;
        }
    }
}