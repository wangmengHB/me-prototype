
# development environment dependencies:
1. nodejs, the latest version.
2. python, optional.


# follow the below steps:

1. install cnpm
In order to fetch npm packages from Google or sth blocked by Chinese network.

$ npm install -g cnpm --registry=https://registry.npm.taobao.org

If your network is OK, forget step 1.
"cnpm" in the below cmd line, can be replaced by "npm".

2. $ cnpm install
intall all the dependencies project needs.

3. $ cnpm run dev
run the development environment.
The dev server is run at: http://localhost:3000

4. $ cnpm run build
run release build.
The release package is placed in dist folder.

5. "index.html" is the development entry html.