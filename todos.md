# bugs

when deleting a course, many toasts are returned. Three? Same as remaining number of Course components? Each sibling component is sending a fetch?

same bug inside lesson component. number same as that of remaining lesson components?

skipping auto-scroll behavior due to `position: sticky` or `position: fixed` on element: <span class=​"loading loading-spinner loading-lg loadingPosition">​</span>​
shouldSkipElement @ layout-router.js:114

- bug where default title is not used if title is not provided
- ~~when updating the order of the pages are changed~~
- when updating a page drag and drop does not move value along with the drag and drop
- ~~change how preview is displayed? fix styles~~
- why do some buttons have black borders while others dont?

# Basic Todos

- fix console.logs in db.ts?
- ListPages.tsx not used? check courses tree
- rename NewEditPage.tsx
- RenderContent.tsx also not used
- remove unused dependencies
- add all necessary fetch
- not draggable on mobile? (fixed?)
- ~~better styles for textarea (inconsistent across pages)~~
- add search filter by user?
- make edit and create page responsive for phones
- update lesson plan to course.
- standardize styles, spacing between buttons
- make svg sizes better
- drag and drop not working on edit/page
- use typescript for typing of many things
- remove pages page.tsx and associated components
- add hover grab to page create elements
- manage ui based on return from api
- make edit and create buttons only appear on element hover
- change create route to read the url instead of state
- change lesson plan to course
- drag and drop for editing content https://www.youtube.com/watch?v=u65Y-vqYNAk
- fix position of loading spinner
- host project. create filler content automatically each day?
- host seperate from free hosting just for me and cait.
- initialize lesson id in component
- responsive background color based on device settings
- update preview component to correctly render pages
- show if a lesson and pages have been completed
- move delete some folders and files
- - JsonToHtml
- rating system for lesson plans, lessons and pages. likes?
- add followers
- add tags for catagorizing content?
- add tests to measure learning
- add a way for people to create lessons without being users, but also not seeing other peoples content without signing in.
- return all content except for me and cait

# Daisy Ui Components To Try

- collapse (for hiding lessons in lesson plan view etc)
- file input for uploads later on?
- indivator for showing when a lesson or page is completed
- loading
- menu, for holding links?
- modal, for confirming deletions or offering to create placholder lessons and lesson plans
- navbar
- pagination
- select
- stat? for showing numbers and data (views, likes etc.)
- text area
- toggle? for dark mode
- chat bubble for messages? (cool but needs many features)
- text input

# Api

- routes for creating lesson plans and lessons
- also routes for deleting and updating
- deleting must delete all children
- move lessons and pages
- lessons should be unique but can be copied
- allow cascade but also create new placeholder for lessons and pages if users dont want to delete them

# Render

- fix schema to allow page creation and reading

# DataStructure

- Allow users to not make a full lesson plan? Only make a list of lessons?
- They could make lists of lessons and later add things to plans
- Have a track of lesson plans?

# Lesson Pages

- allow teachers to create pages with video, audio etc.
- allow admin to create new styles for a page

# Manage Lessons

- allow users to choose specific content to update or delete
- they see changes as they happen
