using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProgrammingHubApi.Models;

namespace ProgrammingHubApi.Controllers
{
    [Route("api/posts")]
    [ApiController]
    public class BlogPostController : ControllerBase
    {
        private readonly BlogPostContext _context;

        public BlogPostController(BlogPostContext context)
        {
            _context = context;

            // if (_context.BlogPosts.Count() == 0)
            // {
            //     // Create a new BlogPost if collection is empty,
            //     // which means you can't delete all BlogPosts.
            //     _context.BlogPosts.Add(new BlogPost { Title = "Hello", Description = "2", Author = 1, Content = "Blah" });
            //     _context.SaveChanges();
            // }
        }

        // GET: api/posts
        // Listar Posts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BlogPost>>> GetBlogPosts()
        {
            return await _context.BlogPosts.ToListAsync();
        }

        // GET: api/posts/{id}
        // Pegar Post por ID
        [HttpGet("{id}")]
        public async Task<ActionResult<BlogPost>> GetBlogPost(long id)
        {
            // var post = from BlogPost c in _context.BlogPosts where c.Id == id select c;
            var post = await _context.BlogPosts.FindAsync(id);

            if (post == null)
            {
                return NotFound();
            }

            return post;
        }

        // POST: api/posts
        // Criar novo Post
        // TODO: Autenticação e permissões
        [HttpPost]
        public async Task<ActionResult<BlogPost>> PostBlogPost(BlogPost post)
        {
            _context.BlogPosts.Add(post);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetBlogPost), new { id = post.Id }, post);
        }

        // PUT: api/posts/{id}
        // Atualizar Post por ID
        [HttpPut("{id}")]
        public async Task<ActionResult<BlogPost>> PutBlogPost(long id, BlogPost post)
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
        // Deletar Post por ID
        // DELETE: api/Todo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBlogPost(long id)
        {
            var post = await _context.BlogPosts.FindAsync(id);

            if (post == null)
            {
                return NotFound();
            }

            _context.BlogPosts.Remove(post);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}