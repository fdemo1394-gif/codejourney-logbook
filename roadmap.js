const roadmapTracks = [
  { title: '1. Computer and web foundations', icon: '01', lessons: [
    ['How computers think', 'Learn that programs are instructions, data is information, and the computer follows steps.', 'Write three everyday instructions as clear steps.'],
    ['Files, folders, and the terminal', 'Learn how files are organised and how the terminal helps you move and work quickly.', 'Create a folder for a tiny project and name each file clearly.'],
    ['How the web works', 'Understand browsers, servers, URLs, requests, and responses in simple terms.', 'Open the browser developer tools and find one network request.'],
    ['HTML page structure', 'Use headings, paragraphs, links, images, lists, and forms to give a page meaning.', 'Build a profile page with a heading, list, link, and form.'],
    ['CSS layout and responsive design', 'Style a page with colour, spacing, Flexbox, Grid, and layouts that work on small screens.', 'Make a card layout that changes from three columns to one.']
  ]},
  { title: '2. Programming fundamentals', icon: '02', lessons: [
    ['Values, variables, and types', 'Store text, numbers, true/false values, lists, and objects using clear names.', 'Create variables for a learner profile and print them in the lab.'],
    ['Operators and decisions', 'Use maths, comparisons, and if/else choices to make a program respond.', 'Build a simple grade checker.'],
    ['Loops and repetition', 'Repeat work with for and while loops, and know when a loop should stop.', 'Print the numbers 1 to 10 and only the even ones.'],
    ['Functions and reusable code', 'Package a useful task into a function with inputs and an answer.', 'Write a function that converts minutes into seconds.'],
    ['Arrays, objects, and data', 'Keep related information together and read or update it safely.', 'Store three projects in an array and display their titles.'],
    ['Errors and debugging', 'Read error messages, use small tests, and check what the program actually did.', 'Break a small program on purpose, then fix it one change at a time.']
  ]},
  { title: '3. Choose a main language', icon: '03', lessons: [
    ['JavaScript essentials', 'Use modern JavaScript syntax, modules, events, and browser APIs.', 'Make a button change a message on a page.'],
    ['Python essentials', 'Use Python syntax, lists, dictionaries, functions, and modules.', 'Write a small command-line greeting program.'],
    ['Object-oriented thinking', 'Model a thing with data and actions when that makes a program easier to understand.', 'Design a simple Book or Task class.'],
    ['Async programming', 'Understand waiting, promises, async/await, and why some work finishes later.', 'Fetch data and show a loading message before it arrives.'],
    ['Reading documentation', 'Find the right page, read an example, and adapt it instead of copying blindly.', 'Use one official API example and explain each line.']
  ]},
  { title: '4. Git and collaboration', icon: '04', lessons: [
    ['Version control basics', 'Use Git to create checkpoints and safely see how your project changed.', 'Make a commit after a small working change.'],
    ['Branches and merging', 'Work on a feature separately, then bring it back into the main project.', 'Create a feature branch and merge it after testing.'],
    ['GitHub projects', 'Share code online with a useful README and a clear project description.', 'Add setup steps and a screenshot to a project README.'],
    ['Pull requests and code review', 'Explain your change, review feedback kindly, and improve the code together.', 'Write a pretend pull-request description for your latest feature.'],
    ['Conflicts and safe teamwork', 'Resolve conflicts carefully and keep your branch history understandable.', 'Practise resolving a conflict in a throwaway file.']
  ]},
  { title: '5. Data, databases, and APIs', icon: '05', lessons: [
    ['Data modelling', 'Turn real-world information into clear fields, records, and relationships.', 'Design data fields for a small notes app.'],
    ['SQL basics', 'Read and write data with SELECT, INSERT, UPDATE, and DELETE.', 'Query all completed projects from a sample table.'],
    ['Database relationships', 'Connect related records and avoid saving the same fact in many places.', 'Sketch users, projects, and lessons as related tables.'],
    ['HTTP and JSON', 'Send and receive structured data through common web requests.', 'Read a JSON object and display two of its fields.'],
    ['Building an API', 'Create endpoints that accept requests and return predictable responses.', 'Plan GET and POST endpoints for a study tracker.'],
    ['Authentication basics', 'Understand accounts, sessions, passwords, and why secrets must stay private.', 'List the steps a safe sign-in flow needs without storing a real password.']
  ]},
  { title: '6. Quality, security, and accessibility', icon: '06', lessons: [
    ['Testing mindset', 'Check expected behaviour with small repeatable tests instead of relying only on clicking around.', 'Write five expected outcomes for a calculator.'],
    ['Unit and integration tests', 'Test one small part alone, then test how several parts work together.', 'Separate calculator tests into unit and integration examples.'],
    ['Input validation', 'Treat user input as unknown and check it before using it.', 'Reject an empty name and a negative age in a form.'],
    ['Common web security', 'Learn the basics of XSS, injection, private data, safe dependencies, and least privilege.', 'Write three rules for handling user text safely.'],
    ['Accessibility', 'Build for keyboard users, screen readers, different contrast needs, and clear language.', 'Navigate your page using only the keyboard.'],
    ['Performance basics', 'Make pages feel fast by measuring first and reducing unnecessary work.', 'Find one large asset or slow action and propose a smaller version.']
  ]},
  { title: '7. Professional engineering', icon: '07', lessons: [
    ['Clean and readable code', 'Prefer clear names, small functions, and simple code that another person can maintain.', 'Refactor one long function into three named steps.'],
    ['Architecture and trade-offs', 'Split a system into useful parts and explain why you chose that shape.', 'Draw the parts of a small shopping app.'],
    ['Design patterns, simply', 'Recognise repeated solutions without forcing every problem into a pattern.', 'Compare one shared utility with one class and choose the clearer option.'],
    ['Logging and monitoring', 'Leave useful clues for finding problems after software is released.', 'Choose three safe events your app should log.'],
    ['Documentation and communication', 'Explain setup, decisions, limits, and changes so others can use your work.', 'Write a README that a new learner can follow.'],
    ['Planning and estimation', 'Break a feature into tasks, identify unknowns, and improve estimates with practice.', 'Turn a large app idea into five small tasks.']
  ]},
  { title: '8. Deployment and real projects', icon: '08', lessons: [
    ['Environment variables and configuration', 'Keep settings separate from code and never publish private keys.', 'List which values belong in configuration for a deployed app.'],
    ['Build and deployment', 'Turn source code into a site or service people can use.', 'Describe the steps from a Git push to a live webpage.'],
    ['Cloud and containers overview', 'Understand hosting, processes, images, and why teams package apps consistently.', 'Draw the path from a browser to a hosted application.'],
    ['Capstone project planning', 'Choose a real problem, define a small first version, and plan the learning you need.', 'Write a one-page plan for a useful study tool.'],
    ['Portfolio and presentation', 'Show what you built, what you learned, and how someone else can try it.', 'Add a demo, screenshots, features, and lessons learned to your README.'],
    ['Keep learning safely', 'Ask questions, check reliable documentation, protect personal information, and improve one step at a time.', 'Write your next three learning goals and one safe way to practise each.']
  ]}
];

