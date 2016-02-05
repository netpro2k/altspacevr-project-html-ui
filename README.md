# AltspaceVR Spaces Admin

I chose to implement this project using React & Redux. The Spaces and Users get pulled into the Redux store on demand and are updated using the provided api. When the promises from the API resolve the redux store is updated via the reducers (reducers/spaces.js and reducers.users.js). All interaction with the store is performed through flux actions (actions/index.js). The user store is set up for editing, though no interface is implemented for performing any of these updates.

Each space is given a random placeholder image, in a real implementation of this, the space image would obviously be provided by the db. The various flags are represented as icons on the tiles, and the description can be read on hover.

Users are represented throughout the site as avatars (again randomly assigned, but this time uniquely by email). In the space editor, members can be toggled by clicking their avatars. Title and description fields are required, and you will be unable to submit the form without entering values for both.

The site uses the HTML5 history api (via react router) to update the url as you navigates around. Editing a space is done by id via /spaces/:id for example /spaces/1. Note that because the provided database api does not actually persist through pageloads, going directly to a space will only work if the space exists in the provided database. If it does not you will be redirected to the spaces list.

The site uses a design taking queues from Google's material design, complete with a FAB (floating action button) to add new spaces. The site is responsive and works and various screen sizes.

I modified the data api very slightly to get it working with Webpack and also to fix a bug in id generation > 10.

####Running#####
The code is bundled up using Webpack and a dev server is provided for previewing the site. Run the following to spin it up:

```
	> npm install
	> npm start
```
