using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using backend.Models;

namespace backend.Controllers
{
    [Route("api/comments")]
    [ApiController]
    public class CommentController : Controller
    {
        private readonly ApiContext _context;

        public CommentController(ApiContext context)
        {
            _context = context;
        }

        // GET: api/comments/
        // Listar todos os comments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Comment>>> Get()
        {
            return await _context.Comments.ToListAsync();
        }

        // GET: api/comments/{id}
        // Pegar comment por ID
        [HttpGet("id")]
        public async Task<ActionResult<Comment>> Get(long id)
        {
            var comment = await _context.Comments.FindAsync(id);

            if (comment == null)
            {
                return NotFound();
            }

            return comment;
        }

        // POST: api/comments
        // Criar novo comment
        [HttpPost]
        public async Task<ActionResult<Comment>> Post(Comment comment)
        {
            await _context.Comments.AddAsync(comment);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = comment.Id }, comment);
        }

        // PUT: api/comments/{id}
        // Atualizar comment
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(long id, Comment comment)
        {
            if (id != comment.Id)
            {
                return BadRequest();
            }

            _context.Entry(comment).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/comments/{id}
        // Deletar comment
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(long id)
        {
            var comment = await _context.Comments.FindAsync(id);

            if (comment == null)
            {
                return NotFound();
            }

            _context.Comments.Remove(comment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // GET: api/comments/post/{id}/comments
        // Pegar todos os comments de um Post por ID
        [HttpGet("post/{id}")]
        public async Task<ActionResult<IEnumerable<Comment>>> GetComments(long id)
        {
            return await _context.Comments.Where(i => i.PostId == id && i.ParentId == 0).ToListAsync();
        }

        // GET api/comments/childs/{id}
        // Pegar todos comments filhos de um Comment pai por ID
        [HttpGet("childs/{id}")]
        public async Task<ActionResult<IEnumerable<Comment>>> GetChildComments(long id)
        {
            return await _context.Comments.Where(i => i.ParentId == id).ToListAsync();
        }

    }
}