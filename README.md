# glenwinters.com

This is the frontend for my personal website. It's built with [Gatsby][1].

[1]: https://www.gatsbyjs.org/

## Development

Requirements:
* Node.js (LTS)

1. Install dependencies
    ```
    npm install
    ```

2. Start the local server
    ```
    npm start
    ```

3. View the site locally in your browser at `localhost:8000`

## Deployment

```
TARGET_BUCKET_NAME=glenwinters.com TARGET_ADDRESS=https://glenwinters.com npm run build
AWS_PROFILE=personal npm run deploy
```

The gatsby plugin will ask you to confirm that you're deploying to the correct
bucket and region. Accept and it will push the new build to the S3 bucket.

### Staging

To deploy to the staging environment, use the following env var values:

```
TARGET_BUCKET_NAME=staging.glenwinters.com
TARGET_ADDRESS=https://staging.glenwinters.com
```
