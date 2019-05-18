using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using backend.Models;

namespace backend.Controllers
{
    [Route("api/posts")]
    [ApiController]
    public class PostController : Controller
    {
        private readonly ApiContext _context;

        public PostController(ApiContext context)
        {
            _context = context;
        }

        // GET: api/posts/
        // Listar todos os posts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Post>>> Get()
        {
            return await _context.Posts.ToListAsync();
        }

        // GET: api/posts/{id}
        // Pegar post por ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Post>> Get(long id)
        {
            var post = await _context.Posts.FindAsync(id);

            if (post == null)
            {
                return NotFound();
            }

            return post;
        }

        // POST: api/posts
        // Criar novo post
        [HttpPost]
        public async Task<ActionResult<Post>> Post(Post post)
        {
            await _context.Posts.AddAsync(post);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new {id = post.Id}, post);
        }

        // PUT: api/posts/{id}
        // Atualizar post
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(long id, Post post)
        {
            if (id != post.Id)
            {
                return BadRequest();
            }

            _context.Entry(post).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/posts/{id}
        // Deletar post
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(long id)
        {
            var post = await _context.Posts.FindAsync(id);

            if (post == null)
            {
                return NotFound();
            }

            _context.Posts.Remove(post);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}