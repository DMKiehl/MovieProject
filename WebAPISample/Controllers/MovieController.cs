using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPISample.Data;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private ApplicationContext _context;
        public MovieController(ApplicationContext context)
        {
            _context = context;
        }
        // GET api/movie
        [HttpGet]
        public IActionResult Get()
        {
            
            var movies = _context.Movies.Select(m => m).ToList();
            return Ok(movies);
        }

        // GET api/movie/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            
            var movie = _context.Movies.Where(m => m.MovieId == id).FirstOrDefault();
            return Ok(movie);
        }

        // POST api/movie
        [HttpPost]
        public IActionResult Post([FromBody]Movie value)
        {
            Movie movie = new Movie();
            movie.Title = value.Title;
            movie.Genre = value.Genre;
            movie.Director = value.Director;
            _context.Add(movie);
            _context.SaveChanges();
            return Ok();
        }

        // PUT api/movie
        [HttpPut]
        public IActionResult Put([FromBody] Movie movie)
        {
            // Update movie in db logic
            var movieFromDb = _context.Movies.Where(m => m.MovieId == movie.MovieId).FirstOrDefault();
            movieFromDb.MovieId = movie.MovieId;
            movieFromDb.Title = movie.Title;
            movieFromDb.Genre = movie.Genre;
            _context.SaveChanges();
            return Ok();
        }

        // DELETE api/movie/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var movie = _context.Movies.Where(m => m.MovieId == id).SingleOrDefault();
        
            _context.Remove(movie);
            _context.SaveChanges();
            return Ok();
        }
    }
}