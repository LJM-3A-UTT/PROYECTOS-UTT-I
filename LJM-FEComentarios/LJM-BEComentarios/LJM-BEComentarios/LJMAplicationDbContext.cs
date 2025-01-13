using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LJM_BEComentarios.Models;
using Microsoft.EntityFrameworkCore;

namespace LJM_BEComentarios
{
  public class LJMAplicationDbContext : DbContext
  {
    public DbSet<LJMComentario> LJMComentario { get; set; }
    public LJMAplicationDbContext(DbContextOptions<LJMAplicationDbContext> options) : base(options)
    {
      {

      }
    }
  }
}
