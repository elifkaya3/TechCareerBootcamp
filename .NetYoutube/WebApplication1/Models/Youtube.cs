﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Youtube : BaseModel
    {
        public string ImageUrl { get; set; }
        public string Title { get; set; }
        public string Logo { get; set; }
        public Category Category { get; set; }
        public int CategoryID { get; set; }

    }
}
