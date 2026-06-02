export interface CodeExample {
  label: string;
  code: string;
}

export interface TableData {
  title: string;
  rows: string[][];
}

export interface Lesson {
  id: string;
  section: "javascript" | "react";
  title: string;
  theoryBlocks: string[];
  codeExamples: CodeExample[];
  tables?: TableData[];
}

export const lessonsData: Lesson[] = [
  // JavaScript Section
  {
    id: "js-1",
    section: "javascript",
    title: "What is Javascript",
    theoryBlocks: [
      "Javascript is versatile, dynamically typed programming language that runs natively in web browsers and on servers. It is used for adding interactivity, logic and dynamic behaviour to static HTML and CSS.",
      "Also Javascript helps us build interactive user interfaces using popular frameworks like: React, Vue.js and angular, enabling features like real-time updates and complex animations",
    ],
    codeExamples: [
      {
        label:
          "Here is simple example of how you can write text in console using JS:",
        code: 'console.log("Hello World");',
      },
    ],
  },
  {
    id: "js-2",
    section: "javascript",
    title: "Interpreter vs Compiler",
    theoryBlocks: [
      "***What is Interpreter?*** \n **Interpreter** is a program, which directly executes instructions written in programming language line by line, without first converting the entire source code into machine code. It directly reads code line by line and executes them no matter what, it starts reading from top and comes down as it goes.",
      "***What is Compiler?*** \n **Compiler** is a program, which analyze whole program at once, it not just reads code line by line, but also ensures it follows language rules, such as: syntax analysis (checking structure), semantic analysis (checking logic), optimization (improving performance), and code generation (producing the final machine code)",
      "***Key Difference***\n**Interpreter**: runs line by line, stops the moment it hits an error.\n**Compiler**: reads everything first, reports all errors at once, then runs.",
    ],
    codeExamples: [
      {
        label: "Interpreter behavior — stops at the first error",
        code: `console.log("Line 1"); // ✅ runs
console.log("Line 2"); // ✅ runs
console.log(x);        // ❌ crashes here - x is not defined
console.log("Line 4"); // never reached`,
      },
      {
        label: "Compiler behavior — catches all errors before running",
        code: `// A compiler would catch ALL of these before running anything:
console.log(x)   // ❌ x is not defined
console.log(y)   // ❌ y is not defined
console.log(z)   // ❌ z is not defined

// Only after fixing every error does your program run`,
      },
      {
        label: "JavaScript is interpreted — so errors stop execution mid-way",
        code: `console.log("Start");    // ✅ prints
console.log("Middle");   // ✅ prints
undefinedFunction();     // ❌ crashes - nothing after this runs
console.log("End");      // never reached`,
      },
    ],
  },
  {
    id: "js-3",
    section: "javascript",
    title: "What is a Variable?",
    theoryBlocks: [
      "Imagine you're cooking and you need to remember how many eggs you have. You look in the fridge, count 6 eggs, and keep that number in your head. Your brain just stored a value. In programming, a variable does exactly that - it's a named place in your computer's memory that holds a value so you can use it later.",
      "A variable has two things: a name (so you can find it again) and a value (the actual data stored inside).",
      "Think of it like a labeled box. The label is the name, whatever's inside the box is the value.",
      "Key takeaway: Variables let your program remember information and reuse it later, instead of hardcoding the same value in a hundred places.",
    ],
    codeExamples: [
      {
        label: "Creating variables",
        code: `let eggs = 6;
let name = "Anna";
let isRaining = true;`,
      },
      {
        label: "Changing a variable's value",
        code: `let eggs = 6;
eggs = 4; // we used 2 eggs, now it's 4`,
      },
    ],
  },
  {
    id: "js-4",
    section: "javascript",
    title: "var, let, const",
    theoryBlocks: [
      "JavaScript has three ways to declare a variable. They all create a variable, but they behave differently in important ways.",
      '"let" is the modern standard - use this by default. It can be changed after creation and only exists inside the block {} it was created in (block-scoped).',
      '"const" is short for constant - use this when the value should never change. It cannot be reassigned after creation. Also block-scoped. Use const for things like your name, a fixed price, a URL, or a configuration value.',
      '"var" is the old way - avoid it in modern code. It can be changed but is NOT block-scoped, meaning it leaks outside of if blocks and loops, which causes confusing bugs. It still works but is considered outdated.',
      "Simple rule: use const by default, use let if you know the value will change, never use var.",
    ],
    codeExamples: [
      {
        label: "let - can be changed",
        code: `let score = 10;
score = 20; // ✅ allowed`,
      },
      {
        label: "const - cannot be reassigned",
        code: `const pi = 3.14;
pi = 3; // ❌ Error! You can't reassign a const`,
      },
      {
        label: "Why var causes problems (scope leaking)",
        code: `if (true) {
  var leaky = "I escaped!";
}
console.log(leaky); // "I escaped!" - var leaked outside the if block

if (true) {
  let safe = "I stay here";
}
console.log(safe); // ❌ Error - let stays inside the block`,
      },
    ],
  },
  {
    id: "js-5",
    section: "javascript",
    title: "Tasks N1",
    theoryBlocks: [
      "***Task A — Introduce Yourself***\nDeclare variables for your name, age, city, and favourite food, then use them to build a sentence with console.log(). Feel free to use AI to check correctness of your code after checking the result.",
      "***Task B — Fix the Broken Code***\nThe code below has 4 mistakes. Find and fix all of them. Think about: wrong keywords, reassigning things that shouldn't change, and outdated ways of declaring variables.",
      "***Task C — Grocery Bill Calculator***\nDeclare variables for 3 item prices (e.g. bread, milk, cheese). Calculate the total, then apply a 10% discount, and log the final price to the console.\nExample output: Final price after discount: 13.5",
      "\n Also feel free to use AI to check correctness of your code after checking the result",
    ],
    codeExamples: [
      {
        label: "Task A — Example output:",
        code: `Hello, my name is John, i'm 28 years old, i live in Batumi, and my favorite food is burger
// Hint: use variable names and the + operator to connect strings
// Don't forget spaces when joining strings: "Hello, " + name (note the space inside the quote)`,
      },
      {
        label: "Task B — Fix all the mistakes in this code:",
        code: `var username = "Anna";
const score = 0;
score = 10;
let pi = 3.14;
pi = 3;
var isLoggedIn = true;`,
      },
      {
        label: "Task C — Starting point:",
        code: `const breadPrice = 2.5;
const milkPrice = 1.8;
const cheesePrice = 4.2;

// 1. Calculate the total of all three
// 2. Apply a 10% discount (multiply total by 0.9)
// 3. Log the final price: "Final price after discount: ..."`,
      },
    ],
  },
  {
    id: "js-6",
    section: "javascript",
    title: "Operators",
    theoryBlocks: [
      "Operators are symbols that let you do things with values - math, comparisons, combining conditions. You already know most of them from school.",
      "Arithmetic operators are for math: + (add), - (subtract), * (multiply), / (divide), % (remainder/modulo). The % operator gives you the leftover after dividing - useful for checking if a number is even or odd.",
      "Comparison operators compare two values and always return true or false. Always prefer === over == because === is strict - it checks both value AND type. == converts types before comparing which can cause unexpected results.",
      "Logical operators combine conditions: && means AND (both must be true), || means OR (at least one must be true), ! means NOT (flips true to false and vice versa).",
    ],
    tables: [
      {
        title: "Arithmetic Operators",
        rows: [
          ["Operator", "Meaning", "Example", "Result"],
          ["+", "Add", "5 + 3", "8"],
          ["-", "Subtract", "5 - 3", "2"],
          ["*", "Multiply", "5 * 3", "15"],
          ["/", "Divide", "6 / 2", "3"],
          ["%", "Remainder", "7 % 3", "1"],
        ],
      },
      {
        title: "Comparison Operators",
        rows: [
          ["Operator", "Meaning", "Example", "Result"],
          ["==", "Equal (loose)", '5 == "5"', "true"],
          ["===", "Equal (strict)", '5 === "5"', "false"],
          ["!=", "Not equal (loose)", "5 != 3", "true"],
          ["!==", "Not equal (strict)", '5 !== "5"', "true"],
          [">", "Greater than", "10 > 3", "true"],
          ["<", "Less than", "2 < 8", "true"],
          [">=", "Greater or equal", "5 >= 5", "true"],
          ["<=", "Less or equal", "3 <= 2", "false"],
        ],
      },
      {
        title: "Logical Operators",
        rows: [
          ["Operator", "Meaning", "Example", "Result"],
          ["&&", "AND - both must be true", "true && false", "false"],
          ["||", "OR - at least one true", "true || false", "true"],
          ["!", "NOT - flips true/false", "!true", "false"],
        ],
      },
    ],
    codeExamples: [
      {
        label: "Arithmetic in action",
        code: `let total = 100 + 50;      // 150
let discount = total - 20; // 130
let tax = total * 0.18;    // 18
let perPerson = total / 4; // 25
let isEven = 8 % 2;        // 0 - no remainder means it's even`,
      },
      {
        label: "== vs === (always use ===)",
        code: `5 == "5"   // true  - loose, converts string to number
5 === "5"  // false - strict, number is not equal to string`,
      },
      {
        label: "Logical operators in a real condition",
        code: `let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Entry allowed");
}

if (age < 18 || !hasID) {
  console.log("Entry denied");
}`,
      },
    ],
  },
  {
    id: "js-7",
    section: "javascript",
    title: "if / else",
    theoryBlocks: [
      "Your code doesn't always do the same thing. Sometimes it needs to make a decision based on a condition. That's what if/else is for.",
      'Real-life version: "If it\'s raining, take an umbrella. Otherwise, wear sunglasses."',
      "In code, you give it a condition. If the condition is true, one block of code runs. If it's false, a different block runs.",
      'A basic "if" runs a block only when the condition is true. If/else gives you two paths - one for true, one for false. If/else if/else lets you check multiple conditions in order - JavaScript checks each from top to bottom and runs the first one that\'s true. The else at the end is the fallback if nothing matches.',
      "Important: The condition inside if() must evaluate to true or false - this is where your comparison and logical operators are used.",
    ],
    codeExamples: [
      {
        label: "Basic if",
        code: `let temperature = 30;

if (temperature > 25) {
  console.log("It's hot outside!");
}`,
      },
      {
        label: "if / else",
        code: `let temperature = 15;

if (temperature > 25) {
  console.log("It's hot outside!");
} else {
  console.log("It's cool outside.");
}`,
      },
      {
        label: "if / else if / else - multiple conditions",
        code: `let score = 72;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}`,
      },
      {
        label: "Using logical operators inside if",
        code: `let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
  console.log("Welcome, admin!");
} else if (isLoggedIn) {
  console.log("Welcome, user!");
} else {
  console.log("Please log in.");
}`,
      },
    ],
  },
  {
    id: "js-8",
    section: "javascript",
    title: "for Loop",
    theoryBlocks: [
      'Imagine you need to print "Hello!" 100 times. You could write console.log("Hello!") 100 times… or you could use a loop. A loop repeats a block of code automatically, as many times as you tell it to.',
      "The for loop is the most common type. It has three parts in its header: start (runs once at the beginning, sets up a counter), condition (checked before every repetition - loop stops when it's false), and step (runs after each repetition, usually increases the counter).",
      "i++ is shorthand for i = i + 1. Arrays in JavaScript start at index 0, so a list of 3 items has indexes 0, 1, and 2. fruits.length gives you the total count of items in an array.",
      "Without loops you'd repeat the same code manually for every item. With a loop, the same 3 lines work whether you have 4 students or 4000.",
    ],
    codeExamples: [
      {
        label: "Counting from 1 to 5",
        code: `for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Output: 1, 2, 3, 4, 5`,
      },
      {
        label: "Looping through a list (array)",
        code: `const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output: apple, banana, cherry`,
      },
      {
        label: "Practical example - greeting every student",
        code: `const students = ["Anna", "Giorgi", "Lika", "Nino"];

for (let i = 0; i < students.length; i++) {
  console.log("Hello, " + students[i] + "!");
}
// Hello, Anna!
// Hello, Giorgi!
// Hello, Lika!
// Hello, Nino!`,
      },
    ],
  },
  {
    id: "js-9",
    section: "javascript",
    title: "Array Method: forEach",
    theoryBlocks: [
      "The `.forEach()` method is a cleaner, more readable alternative to a traditional `for` loop when you want to execute a function on every element of an array.",
      "Instead of maintaining a manual counter variable (like `let i = 0`), `.forEach()` provides the current element directly as an argument inside a callback function.",
      "Important Rule: `.forEach()` is designed to produce side-effects (like updating external arrays, logging data, or modifying state). It always returns `undefined`, which means you cannot chain other array methods after it.",
    ],
    codeExamples: [
      {
        label: "Syntax overview vs traditional loop",
        code: `const logs = ["User login", "Page view", "Logout"];

// Traditional way
for (let i = 0; i < logs.length; i++) {
  console.log(logs[i]);
}

// Clean functional way using forEach
logs.forEach(log => console.log(log));`,
      },
      {
        label: "Practical Use Case: Categorizing Server Response Statuses",
        code: `const requests = [
  { url: "/home", status: 200 },
  { url: "/login", status: 401 },
  { url: "/dashboard", status: 200 },
  { url: "/admin", status: 403 },
];

const successfulUrls = [];
const errorUrls = [];

// Populating distinct validation arrays via side-effects
requests.forEach((req) => {
  req.status === 200 ? successfulUrls.push(req.url) : errorUrls.push(req.url);
});`,
      },
    ],
  },
  {
    id: "js-10",
    section: "javascript",
    title: "Array Method: reduce",
    theoryBlocks: [
      "The `.reduce()` method processes an array element-by-element to compute and return a single cumulative value.",
      "It requires a callback function with two main parameters: the Accumulator (`acc`) which accumulates the running results, and the Current value (`curr`) representing the item being processed.",
      "Crucially, you must always provide an initial value as the second argument to `.reduce()`. This initial value can be a number (`0`), an empty object (`{}`), an empty array (`[]`), or any other data type.",
      "Whatever you return from the callback function automatically becomes the Accumulator value for the next item in line.",
    ],
    codeExamples: [
      {
        label: "Aggregating Order Ledger Totals (Number Initial Value)",
        code: `const orders = [
  { product: "Book", total: 15, quantity: 2 },
  { product: "Lamp", total: 45, quantity: 1 },
  { product: "Pen", total: 2, quantity: 5 }
];

// Accumulating values starting from 0
const transactionTotal = orders.reduce((acc, curr) => acc + (curr.total * curr.quantity), 0);
console.log(transactionTotal); // 85`,
      },
      {
        label: "Re-mapping Nested Arrays Dynamically (Object Initial Value)",
        code: `const employees = [
  { name: "Alex", department: "Engineering" },
  { name: "Mia", department: "Design" },
  { name: "Chris", department: "Engineering" }
];

// Grouping strings into custom array categories dynamically
const departmentMap = employees.reduce((acc, curr) => {
  if (!acc[curr.department]) {
    acc[curr.department] = [];
  }
  acc[curr.department].push(curr.name);
  return acc;
}, {});

console.log(departmentMap); // { Engineering: ["Alex", "Chris"], Design: ["Mia"] }`,
      },
    ],
  },
  {
    id: "js-11",
    section: "javascript",
    title: "Array Method: filter",
    theoryBlocks: [
      "The `.filter()` method creates a new array filled with all elements that pass a specific test condition provided by a callback function.",
      "Inside the callback, you write a conditional expression that returns either `true` or `false` for each item. If an item matches the criteria (`true`), it is copied into the new array; if it evaluates to `false`, it is completely skipped.",
      "Key Advantage: Unlike `.forEach()`, `.filter()` does not change or mutate your original source array. It seamlessly generates a new, clean array subset.",
    ],
    codeExamples: [
      {
        label: "Isolating passing elements from datasets",
        code: `const classGrades = [55, 68, 90, 42, 88, 71];

// Isolate passing benchmarks (e.g., 70 or above)
const passingGrades = classGrades.filter(grade => grade >= 70);

console.log(passingGrades); // [90, 88, 71]`,
      },
      {
        label: "Filtering complex object states",
        code: `const userSessions = [
  { username: "Ben", activeSession: true },
  { username: "Lia", activeSession: false },
  { username: "Dan", activeSession: true }
];

const liveUsers = userSessions.filter(session => session.activeSession);
console.log(liveUsers); // Logs array items for Ben and Dan`,
      },
    ],
  },
  {
    id: "js-12",
    section: "javascript",
    title: "Array Method: find",
    theoryBlocks: [
      "The `.find()` method returns the value of the very first element in an array that satisfies a testing condition.",
      "It reads your array items sequentially from left to right. The exact moment it hits an item that yields a `true` outcome from your condition, it instantly exits the iteration loop and hands back that specific item.",
      "Crucial Distinction: While `.filter()` keeps looking to gather an array of *all* matches, `.find()` stops immediately at the *first* match and returns just that single element value. If no elements pass the test, it returns `undefined`.",
    ],
    codeExamples: [
      {
        label: "Finding an item by unique identifier reference",
        code: `const assets = [
  { sku: "A101", weight: 5 },
  { sku: "B902", weight: 12 },
  { sku: "C440", weight: 3 }
];

// Instantly stops search loop at first confirmation match
const targetAsset = assets.find(asset => asset.sku === "B902");
console.log(targetAsset); // { sku: "B902", weight: 12 }`,
      },
    ],
  },
  {
    id: "js-13",
    section: "javascript",
    title: "Filter vs Find vs Reduce",
    theoryBlocks: [
      "Choosing between `.filter()`, `.find()`, and `.reduce()` is all about matching the tool to the structure of your desired output.",
      "Use `.filter()` when your goal is to narrow down an array, but you still expect to get a list (array) of elements back (0 or more items).",
      "Use `.find()` when you are searching for one exact item and you need the literal element value or reference directly, instead of a wrapper collection.",
      "Use `.reduce()` when you need a custom output type completely different from the source array—such as transforming an array down into an aggregated number, an analytical string, or a fully restructured nested lookup object map.",
    ],
    tables: [
      {
        title: "Comparison Matrix",
        rows: [
          [
            "Method",
            "Return Value Type",
            "Iterates Full Array?",
            "Primary Target Use Case",
          ],
          [
            ".filter()",
            "New Array (subset)",
            "Always",
            "Extracting lists matching criteria",
          ],
          [
            ".find()",
            "Single Element / Undefined",
            "Stops at first match",
            "Locating a specific structural reference",
          ],
          [
            ".reduce()",
            "Any custom type (number, obj, etc.)",
            "Always",
            "Aggregating values, maps, and structures",
          ],
        ],
      },
    ],
    codeExamples: [
      {
        label: "Different results from the same data criteria",
        code: `const supportTickets = [
  { ticketId: 1, open: true },
  { ticketId: 2, open: true },
  { ticketId: 3, open: false }
];

// filter() yields a filtered subset array
const activeTickets = supportTickets.filter(t => t.open); // [ticket 1, ticket 2]

// find() yields the literal target object reference directly
const priorityTicket = supportTickets.find(t => t.open);  // ticket 1 object reference

// reduce() yields an aggregated metric
const openCount = supportTickets.reduce((acc, curr) => curr.open ? acc + 1 : acc, 0); // 2`,
      },
    ],
  },
  {
    id: "js-14",
    section: "javascript",
    title: "Array Method: flat",
    theoryBlocks: [
      "The `.flat()` method creates a brand new array where all sub-array elements are systematically extracted and concatenated into it up to a specified depth limit.",
      "By default, if you don't pass an argument to `.flat()`, it will automatically flatten your array exactly 1 level deep.",
      "Combining `.flat()` with `.reduce()` allows you to quickly transform multi-dimensional nested matrices into clean, unified, and unique datasets.",
    ],
    codeExamples: [
      {
        label: "Normalizing nesting layers into clean unique tables",
        code: `const coordinateBatches = [
  [10, 20],
  [20, 30, 40],
  [40, 50]
];

const unifiedCoordinates = coordinateBatches.flat(); // [10, 20, 20, 30, 40, 40, 50]

// Cleaning up duplications dynamically with reduce lookup passes
const uniqueCoordinates = unifiedCoordinates.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(uniqueCoordinates); // [10, 20, 30, 40, 50]`,
      },
    ],
  },
  {
    id: "js-15",
    section: "javascript",
    title: "Array Method: sort",
    theoryBlocks: [
      "The `.sort()` method reorganizes the items of an array directly in place, meaning it mutates the original source array rather than making a copy.",
      "By default, `.sort()` treats everything as strings. If you try to sort numbers natively without a custom compare function, it will yield broken results (e.g., `10` comes before `2` because '1' is smaller than '2').",
      "To resolve this, you must supply a compare function: `(a, b) => a - b` sorts values in an **Ascending** order, while `(b, a) => b - a` or `(a, b) => b - a` arranges items in a **Descending** structure.",
    ],
    codeExamples: [
      {
        label: "Sorting Object Properties (Numerical Sorting)",
        code: `const boxes = [{ weight: 45 }, { weight: 12 }, { weight: 89 }];

// Sort weights from smallest to largest
boxes.sort((a, b) => a.weight - b.weight);`,
      },
      {
        label: "Advanced Use Case: Frequency Ranking Extraction Matrix",
        code: `const streamLogs = "error info error warning error info";
const tokens = streamLogs.split(" ");

const frequencyTracker = tokens.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

// Convert map entries to pairs and sort them from most frequent to least
const errorLeaderboard = Object.entries(frequencyTracker).sort((a, b) => b[1] - a[1]);
console.log(errorLeaderboard); // [["error", 3], ["info", 2], ["warning", 1]]`,
      },
    ],
  },

  // React Section
  {
    id: "react-1",
    section: "react",
    title: "What is React?",
    theoryBlocks: [
      "React is a JavaScript library built by Meta (Facebook) that helps you build user interfaces - the visual part of a website that users see and interact with.",
      "Before React, developers built websites using plain HTML, CSS, and JavaScript. That works fine for small sites, but as an app grows, it becomes a mess. Imagine a website with 50 pages, and every page has the same navigation bar. In plain HTML, that navbar is copy-pasted 50 times. Change one link? You update 50 files.",
      "React solves this by letting you build UIs out of small, reusable pieces called components. It also automatically updates the page when your data changes - no need to manually manipulate the HTML yourself.",
      "In short: React is a smarter way to build websites. It keeps your code organized, reusable, and easier to maintain. It's one of the most in-demand skills in web development today.",
    ],
    codeExamples: [],
  },
  {
    id: "react-2",
    section: "react",
    title: "What are Components?",
    theoryBlocks: [
      "A component is an independent, reusable piece of your UI. Think of it like a LEGO brick - small on its own, but you combine many of them to build something big.",
      "Every component is a JavaScript function that returns HTML-like code called JSX.",
      'The copy-paste problem in HTML: suppose you have a "Subscribe" button on 5 different pages. In plain HTML you copy-paste the full button tag 5 times. If your designer says "change the button text and color", you find and update every single copy. Miss one and your site is inconsistent.',
      "The React component solution: you define the button once as a component, then use it anywhere as many times as you want. Change it in one place and it updates everywhere automatically.",
      "Components can also be big - a whole navbar, a user profile card, a comment section. You build pages by combining components like puzzle pieces.",
    ],
    codeExamples: [
      {
        label: "The HTML copy-paste problem",
        code: `<button class="btn btn-primary btn-rounded">Subscribe</button>

<button class="btn btn-primary btn-rounded">Subscribe</button>

<button class="btn btn-primary btn-rounded">Subscribe</button>
`,
      },
      {
        label: "Defining a React component once",
        code: `function SubscribeButton() {
  return (
    <button className="btn btn-primary btn-rounded">
      Subscribe
    </button>
  );
}`,
      },
      {
        label: "Using the component anywhere - change once, updates everywhere",
        code: `// Page 1
<SubscribeButton />

// Page 2
<SubscribeButton />

// Page 3
<SubscribeButton />`,
      },
      {
        label: "Building a whole page from components",
        code: `function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <FeatureList />
      <Footer />
    </div>
  );
}`,
      },
    ],
  },
  {
    id: "react-3",
    section: "react",
    title: "Why Use Components?",
    theoryBlocks: [
      "Now that you know what components are, here's exactly why they matter and why React uses them as the core building block.",
      "Reusability - write once, use everywhere: you write a component once and drop it into any page, any number of times. No copy-pasting. This saves time and keeps your code DRY (Don't Repeat Yourself).",
      "Easy to update - change once, updates everywhere: if something needs to change - the design, the text, the behavior - you change it in the component file. Every place that uses the component instantly reflects the change.",
      "Separation of concerns - each component does one job: a LoginForm handles login, a Navbar handles navigation, a ProductCard handles displaying a product. They don't interfere with each other, making code easier to understand and debug.",
      "Teamwork - different people work on different components: one developer works on the Header, another on the Footer. Because components are independent, they don't block each other.",
      "Easier to read and maintain: looking at <Navbar /> <HeroBanner /> <Footer /> is far easier to understand than scrolling through 500 lines of tangled HTML.",
      "Analogy - building a house: you don't build a house by carving every brick from scratch on-site. You use standardized bricks made once and placed wherever needed - windows, doors, wall sections. React components work the same way.",
    ],
    codeExamples: [],
  },
];

