import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-black"
      style={{
        "background-image":
          "linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/hero-bg.jpg)",
      }}
    >
      <Head>
        <title>Netflix App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {!session ? (
          <button
            onClick={() => signIn("google")}
            className="flex items-center bg-[#e50914] text-white text-sm px-4 py-2 rounded"
          >
            Sign In
          </button>
        ) : (
          <button
            onClick={() => signOut()}
            className="flex items-center bg-[#e50914] text-white text-sm px-4 py-2 rounded"
          >
            Sign Out
          </button>
        )}
      </div>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center sm: w-full">
        <h1 className="text-5xl font-medium text-white max-w-lg tracking-wide">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="text-2xl text-white mt-4 mb-8">
          Watch anywhere. Cancel anytime.
        </h2>
        <p className="text-white text-lg">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex mt-4 ">
          <input
            placeholder="Email address"
            className="bg-white p-4 min-w-[175px] sm: w-full"
          />
          <button
            onClick={() => signIn()}
            className="flex items-center bg-[#e50914] min-w-[100px] text-white text-l px-6"
          >
            Sign Up
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}