const roadmapStorageKey = 'codetrail-roadmap-progress';
let roadmapProgress = JSON.parse(localStorage.getItem(roadmapStorageKey) || '{}');
const roadmapLessons = roadmapTracks.flatMap((track, trackIndex) => track.lessons.map((lesson, lessonIndex) => ({
  id: `${trackIndex}-${lessonIndex}`, track: track.title, icon: track.icon, title: lesson[0], explanation: lesson[1], practice: lesson[2]
})));

function renderRoadmap() {
  const completed = roadmapLessons.filter(lesson => roadmapProgress[lesson.id]).length;
  const percent = Math.round(completed / roadmapLessons.length * 100);
  const count = document.querySelector('#roadmap-count');
  if (count) count.textContent = `${percent}%`;
  document.querySelector('#roadmap-progress').textContent = `${percent}%`;
  document.querySelector('#roadmap-progress-bar').style.width = `${percent}%`;
  const next = roadmapLessons.find(lesson => !roadmapProgress[lesson.id]);
  document.querySelector('#roadmap-next').textContent = next ? `Next up: ${next.title}` : 'Amazing work — you completed the roadmap. Build a project to prove what you know.';
  document.querySelector('#roadmap-list').innerHTML = roadmapTracks.map(track => `<section class="roadmap-track"><div class="roadmap-track-heading"><span class="roadmap-number">${track.icon}</span><div><p class="eyebrow">STAGE ${track.icon}</p><h2>${track.title.replace(/^\d+\. /, '')}</h2><p>${track.lessons.length} simplified lessons</p></div></div><div class="roadmap-lessons">${track.lessons.map((lesson, index) => { const item = roadmapLessons.find(entry => entry.track === track.title && entry.title === lesson[0]); const checked = roadmapProgress[item.id] ? 'checked' : ''; return `<article class="roadmap-lesson ${checked ? 'complete' : ''}"><label><input type="checkbox" data-roadmap-id="${item.id}" ${checked}><span class="roadmap-check"></span><span><strong>${index + 1}. ${item.title}</strong><small>${item.explanation}</small></span></label><div class="roadmap-practice"><span>Try it: ${item.practice}</span><button class="text-button roadmap-lab" data-roadmap-lab="${item.id}">Open lab →</button></div></article>`; }).join('')}</div></section>`).join('');
}

document.querySelector('#roadmap-list')?.addEventListener('change', event => {
  const checkbox = event.target.closest('[data-roadmap-id]');
  if (!checkbox) return;
  roadmapProgress[checkbox.dataset.roadmapId] = checkbox.checked;
  localStorage.setItem(roadmapStorageKey, JSON.stringify(roadmapProgress));
  renderRoadmap();
});
document.querySelector('#roadmap-list')?.addEventListener('click', event => {
  if (event.target.closest('.roadmap-lab')) navigate('practice');
});
document.querySelector('#roadmap-practice')?.addEventListener('click', () => navigate('practice'));
renderRoadmap();
