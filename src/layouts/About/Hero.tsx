/* This example requires Tailwind CSS v3.0+ */

const Hero = () => {
  return (
    <div className="isolate bg-neon-gray font-ubuntu-mono">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing the launch of{' '}
                <span className="font-semibold text-neon-purple">
                  <span className="absolute inset-0" aria-hidden="true" />
                  UAE Codes 2023
                </span>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                ABOUT
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                UAE Codes is an innitiative that falls under the UAE Centennial
                Plan 2071.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://uaecabinet.ae/en/uae-centennial-plan-2071"
                  className="text-base font-semibold leading-7 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export { Hero };
