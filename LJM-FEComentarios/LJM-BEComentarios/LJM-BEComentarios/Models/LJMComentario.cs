using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LJM_BEComentarios.Models
{
  public class LJMComentario
  {
    public int Id { get; set; }
    [Required]
    public string LJMTitulo { get; set; }
    [Required]
    public string LJMCreador { get; set; }
    [Required]
    public string LJMTexto { get; set; }
    [Required]
    public DateTime LJMFecha { get; set; }

  }
}
