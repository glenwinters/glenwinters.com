# glenwinters.com

This is the frontend for my personal website. It's built with [Gatsby][1].

[1]: https://www.gatsbyjs.org/

## Development

Requirements:

- Node.js (LTS)

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

Requirements:

- AWS profile `personal` that has access to the target S3 bucket

```
TARGET_BUCKET_NAME=glenwinters.com TARGET_ADDRESS=https://glenwinters.com npm run build
AWS_PROFILE=personal npm run deploy
```

The gatsby plugin will ask you to confirm that you're deploying to the correct
bucket and region. Accept and it will push the new build to the S3 bucket.

[gatsby-plugin-s3 docs](https://www.gatsbyjs.com/plugins/gatsby-plugin-s3/)

### Staging

To deploy to the staging environment, use the following env var values:

```
TARGET_BUCKET_NAME=staging.glenwinters.com
TARGET_ADDRESS=https://staging.glenwinters.com
```

## CI

On pull request commits, it builds and deploys to staging. On commits to `main`, it builds and deploys to production. In both cases, it creates a CloudFront invalidation to bust the cache.
