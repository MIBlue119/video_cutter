# Deploy to vercel 

In order to show the demo page
Choos a place to deploy the repo

## Vercel
If we just want to deploy static file to serve

VM cost much money to wrong.
static files cost free.

## Example 
### Deploy the app to Vercel
link:https://vercel.com/
![](./images/2021-06-06-17-59-37.png)

Vercel Deployment
- Sign up at vercel.com
- Install the Vercel CLI
```
$npm install -g vercel
```    
- Run 'vercel' in our project directory
    - Sign in 
    ```
    $vercel login
    ```    
    - Choose the email related to the account to login
- Build the vercel
    ```
    $vercel
    ```
![](./images/2021-06-06-18-22-43.png)
![](./images/2021-06-06-18-23-14.png)

- How could we solve the error?
    Because we met the problem by treat the warning as error by the CI setting. We need to reset the setting at .

    https://github.com/vercel/vercel/discussions/5566



![](./images/2021-06-06-18-28-25.png)

After set the CI to close.
Run the command $vercel again


- How could we redploy our Application???
If we update our code, we could usethis command
```
vercel --prod
```