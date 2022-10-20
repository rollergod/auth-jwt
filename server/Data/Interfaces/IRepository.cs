using server.Entities;
using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Data.Interfaces
{
    public interface IRepository<T> where T : BaseEntity
    {
        int Add(T entity);
        List<T> GetAll();
        T GetById(int id);
    }
}
