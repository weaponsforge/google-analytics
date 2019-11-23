# mechanicore.github.io

> GitHub pages website <br>
> A Vue.js project <br>
> ### version 2.0
> Static build files from the latest vue project at branch [dev](https://github.com/ciatph/ciatph.github.io/tree/vue-version)).
Contains a basic Vue CLI project with `router-link`.

This project contains a default vue-cli (2.9.6) project using the webpack template. 

- Custom ESLint Rules have been applied.
- Build files from `dist` have been integrated with basic express server
- Has options load page over `http` or `https`


## Local Build Setup

1. Checkout the `dev` branch to access the vuejs project files. <br>
`git checkout dev`

2. `npm install`

3. To load over https, create a `.env` file in the root directory and copy the contents of `.env.example` to it. Set `USE_SSL` to `true|false to load over https before proceeding to #5.

4. `npm run dev` to serve with hot reload at localhost:8080

5. `npm run build` to build for production with minification

6. `npm run dev:server` 
	- serves static build files from express server at localhost:8080
	- if `USE_SSL` is true, https version can be loaded from `https://localhost:8043`


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



## Travis CI/CD

The website, accessible from [https://mechanicore.github.io](https://mechanicore.github.io) serves static build files pushed into the `master` branch.

This can be manually done by pushing static build files directly into the `master` branch, or automatically by pushing vue project code updates into the `dev` branch. Please follow the instructions below to trigger the automatic [Travis](https://travis-ci.com/) CI/CD.

Read on this [reference](https://trello.com/c/0A36NOdS) for more information on setting up Travis CI for GitHub pages.



### Automatic CI/CD Using Travis

1. Create a branch from `dev`. <br>
`git checkout -b my-test-branch`

2. Edit and push updates to `my-test-branch`.

3. Create a new **Pull Request (PR)** from the `my-test-branch` that you've created to branch `dev`.
	- Go to `my-test-branch` page in GitHub, using the branch navigator dropdown menu (Branch: my-updates-branch), or go to its repository url.i.e.:  
https://github.com/ciatph/ciatph.github.io/tree/my-updates-branch
	- Press the **[New pull request]** button beside the branch navigator dropdown menu.
	
4. Set the following in the resulting **"Open a pull request"** page:
	- **base:** `dev`
	- **compare:** `my-test-branch`
	- Press the **[Create pull request]** button.
	- **WAIT** for the Travis CI checks to finish.

5. Press the **[Merge pull request]** button.  
	> #### WARNING: 
	> It is important to **WAIT** for the Travis CI checks from #4 to finish first before pressing this button, else the Travis CI build will fail pushing the built files to /master.

6. View the travis CI status from [https://travis-ci.com/mechanicore/mechanicore.github.io](https://travis-ci.com/mechanicore/mechanicore.github.io). <br>
New GitHub pages website updates can be viewed from [https://mechanicore.github.io](https://mechanicore.github.io) if the build passed.



## References

[[1]](https://trello.com/c/jqnkh81D) - quick notes on using vuex



@mechanicore<br>
20190901
