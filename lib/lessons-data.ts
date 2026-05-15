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
        code: 'console.log("Hello World";)',
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
    id: "js-6",
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
    id: "js-7",
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
        code: `<!-- Page 1 -->
<button class="btn btn-primary btn-rounded">Subscribe</button>

<!-- Page 2 -->
<button class="btn btn-primary btn-rounded">Subscribe</button>

<!-- Page 3 -->
<button class="btn btn-primary btn-rounded">Subscribe</button>
<!-- Change needed everywhere manually! -->`,
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
