using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public abstract class BaseModel
    {
        public int ID { get; set; }
        public string Channel { get; set; }
        public bool IsVerified { get; set; }
        public DateTime Duration { get; set; }
        public int Viewss { get; set; }
        public DateTime UploadTime { get; set; }
    }
}
