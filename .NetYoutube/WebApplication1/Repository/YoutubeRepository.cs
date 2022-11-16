using Bogus;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Repository
{
    public interface YoutubeRepository :IYoutubeRepository
    {
        public IEnumerable<Youtube> Get()
        {
            var products = new Faker<Youtube>("tr")
                            .RuleFor(x => x.ID, x => x.IndexFaker);
            //.RuleFor(x => x.Title, x => x.Commerce.Title())
            //.RuleFor(x => x.Category, x => x.Commerce.Category())
            //.RuleFor(x => x.Description, x => x.Commerce.ProductDescription())
            //.RuleFor(x => x.Price, x => x.Commerce.Price(5, 1000, 2).First())
            //.RuleFor(x => x.PictureUri, x => x.Image.PicsumUrl());

            return products.Generate(10);
        }

        IEnumerable<Youtube> IYoutubeRepository.Get()
        {
            throw new NotImplementedException();
        }
    }
}
