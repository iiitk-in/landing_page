import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>IIITK Projects Hosting Platform</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="IIIT Kottayam's student-run host" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl">
          <div className="mb-10 md:mb-0 md:h-screen flex items-center justify-center flex-col">
            <h1 className="mt-20 md:mt-0 text-[6em] sm:text-[8em] md:text-[12em] lg:text-[20em] font-bold bg-gradient-to-r from-cyan-400 via-blue-800 to-green-600 text-transparent bg-clip-text bg-300% animate-gradient">
              IIITK.in
            </h1>
            <h1 className="text-4xl font-bold text-center mb-6">
              IIIT Kottayam&apos;s student-run host
            </h1>
            <p className="text-lg text-center mb-8">
              Unlock Your Potential. Share Your Creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-10 md:gap-20 p-3">
            <div className="bg-white rounded-xl p-8 backdrop-filter backdrop-blur-md bg-opacity-40">
              <h2 className="text-2xl font-bold mb-4">Elevate Your Projects</h2>
              <p>
                Gone are the days of generic URLs. Your projects get the
                spotlight they deserve with a sleek and personalized domain:{" "}
                <span className="font-bold bg-gradient-to-r from-cyan-400 to-green-600 text-transparent bg-clip-text bg-300%">
                  project-name.iiitk.in
                </span>
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 backdrop-filter backdrop-blur-md bg-opacity-40">
              <h2 className="text-2xl font-bold mb-4">
                Powerful Backend Hosting, Simplified
              </h2>
              <p>
                Focus on what truly matters - building your vision. We handle
                the backend hosting intricacies, ensuring your projects run
                seamlessly and securely.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 mb-6 backdrop-filter backdrop-blur-md bg-opacity-40">
              <h2 className="text-2xl font-bold mb-4">Ready?</h2>
              <p>
                Shoot an email at{" "}
                <a href="mailto:admin@iiitk.in" className="text-sky-300">
                  {" "}
                  admin@iiitk.in
                </a>{" "}
                to get started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
