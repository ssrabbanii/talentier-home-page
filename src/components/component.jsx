/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/MpSWjlRqbru
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Comfortaa } from 'next/font/google'

comfortaa({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className=" flex flex-col min-h-dvh">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-bold"
          prefetch={false}
        >
          <span>Talentier</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            For Developers
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            For Companies
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button className="bg-primary-foreground text-primary hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="mx-auto">
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Empowering Global Innovation with AI
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Talentier is a global AI-powered talent network and technology
                  services provider, connecting top talent with leading
                  companies worldwide.
                </p>
                <div className="space-x-4 mt-6">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Explore Services
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/talent-connected.png"
                  width="1270"
                  height="700"
                  alt="Global Connectivity"
                  className="mx-auto aspect-[9/5] overflow-hidden rounded-t-xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  About Talentier
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Connecting Top Global Talent with Leading Companies
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Talentier is a global AI-powered talent network and technology
                  services provider, empowering innovation and growth for
                  startups and enterprises worldwide. Our mission is to connect
                  the best global talent with leading companies through
                  cutting-edge AI technology.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">
                  AI-Powered Talent Matching
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our advanced AI algorithms analyze your talent needs and match
                  you with the best-fit candidates from our global network.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center text-primary hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Learn More
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Custom AI Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  Leverage our expertise in AI and engineering to build custom
                  solutions that drive innovation and growth for your business.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center text-primary hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Learn More
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Remote Work Support</h3>
                <p className="text-sm text-muted-foreground">
                  Our global talent network and remote work expertise help you
                  build high-performing distributed teams that thrive.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center text-primary hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Learn More
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Trusted by Leading Companies Worldwide
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Talentier has supported the growth of startups and enterprises
                across various industries, delivering exceptional results
                through our AI-powered talent solutions.
              </p>
            </div>
            <div className="divide-y rounded-lg border">
              <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-6">
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    src="/jpm.png"
                    width="140"
                    height="70"
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    src="/sc.png"
                    width="140"
                    height="70"
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    src="/placeholder.svg"
                    width="140"
                    height="70"
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    src="/placeholder.svg"
                    width="140"
                    height="70"
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    src="/placeholder.svg"
                    width="140"
                    height="70"
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    src="/placeholder.svg"
                    width="140"
                    height="70"
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View Case Studies
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Global Talent Network
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Talentier&apos;s AI-powered global talent network spans 150+
                countries, connecting you with the best developers, engineers,
                and professionals worldwide.
              </p>
            </div>
            <div className="w-full max-w-4xl">
              <img
                src="/global-network.png"
                width="800"
                height="500"
                alt="Global Talent Network"
                className="mx-auto aspect-[16/10] overflow-hidden rounded-xl object-cover"
              />
            </div>
            <div className="flex justify-center space-x-4">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Explore Talent
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Testimonials
              </div>
              <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                What Our Clients Say
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="font-bold">John Doe</div>
                    <div className="text-muted-foreground">CEO, Acme Inc.</div>
                    <div className="prose text-muted-foreground">
                      &quot;Talentier&apos;s AI-powered talent matching has been
                      a game-changer for our company. We&apos;ve been able to
                      build high-performing teams that drive innovation and
                      growth.&quot;
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="font-bold">Sarah Mayer</div>
                    <div className="text-muted-foreground">CTO, Startup X</div>
                    <div className="prose text-muted-foreground">
                      &quot;Talentier&apos;s remote work expertise and global
                      talent network have been invaluable in helping us build a
                      high-performing distributed team. Highly
                      recommended!&quot;
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-" />
          </div>
        </section>

        <section>
          <footer className="bg-gray-900 text-gray-400 py-8">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
                <div className="space-y-4">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold"
                    prefetch={false}
                  >
                    <MountainIcon className="w-6 h-6" />
                    <span>Talentier</span>
                  </Link>
                  <p className="text-muted-foreground">
                    Unlock your remote tech career with Talentier.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">For Developers</h4>
                  <ul className="space-y-1">
                    <li>
                      <Link
                        href="#"
                        className="hover:underline"
                        prefetch={false}
                      >
                        Find Jobs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:underline"
                        prefetch={false}
                      >
                        Create Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:underline"
                        prefetch={false}
                      >
                        Success Stories
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">For Companies</h4>
                  <ul className="space-y-1">
                    <li>
                      <Link
                        href="#"
                        className="hover:underline"
                        prefetch={false}
                      >
                        Post a Job
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:underline"
                        prefetch={false}
                      >
                        Hire Talent
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:underline"
                        prefetch={false}
                      >
                        Pricing
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">Resources</h4>
                  <ul className="space-y-1">
                    <li>
                      <Link
                        href="#"
                        className="hover:underline"
                        prefetch={false}
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:underline"
                        prefetch={false}
                      >
                        Help Center
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:underline"
                        prefetch={false}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 md:mt-12 text-center text-sm text-muted-foreground">
                &copy; 2024 Talentier. All rights reserved.
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
