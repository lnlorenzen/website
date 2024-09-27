import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ChevronRight, Menu, X, Code, Cpu, Zap } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#features" className="transition-colors hover:text-blue-400 text-gray-300">Features</Link>
              <Link href="#how-it-works" className="transition-colors hover:text-blue-400 text-gray-300">How It Works</Link>
              <Link href="#pricing" className="transition-colors hover:text-blue-400 text-gray-300">Pricing</Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white shadow hover:bg-blue-700 h-9 px-4 py-2">
                Get Started
              </Button>
            </div>
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-gray-700 bg-gray-800 shadow-sm hover:bg-gray-700 h-9 w-9 md:hidden"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </header>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900/80 backdrop-blur-sm md:hidden">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-800">
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-700">
                <div className="space-y-2 py-6">
                  <Link
                    href="#features"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-800"
                    onClick={toggleMobileMenu}
                  >
                    Features
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-800"
                    onClick={toggleMobileMenu}
                  >
                    How It Works
                  </Link>
                  <Link
                    href="#pricing"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-800"
                    onClick={toggleMobileMenu}
                  >
                    Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
                  AgentFlow Integrations
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Personalisierte & Automatisierte AI Workflows für die Zukunft der Technologie
                </p>
              </div>
              <div className="space-x-4">
                <Button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white shadow hover:bg-blue-700 h-9 px-4 py-2">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-gray-700 bg-gray-800 text-gray-100 shadow-sm hover:bg-gray-700 h-9 px-4 py-2"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              Key Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <Code className="w-10 h-10 mb-2 text-blue-400" />
                  <CardTitle className="text-gray-100">AI-Powered Workflows</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400">
                  Create custom AI workflows tailored to your specific technological needs.
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <Cpu className="w-10 h-10 mb-2 text-purple-400" />
                  <CardTitle className="text-gray-100">Advanced Automation</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400">
                  Streamline your processes with cutting-edge automation powered by machine learning.
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <Zap className="w-10 h-10 mb-2 text-yellow-400" />
                  <CardTitle className="text-gray-100">Seamless Integration</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400">
                  Connect effortlessly with your existing tech stack and platforms.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              How It Works
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-blue-600 p-3 text-white">
                  <ChevronRight className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-100">1. Define Your Tech Stack</h3>
                <p className="text-gray-400">
                  Outline your current technology ecosystem and future goals.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-purple-600 p-3 text-white">
                  <ChevronRight className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-100">2. AI Configuration</h3>
                <p className="text-gray-400">
                  Our advanced AI analyzes and configures the optimal workflow for your tech needs.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-yellow-500 p-3 text-white">
                  <ChevronRight className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-100">3. Deploy & Optimize</h3>
                <p className="text-gray-400">
                  Launch your AI-powered workflow and continuously improve with machine learning insights.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              What Tech Leaders Say
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-gray-100">Revolutionized Our Stack</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400">
                  "AgentFlow has transformed our tech infrastructure, enabling us to innovate at unprecedented speeds."
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">- Sarah J., CTO</p>
                </CardFooter>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-gray-100">AI-Powered Efficiency</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400">
                  "The AI-driven automation has significantly reduced our development cycles and improved code quality."
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">- Mark T., Lead Developer</p>
                </CardFooter>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-gray-100">Seamless Integration</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400">
                  "AgentFlow's ability to integrate with our complex tech ecosystem sets it apart from other solutions."
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">- Lisa R., DevOps Manager</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              Pricing Plans
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-100">Tech Starter</CardTitle>
                  <CardDescription className="text-gray-400">For emerging tech teams</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-blue-400">€99/mo</p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Up to 5 AI workflows
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Basic API integrations
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Tech support via email
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-100">Tech Pro</CardTitle>
                  <CardDescription className="text-gray-400">For scaling tech operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-purple-400">€299/mo</p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Unlimited AI workflows
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Advanced API integrations
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Priority tech support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 text-white hover:bg-purple-700">Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-100">Tech Enterprise</CardTitle>
                  <CardDescription className="text-gray-400">For large-scale tech innovations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-yellow-400">Custom</p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Custom AI model development
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Dedicated AI architect
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      24/7 premium tech support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-yellow-600 text-white hover:bg-yellow-700">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
                  Ready to Revolutionize Your Tech Stack?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Embark on your journey towards AI-powered, automated workflows today.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white shadow hover:bg-blue-700 h-9 px-4 py-2">
                  Start Your Tech Revolution
                </Button>
                <Button
                  variant="outline"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-gray-700 bg-gray-800 text-gray-100 shadow-sm hover:bg-gray-700 h-9 px-4 py-2"
                >
                  Schedule a Tech Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-500">
          © 2024 AgentFlow Integrations. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-gray-300" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-gray-300" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}