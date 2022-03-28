# 1337-meet-members-page
This project is a sample project for evaluation purposes.

- Language : React, Typescript, Hooks
- State management : Redux
- middleware : Thunk
- style: Css, Flex, `Styled-component`
- tools: (all  of these tools have dev dependency on the project)`redux-devtools-extension` to monitoring states while developing & `React dev tools` on Chrome or Firefox & `react-test-renderer` for testing & `gh-pages` for deploying on github online host.
# What is the project about?
The project is created to show all 1337 members information in different offices all over the world. you can access any member by name and office filter or you have also an option for sorting.
# How to run 
1. Clone the repo
2. In terminal -> `npm i`
3. Run the project ->`npm run start`
4. You can access the application on -> `http://localhost:3000`
# Available scripts
- `npm run deploy`: deploye the project on the homepage mentioned in the `package.json` file,
- `npm run start`: start the project on your localhost address,
- `npm run build`: build the project,
- `npm run test`: run available unit tests
# Features
- Get all members from the given API.
- For the sake of speed of loading, I used lazy loading  to load data faster while scrolling the page
- For easy access to any member information, I used basic front-end filtering with name and office( As I didn't have any API for filtering I managed it in client-side)
- To have a sorting option, I prepared a sorting by name and office
- There is a simple animated fancy loading to show data is getting from the server.

*For any further questions/issues contact me at mehdi.byt@gmail.com*