export function getLessonsBySection(section: "javascript" | "react"): Lesson[] {
  return lessonsData.filter((lesson) => lesson.section === section);
}

export function getLessonById(id: string): Lesson | undefined {
  return lessonsData.find((lesson) => lesson.id === id);
}

export function getNextLesson(currentId: string): Lesson | undefined {
  const currentLesson = getLessonById(currentId);
  if (!currentLesson) return undefined;

  const sectionLessons = getLessonsBySection(currentLesson.section);
  const currentIndex = sectionLessons.findIndex((l) => l.id === currentId);

  if (currentIndex < sectionLessons.length - 1) {
    return sectionLessons[currentIndex + 1];
  }
  return undefined;
}

export function getPreviousLesson(currentId: string): Lesson | undefined {
  const currentLesson = getLessonById(currentId);
  if (!currentLesson) return undefined;

  const sectionLessons = getLessonsBySection(currentLesson.section);
  const currentIndex = sectionLessons.findIndex((l) => l.id === currentId);

  if (currentIndex > 0) {
    return sectionLessons[currentIndex - 1];
  }
  return undefined;
}

export function getLessonProgress(
  lessonId: string,
): { current: number; total: number } | undefined {
  const lesson = getLessonById(lessonId);
  if (!lesson) return undefined;

  const sectionLessons = getLessonsBySection(lesson.section);
  const currentIndex = sectionLessons.findIndex((l) => l.id === lessonId);

  return {
    current: currentIndex + 1,
    total: sectionLessons.length,
  };
}
