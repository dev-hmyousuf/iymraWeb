import { useState } from 'react';
// Import the default export for CodeMirror
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { EditorView } from '@codemirror/view';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind is included
import asideImg from '../../../assets/Blog/picture1.png'
const CodeEditor = () => {
  const [theme, setTheme] = useState(oneDark); // Default dark theme
  const [code, setCode] = useState(
    ` // Function to display a message after a delay
function showMessage() {
  console.log("This message appears after 2 seconds!");
}

// Using setTimeout to delay execution
setTimeout(showMessage, 2000); // Delay of 2000 milliseconds (2 seconds)

let countdown = 5;

const startCountdown = () => {
  const interval = setInterval(() => {
    if (countdown > 0) {
      console.log(countdown);
      countdown--;
    } else {
      console.log("Time's up!");
      clearInterval(interval);
    }
  }, 1000); // 1 second intervals
};

// Start the countdown
startCountdown();

`
);

  // Function to toggle themes
  const toggleTheme = () => {
    if (theme === oneDark) {
      setTheme(EditorView.theme({}));
    } else {
      setTheme(oneDark);
    }
  };

  return (
    <div className="container mx-auto py-10 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Code Editor</h1>
        <button
          onClick={toggleTheme}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Toggle Theme
        </button>
      </div>
      <CodeMirror
        value={code}
        height="600px"
        theme={theme}
        extensions={[javascript()]}
        onChange={(value) => setCode(value)}
        className='rounded-lg w-full' // Added w-full to make it full width
      />
    </div>
  );
};

const Blog1 = () => {
  return (
    <>
      {/* Main Content */}
      <main className="container mx-auto py-12 px-6 flex flex-col md:flex-row">
        {/* Article Content */}
        <div className="md:flex-1 mb-6">
          {/* Article Heading */}
          <h1 className="text-3xl font-bold mb-6">Understanding setTimeout: The Power of Delayed Execution in JavaScript"</h1>

          {/* Article Section */}
          <section className="bg-gray-100 p-6 rounded-lg mb-6">
            <p className="text-lg italic">
              "Introduction"
            </p>
            <p className="mt-4">
            Introduce the concept of asynchronous programming in JavaScript. Highlight the importance of the setTimeout function for creating delays in execution, which can be crucial for various scenarios, such as improving user experience, handling animations, and managing timing in applications.

            Why setTimeout is Important:
            Non-blocking Execution:

            Explain how setTimeout allows the code to run without blocking the main thread, enabling smooth user interactions.
            User Experience:

            Discuss how delaying certain actions can improve the experience, like giving users time to read a message before it disappears.
            Animation Timing:

            Describe how setTimeout can be used to control the timing of animations, creating more fluid transitions. been seasons where as soon as I start my day, I begin thinking about what I need...
            </p>
          </section>

          {/* Subheading */}
          <h2 className="text-2xl font-semibold mb-4">I can do nothing without Jesus. (John 15: 5)</h2>
          <p className="mb-4">
            We hear and believe all the time, "Add Jesus to your life, He will make it better."...
          </p>

          {/* Another Section */}
          <section className="bg-gray-100 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-4"> God's pruning is for my benefit. (John 15: 2)</h3>
            <p>
              Left to itself, a vine will produce a lot of dead wood and unproductive growth...
            </p>
          </section>

          {/* Code Editor Section */}
          <section className="bg-gray-100 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">Try Your Own Code</h3>
            {/* Insert Code Editor here */}
            <CodeEditor />
          </section>

          {/* Button */}
          <div className="text-center">
            <button className="bg-black text-white px-6 py-3 rounded-full">This Week's Sermon</button>
          </div>
        </div>

        {/* Aside Image Section */}
        <aside className="md:w-1/3 md:ml-6">
          <img
            src={asideImg}
            alt="Inspiration"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </aside>
      </main>

      {/* Comment Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-6">
          <h3 className="text-xl font-semibold mb-6">Leave a Comment</h3>
          <form>
            <textarea
              className="w-full h-32 p-4 border border-gray-300 rounded-lg mb-4"
              placeholder="Your Comment"
            ></textarea>
            <input
              className="w-full mb-4 p-4 border border-gray-300 rounded-lg"
              type="text"
              placeholder="Name (required)"
            />
            <input
              className="w-full mb-4 p-4 border border-gray-300 rounded-lg"
              type="email"
              placeholder="Email (required)"
            />
            <div className="flex items-center mb-6">
              <input type="checkbox" className="mr-2" />
              <span>I am not a robot</span>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full">Submit Comment</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Blog1;
