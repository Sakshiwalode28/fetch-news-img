let headline = document.createElement("h1");
headline = document.getElementById("heading");
headline.innerText = "Click on the buttons to fetch images";

const app = new Vue({
  el: "#app",
  data() {
    return {
      headlines: [
        "Top headlines in the US",
        "BBC News Headlines",
        "Top business Headlines From Germany",
        "Top Trump Headlines",
      ],
      images: [],
      message: "Vue.js second example with CDN",
    };
  },
  methods: {
    getImages1() {
      headline.innerText = this.headlines[0];
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=4fcf58405fc94a4386090b85bb3036a2"
        )
        .then((response) => {
          console.log("Loading....1");
          // console.log(response.data.articles);
          this.images = response.data.articles;
          console.log(response.data.articles);
          // this.headline = response.data.articles;
          this.images.map((articles, index) => {
            images = articles?.urlToImage;

            let img = document.createElement("img");
            img.src = articles?.urlToImage;
            img.height = 200;
            img.width = 250;
            let src = document.getElementById("news-img1");
            src.appendChild(img);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getImages2() {
      headline.innerText = this.headlines[1];
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=4fcf58405fc94a4386090b85bb3036a2"
        )
        .then((response) => {
          console.log("Loading....2");
          console.log(response.data.articles);
          this.images = response.data.articles;
          // this.headline = response.data.articles;
          this.images.map((articles, index) => {
            images = articles?.urlToImage;

            // console.log(articles?.urlToImage, index);
            let img = document.createElement("img");
            img.src = articles?.urlToImage;
            img.height = 200;
            img.width = 250;
            let src = document.getElementById("news-img2");
            src.appendChild(img);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getImages3() {
      headline.innerText = this.headlines[2];
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=4fcf58405fc94a4386090b85bb3036a2"
        )
        .then((response) => {
          console.log("Loading....3");
          // console.log(response.data.articles);
          this.images = response.data.articles;
          console.log(response.data.articles);
          // this.headline = response.data.articles;
          this.images.map((articles, index) => {
            images = articles?.urlToImage;

            // console.log(articles?.urlToImage, index);
            let img = document.createElement("img");
            img.src = articles?.urlToImage;
            img.height = 200;
            img.width = 250;
            let src = document.getElementById("news-img3");
            src.appendChild(img);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getImages4() {
      headline.innerText = this.headlines[3];
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?q=trump&apiKey=4fcf58405fc94a4386090b85bb3036a2"
        )
        .then((response) => {
          console.log("Loading....4");
          // console.log(response.data.articles);
          this.images = response.data.articles;
          console.log(response.data.articles);
          this.images.map((articles, index) => {
            images = articles?.urlToImage;
            // console.log(articles?.urlToImage, index);
            let img = document.createElement("img");
            img.src = articles?.urlToImage;
            img.height = 200;
            img.width = 250;
            let src = document.getElementById("news-img4");
            src.appendChild(img);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  render: (h) => h(app),
});
