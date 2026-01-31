export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-16 px-8 sm:px-16">
        <div className="flex w-full flex-col items-center gap-12 text-center sm:items-start sm:text-left">
          {/* Hero Section */}
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50 sm:text-6xl">
              Hi, I'm{" "}
              <span className="text-zinc-600 dark:text-zinc-400">Omar Arafa</span>
            </h1>
            <p className="text-xl font-medium text-zinc-600 dark:text-zinc-400 sm:text-2xl">
              Developer & Data Analyst
            </p>
          </div>

          {/* About Section */}
          <div className="flex flex-col gap-4 max-w-2xl">
            <p className="text-lg leading-7 text-zinc-600 dark:text-zinc-400">
              Welcome to my personal website. I'm passionate about creating
              meaningful experiences through technology and data analysis. Here you'll
              find information about my projects and work.
            </p>
            <p className="text-lg leading-7 text-zinc-600 dark:text-zinc-400">
              Feel free to explore my projects below and reach out if you'd like to connect!
            </p>
          </div>

          {/* Contact Button */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <a
              href="mailto:omararafa355@gmail.com"
              className="flex h-12 w-full items-center justify-center rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] sm:w-auto"
            >
              Get in Touch
            </a>
          </div>

          {/* Projects Section */}
          <div className="flex w-full flex-col gap-8 mt-8">
            <h2 className="text-3xl font-bold text-black dark:text-zinc-50 sm:text-4xl">
              Projects
            </h2>

            {/* Project 1: Blockchain Voting Website */}
            <div className="flex flex-col gap-4 rounded-lg border border-black/[.08] bg-white p-6 dark:border-white/[.145] dark:bg-[#1a1a1a] sm:p-8">
              <h3 className="text-2xl font-semibold text-black dark:text-zinc-50">
                Blockchain Voting Website
              </h3>
              <p className="text-lg leading-7 text-zinc-600 dark:text-zinc-400">
                A decentralized voting platform built on the Solana blockchain. This project
                utilizes SOL (Solana) cryptocurrency to facilitate secure and transparent voting
                transactions. The application runs on Solana devnet, allowing for safe testing and
                development of blockchain-based voting mechanisms.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="rounded-full bg-zinc-200 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                  Solana
                </span>
                <span className="rounded-full bg-zinc-200 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                  Blockchain
                </span>
                <span className="rounded-full bg-zinc-200 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                  Web3
                </span>
                <span className="rounded-full bg-zinc-200 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                  Devnet
                </span>
              </div>
            </div>

            {/* Project 2: Amazon Sentiment Analysis */}
            <div className="flex flex-col gap-4 rounded-lg border border-black/[.08] bg-white p-6 dark:border-white/[.145] dark:bg-[#1a1a1a] sm:p-8">
              <h3 className="text-2xl font-semibold text-black dark:text-zinc-50">
                Amazon Sentiment Analysis
              </h3>
              <p className="text-lg leading-7 text-zinc-600 dark:text-zinc-400">
                A comprehensive data analysis project that analyzes customer sentiment from Amazon
                product reviews. The project involves web scraping to collect Amazon reviews,
                followed by sentiment analysis to understand customer opinions. Machine learning
                models including Random Forest and Linear Regression are used to predict and analyze
                review sentiment, providing valuable insights into product feedback.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="rounded-full bg-zinc-200 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                  Web Scraping
                </span>
                <span className="rounded-full bg-zinc-200 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                  Sentiment Analysis
                </span>
                <span className="rounded-full bg-zinc-200 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                  Random Forest
                </span>
                <span className="rounded-full bg-zinc-200 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                  Linear Regression
                </span>
                <span className="rounded-full bg-zinc-200 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                  Data Analysis
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
