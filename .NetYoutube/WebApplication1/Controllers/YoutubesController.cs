using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class YoutubesController : ControllerBase
    {
        private readonly DbYoutubeContext _context;

        public YoutubesController()
        {
             _context = new DbYoutubeContext();
        }

        // GET: api/Youtubes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Youtube>>> GetYoutubes()
        {
            return await _context.Youtubes.ToListAsync();
        }

        // GET: api/Youtubes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Youtube>> GetYoutube(int id)
        {
            var youtube = await _context.Youtubes.FindAsync(id);

            if (youtube == null)
            {
                return NotFound();
            }

            return youtube;
        }

        // PUT: api/Youtubes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutYoutube(int id, Youtube youtube)
        {
            if (id != youtube.ID)
            {
                return BadRequest();
            }

            _context.Entry(youtube).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!YoutubeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Youtubes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Youtube>> PostYoutube(Youtube youtube)
        {
            _context.Youtubes.Add(youtube);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetYoutube", new { id = youtube.ID }, youtube);
            return Ok("Başarıyla eklendi.");
        }

        // DELETE: api/Youtubes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteYoutube(int id)
        {
            var youtube = await _context.Youtubes.FindAsync(id);
            if (youtube == null)
            {
                return NotFound();
            }

            _context.Youtubes.Remove(youtube);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool YoutubeExists(int id)
        {
            return _context.Youtubes.Any(e => e.ID == id);
        }
    }
}
