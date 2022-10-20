using AutoMapper;
using server.Data.Interfaces;
using server.Entities;
using server.Helpers;
using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Data.Repository
{
    public class UserRepository<T> : IRepository<T> where T : BaseEntity
    {
        private readonly AppDbContext _context;

        public UserRepository(AppDbContext context)

        {
            _context = context;
        }

        public int Add(T entity)
        {
            var result = _context.Set<T>().Add(entity);
            _context.SaveChanges();
            return result.Entity.Id;
        }

        public List<T> GetAll()
        {
            return _context.Set<T>().ToList();
        }

        public T GetById(int id)
        {
            var result = _context.Set<T>().FirstOrDefault(x => x.Id == id);

            if (result == null)
                return null;

            return result;
        }
    }
}
