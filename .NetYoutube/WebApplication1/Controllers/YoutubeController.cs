using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using WebApplication1.Models;
using WebApplication1.Repository;
using WebApplication1.Configuration;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class YoutubeController : ControllerBase
    {
       
        private IYoutubeRepository _youtubeRepository;

        public YoutubeController(IYoutubeRepository youtubeRepository) { _youtubeRepository = youtubeRepository; }

        public object Id { get; internal set; }

        [HttpGet]
        public List<Youtube> Get()
        {
            return _youtubeRepository.Get().ToList();
        }

        //[HttpGet]
        //public JsonResult Get()
        //{
        //    string query = @"
        //                    select ID,ImageUrl,Title,Logo,Channel,CategoryID,IsVerified,
        //                    Duration,Views,UploadTime from dbo.YoutubeInfo";

        //    DataTable table = new DataTable();
        //    string sqlDataSource = YoutubeConfig.GetConnectionString("DbYoutubeContext");
        //    SqlDataReader myReader;
        //    using (SqlConnection myCon = new SqlConnection(sqlDataSource))
        //    {
        //        myCon.Open();
        //        using (SqlCommand myCommand = new SqlCommand(query, myCon))
        //        {
        //            myReader = myCommand.ExecuteReader();
        //            table.Load(myReader);
        //            myReader.Close();
        //            myCon.Close();
        //        }
        //    }
        //    return new JsonResult(table);
        //}
    }
}
