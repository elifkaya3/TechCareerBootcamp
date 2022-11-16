using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Configuration
{
    public class YoutubeConfig : IEntityTypeConfiguration<Youtube>
    {
        public void Configure(EntityTypeBuilder<Youtube> builder)
        {
            builder.HasKey(x => x.ID);
        }

        internal static string GetConnectionString(string v)
        {
            throw new NotImplementedException();
        }
    }
}
