using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LJM_BEComentarios.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LJM_BEComentarios.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class LJMComentarioController : ControllerBase
  {
    private readonly LJMAplicationDbContext _context;
    public LJMComentarioController(LJMAplicationDbContext context)
    {
      _context = context;
    }
    // GET: api/<LJMComentarioController>
    [HttpGet]
    public async Task<IActionResult> Get()
    {
      try
      {
        var LJMlistComentarios = await _context.LJMComentario.ToListAsync();
        return Ok(LJMlistComentarios);
      }
      catch (Exception ex)
      {

        return BadRequest(ex.Message);
      }
    }

    // GET api/<LJMComentarioController>/5
    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
      try
      {
        var LJMComentario = await _context.LJMComentario.FindAsync(id);
        if (LJMComentario == null)
        {
          return NotFound();
        }
        return Ok(LJMComentario);
      }
      catch (Exception ex)
      {

        return BadRequest(ex.Message);
      }
    }

    // POST api/<LJMComentarioController>
    [HttpPost]
    public async Task<IActionResult> Post([FromBody] LJMComentario ljmcomentario)
    {
      try
      {
        _context.Add(ljmcomentario);
        await _context.SaveChangesAsync();
        return Ok(ljmcomentario);
      }
      catch (Exception ex)
      {

        return BadRequest(ex.Message);
      }
    }

    // PUT api/<LJMComentarioController>/5
    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, [FromBody] LJMComentario ljmcomentario)
    {
      try
      {
        if (id != ljmcomentario.Id)
        {
          return BadRequest();
        }
        _context.Update(ljmcomentario);
        await _context.SaveChangesAsync();
        return Ok(new { ljmmessage="Comentario actualizado exitosamente!"});
      }
      catch (Exception ex)
      {

        return BadRequest(ex.Message);
      }
    }

    // DELETE api/<LJMComentarioController>/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
      try
      {
        var ljmcomentario = await _context.LJMComentario.FindAsync(id);
        if(ljmcomentario == null)
        {
          return NotFound();
        }
        _context.LJMComentario.Remove(ljmcomentario);
        await _context.SaveChangesAsync();
        return Ok(new { ljmmessage = "Comentario Eleminado Exitosamente" });
      }
      catch (Exception ex)
      {

        return BadRequest(ex.Message);
      }
    }
  }
}
