using Microsoft.EntityFrameworkCore;
using server.Entities;
using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        { }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserModel>(entitty =>
            {
                //уникаольное имя
                entitty.HasIndex(e => e.Name).IsUnique();
            });
        }
    }
}
