# Evaluate A News Article with Natural Language Processing

This project is developed to be submitted to Udacity Front End Web Developer Nanodegree program.

The project allows users to run Sentiment analysis on articles found on the web. When a user submits a URL of an article, the web page then dispalys sentiment analysis returned from [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis), based on the contents of the article.

## Installation

1. Move to the project folder

```
cd <project directory>
```

2. Clone the repo

```
git clone <repo>
```

3. Install npm

```
npm install
```

4. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

5. Configure environment variables using dotenv package
   1. Install the dotenv package
   ```
   npm install dotenv
   ```
   2. Create a new `.env` file in the root of your project
   3. Fill the `.env` file with your API key like this:
   ```
   API_KEY=**************************
   ```
6. Start the project

|       Command        |    Action     |
| :------------------: | :-----------: |
| `npm run build-prod` | Build project |
|     `npm start`      |  Run project  |

8. Open browser at http://localhost:8080/
