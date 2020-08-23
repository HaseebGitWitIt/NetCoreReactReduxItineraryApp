using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NewsAPI;
using NewsAPI.Constants;
using NewsAPI.Models;

namespace DailyItinerary.Controllers
{
    [ApiController]
    public class NewsController : ControllerBase
    {

        const string BUSINESS = "business";
        const string ENTERTAINMENT = "entertainment";
        const string HEALTH = "health";
        const string SCIENCE = "science";
        const string SPORTS = "sports";
        const string TECHNOLOGY = "technology";

        const int NUMBER_OF_ARTICLES_PER_TOPIC = 1;

        private readonly ILogger<NewsController> _logger;

        public NewsController(ILogger<NewsController> logger)
        {
            _logger = logger;
        }

        [HttpGet("[controller]/{topics}")]
        public Object[] Get(string topics)
        {
            var indTopics = topics.Split("-");
            ArrayList articles = new ArrayList();

            foreach (string topic in indTopics)
            {
                if (topic == BUSINESS)
                {
                    articles.AddRange(getArticles(Categories.Business));
                }
                else if (topic == ENTERTAINMENT)
                {
                    articles.AddRange(getArticles(Categories.Entertainment));
                }
                else if (topic == HEALTH)
                {
                    articles.AddRange(getArticles(Categories.Health));
                }
                else if (topic == SCIENCE)
                {
                    articles.AddRange(getArticles(Categories.Science));
                }
                else if (topic == SPORTS)
                {
                    articles.AddRange(getArticles(Categories.Sports));
                }
                else if (topic == TECHNOLOGY)
                {
                    articles.AddRange(getArticles(Categories.Technology));
                }
            }


            //return articlesResponse;
            return articles.ToArray();
            //return new { test = "Hello world! " + topics };

        }

        private List<Article> getArticles(NewsAPI.Constants.Categories category)
        {
            var newsApiClient = new NewsApiClient("fb73c0bd433842b8ba5f2566a2a0128f");
            var articlesResponse = newsApiClient.GetTopHeadlines(new TopHeadlinesRequest
            {
                Category = category,
                PageSize = NUMBER_OF_ARTICLES_PER_TOPIC,
                Language = Languages.EN,
                Country = Countries.US
            });
            if (articlesResponse.Status == Statuses.Ok)
            {
                return articlesResponse.Articles;
            }
            else
            {
                return null;
            }
        }

    }
}
