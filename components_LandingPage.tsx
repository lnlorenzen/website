'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Twitter, Linkedin, Send, Rocket, Lightbulb, Users, Target, Zap } from "lucide-react"
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const InteractiveNetworkGraph = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      setDimensions({ width, height })
      setIsMobile(width < 768) // Consider screens smaller than 768px as mobile
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    const numNodes = isMobile ? 35 : 70 // Reduce number of nodes for mobile
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number; connections: Set<number> }[] = []

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 3 + 1,
        connections: new Set()
      })
    }

    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      nodes.forEach((node, i) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        nodes.slice(i + 1).forEach((otherNode, j) => {
          const dx = otherNode.x - node.x
          const dy = otherNode.y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const otherIndex = i + j + 1
            if (!node.connections.has(otherIndex)) {
              node.connections.add(otherIndex)
              otherNode.connections.add(i)
              ctx.strokeStyle = `rgba(10, 26, 232, ${isMobile ? 0.2 : 0.4})`
            } else {
              ctx.strokeStyle = `rgba(10, 26, 232, ${isMobile ? 0.1 : 0.2})`
            }
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.stroke()
          }
        })

        ctx.fillStyle = `rgba(10, 26, 232, ${isMobile ? 0.15 : 0.3})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [dimensions, isMobile])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />
}

const DynamicDots = () => {
  const [dots, setDots] = useState('. ')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isMobile) return // Don't animate dots on mobile

    const dotPatterns = ['. ', '.. ', '... ', '.. ', '. ', '.. ', '... ', '.. ', ' ']
    let currentIndex = 0

    const interval = setInterval(() => {
      setDots(dotPatterns[currentIndex])
      currentIndex = (currentIndex + 1) % dotPatterns.length
    }, 800)

    return () => clearInterval(interval)
  }, [isMobile])

  if (isMobile) return null // Don't render anything on mobile

  return <span className="inline-block w-16 text-left">{dots}</span>
}

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState<'startups' | 'investors'>('startups')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const startupCardContent = [
    {
      title: "Expansive Network and Strategic Advantage",
      description: "Leverage our extensive network and gain a strategic edge in the competitive Web3 landscape."
    },
    {
      title: "Unparalleled Connections",
      description: "Introductions and connections across web3 and web2, including launch and business partners like institutions, exchanges, market makers, tokenomics advisory, PR and marketing agencies, and more."
    },
    {
      title: "Smart Money",
      description: "Gain access and backing of influential figures to accelerate growth."
    },
    {
      title: "One-Stop Approach",
      description: "Achieve multiple objectives and streamline access to resources."
    },
    {
      title: "Comprehensive Support and Resources",
      description: "Access a wide range of support services and resources to help your startup thrive in the Web3 ecosystem."
    },
    {
      title: "Expert Guidance and Mentorship",
      description: "Free access to advisors, mentors, and industry experts."
    },
    {
      title: "Enhanced Capital Access",
      description: "Our investment club deals to provide additional capital, and gain entry to the Open Alpha network and KOL rounds."
    },
    {
      title: "Strategic Business Tools",
      description: "Access a playbook with essential business strategies, recommendations for vetted service providers, and partnership introductions."
    }
  ]

  const investorCardContent = [
    {
      title: "Exclusive Opportunities and Expert Guidance",
      description: "Access unique investment opportunities and benefit from our team's expert guidance in the Web3 space."
    },
    {
      title: "Groundbreaking Startups",
      description: "Invest in innovative startups within the web3 ecosystem."
    },
    {
      title: "Diverse Investment Options",
      description: "Tokens, equity, or hybrid deals."
    },
    {
      title: "Thought Leadership",
      description: "Collaborate with a network of experienced investors and industry leaders."
    },
    {
      title: "Streamlined Investment Process",
      description: "Enjoy a simplified and efficient process for investing in Web3 projects."
    },
    {
      title: "Quality Deal Flow and Due Diligence",
      description: "Access to a steady stream of vetted investment opportunities."
    },
    {
      title: "Investment Flexibility",
      description: "Opt into each deal at your discretion, with investment amounts starting as low as $1,000."
    },
    {
      title: "Deal fee sharing",
      description: "Members who bring a deal to the investment club are entitled to a portion of the deal fees."
    }
  ]

  const offerCardContent = [
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Accelerated Growth",
      description: "Boost your startup's growth with our comprehensive support and resources."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation Support",
      description: "Access cutting-edge tools and expertise to drive innovation in your projects."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Network",
      description: "Join a thriving community of entrepreneurs, investors, and industry experts."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Strategic Guidance",
      description: "Benefit from tailored advice to navigate the complex Web3 landscape."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Funding Opportunities",
      description: "Connect with potential investors and explore diverse funding options."
    }
  ]

  const portfolioLogos = [
    { name: "Zyfi", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zyfi-lvc5pPVKlxiMgYQl2X5okYWEi6YK3h.svg" },
    { name: "Lumio", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lumio-Jam0ZezPplIhFZ7nObv6BANlleD7Ha.svg" },
    { name: "Rune", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/runesterminal-zztkuUf4dDKRsSU8WfzICx5Lwyc6Iu.svg" },
    { name: "DeSui Labs", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desuilabs-WeUUqTChxn1T5jw4SWDECU20oQwSRi.png" },
    { name: "Vest", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vestlogo-PxfyDQ77iZHTxr2KjX4YxCebeh8aAK.svg" },
    { name: "Tenderize", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tenderize-3oR9UnJCbUILt98CY5wfsiaYmVp8fS.svg" },
    { name: "peaq", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/peaq-JTEDmOdohqFMFAfkjm56ctm96fTuFs.svg" },
    { name: "LaunchPoint", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/launchpoint-0ZbOe0ukY5rP3BddPOYHiCpnSFXxOX.png" },
    { name: "Bitflow", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bitflow-uSwSQpWd31boldtFKTX6JWl58CmiRe.svg" },
    { name: "SolanaID", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/solanaID-RJtb9CYBqK5WlQgUYVz2SkcIxy3OGj.png" },
    { name: "Shardeum", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shardeum-9MKYYoqa1vK7uALwn4diMFJEuZ0Uu6.svg" },
    { name: "Nayms", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nayms-cnzcG87ICPqQnzM4GgFIJ5WFksSlo7.svg" },
  ]

  const testimonials = [
    {
      text: "When we teamed up with this syndicate, we expected capital—but we got so much more. They've been a sounding board for our strategy, helping us navigate some tricky decisions, and they've connected us with people who've opened doors. It's great to have investors who are genuinely invested in our success.",
      author: "Startup Founder"
    },
    {
      text: "I've been part of a few syndicates before, but this one is different. The team does an incredible job of vetting deals and providing insights that are hard to find elsewhere. They've given me access to some truly unique Web3 opportunities, and the returns have been solid. But more than that, I appreciate how they keep me in the loop and make sure I understand where my money is going. It feels like a partnership, not just an investment.",
      author: "Experienced Investor"
    },
    {
      text: "Partnering with this syndicate has been one of the best decisions we've made. They're not just investors—they're mentors, advisors, and connectors. Whether it's refining our pitch, getting introductions to key partners, or just being there to bounce ideas off of, they've been there for us every step of the way. Their support has been crucial to our growth.",
      author: "Successful Entrepreneur"
    },
    {
      text: "Joining this syndicate was a leap for me as I was just getting my feet wet in Web3. I couldn't be happier with the experience. They bring in top-tier projects and really know how to pick winners. I've also learned a ton from the other investors in the group, which has been an unexpected bonus. It's not just about the money—it's about being part of something bigger and learning along the way.",
      author: "New Web3 Investor"
    }
  ]

  const handleSectionChange = (section: 'startups' | 'investors') => {
    if (section !== activeSection) {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveSection(section)
        setIsTransitioning(false)
      }, 300) // This should match the transition duration in CSS
    }
  }

  return (
    <div className={`min-h-screen bg-white text-gray-800 relative overflow-hidden ${poppins.variable} font-sans`}>
      <InteractiveNetworkGraph />
      
      {/* Header */}
      <header className="container mx-auto py-4 relative z-10">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-moXnnbq4k1kQ3ZvNAXknd1om2FCJpY.svg" 
              alt="Open Alpha Logo" 
              width={200} 
              height={50} 
              className="h-10 w-auto"
            />
          </Link>
          <div className="space-x-4">
            <Link href="#about" className="hover:text-[#0a1ae8]">
              About
            </Link>
            <Link href="#portfolio" className="hover:text-[#0a1ae8]">
              Portfolio
            </Link>
            <Link href="#team" className="hover:text-[#0a1ae8]">
              Team
            </Link>
            <Link href="#insights" className="hover:text-[#0a1ae8]">
              Insights
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-7xl mb-16 text-gray-900 leading-tight">
            <span className="text-[#0a1ae8] font-light block">
              Revolutionizing
            </span>
            <div className="flex items-center justify-center">
              <span className="text-gray-800 font-light">
                Investment in Web3
              </span>
              <DynamicDots />
            </div>
          </h1>
          <p className="text-xl mb-12 text-gray-700 max-w-3xl mx-auto">
            We make collaborative investments in the Web3 space seamless and accessible. Our Investment club connects innovators, developers, thought leaders, C-level executives, family offices and key players to unlock groundbreaking startup opportunities in tokens, equity, or hybrid deals.
          </p>
          <Button className="bg-[#0a1ae8] hover:bg-[#0a1ae8]/90 text-white text-lg px-8 py-3 rounded-full">
            Join Us!
          </Button>
        </div>
      </section>

      {/* Combined Startup and Investor Section */}
      <section className="py-20 relative z-10 bg-white bg-opacity-80">
        <div className="container mx-auto">
          <div className="flex justify-center mb-8 relative">
            <div className="relative">
              <Button
                onClick={() => handleSectionChange('startups')}
                className={`mr-4 transition-colors duration-300 ${activeSection === 'startups' ? 'bg-[#0a1ae8] text-white' : 'bg-white text-[#0a1ae8]'}`}
              >
                For Startups
              </Button>
              <Button
                onClick={() => handleSectionChange('investors')}
                className={`transition-colors duration-300 ${activeSection === 'investors' ? 'bg-[#0a1ae8] text-white' : 'bg-white text-[#0a1ae8]'}`}
              >
                For Investors
              </Button>
              <div 
                className="absolute bottom-0 h-1 bg-[#0a1ae8] transition-all duration-300 ease-in-out"
                style={{
                  left: activeSection === 'startups' ? '0' : '50%',
                  width: '50%',
                }}
              />
            </div>
          </div>
          <h2 className="text-7xl font-light text-left mb-12 text-[#0a1ae8]">
            for {activeSection}
          </h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {(activeSection === 'startups' ? startupCardContent : investorCardContent).map((card, index) => (
              <Card 
                key={index} 
                className={`${index % 4 === 0 ? 'bg-[#0a1ae8] text-white' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <CardContent className={`p-6 ${index % 4 === 0 ? 'flex items-center justify-center h-full' : ''}`}>
                  <h3 className={`font-semibold ${index % 4 === 0 ? 'text-2xl text-center' : 'text-xl mb-2'}`}>
                    {card.title}
                  </h3>
                  {index % 4 !== 0 && (
                    <p className="text-sm">
                      {card.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 relative z-10 bg-white bg-opacity-80">
        <div className="container mx-auto">
          <h2 className="text-7xl font-light text-left mb-12 text-[#0a1ae8]">what we offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {offerCardContent.map((card, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="bg-[#0a1ae8] p-6 flex justify-center items-center">
                  <div className="text-white">
                    {card.icon}
                  </div>
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-600">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Portfolio Section */}
      <section className="py-20 relative z-10 bg-[#282731]">
        <div className="container mx-auto">
          <h2 className="text-7xl font-light text-left mb-12 text-white">our portfolio</h2>
          <Card className="bg-[#282731] border-none shadow-none">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {portfolioLogos.map((logo, index) => (
                  <div key={index} className="flex items-center justify-center bg-[#282731] rounded-lg p-4">
                    <Image 
                      src={logo.src} 
                      alt={`${logo.name} logo`}
                      width={150}
                      height={75}
                      className="max-w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative z-10 bg-white bg-opacity-80">
        <div className="container mx-auto">
          <h2 className="text-7xl font-light text-left mb-12 text-[#0a1ae8]">testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <p className="text-gray-600 mb-4 italic text-sm">
                    "{testimonial.text}"
                  </p>
                  <p className="text-[#0a1ae8] font-semibold">
                    {testimonial.author}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#282731] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-8W9eaS7AXDlhdZjeUZJd9KtmzAS3HR.svg" 
                alt="Open Alpha Logo" 
                width={200} 
                height={53} 
                className="mb-6"
              />
              <h3 className="text-lg font-bold mb-4 invisible">Open Alpha</h3>
              <p className="mb-6">
                Open Alpha Ventures connects investors with exclusive Web3 startups, offering flexible investment opportunities and expert support.
              </p>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <h3 className="text-lg font-bold mb-4">join our community</h3>
              <p className="mb-6">
                Join our community of forward-thinking investors and innovators. Be part of a network
                that offers exclusive access to high-potential Web3 startups, expert guidance, and
                collaborative opportunities.
              </p>
              <Button variant="outline" className="text-gray-800 border-white hover:bg-white hover:text-[#0a1ae8] bg-white">
                join the community
              </Button>
            </div>
            <div className="w-full md:w-1/3 px-4">
              <h3 className="text-lg font-bold mb-4">sign up for our newsletter</h3>
              <p className="mb-6">
                Stay in the loop about our activities, investments and updates. no
                commitment, no bullshit.
              </p>
              <div className="flex mb-6">
                <Input 
                  type="email" 
                  placeholder="youremail@email.com" 
                  className="mr-2 bg-white text-gray-800"
                />
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#0a1ae8]">
                  subscribe
                </Button>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Connect with us</h4>
                <div className="flex space-x-4">
                  <Link href="https://linkedin.com/company/openalpha" className="text-white hover:text-[#0a1ae8]">
                    <Linkedin size={24} />
                  </Link>
                  <Link href="https://twitter.com/openalpha" className="text-white hover:text-[#0a1ae8]">
                    <Twitter size={24} />
                  </Link>
                  <Link href="https://t.me/openalpha" className="text-white hover:text-[#0a1ae8]">
                    <Send size={24} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-700">
            <ul className="flex flex-wrap justify-center space-x-4 mb-4">
              <li><Link href="/" className="hover:text-[#0a1ae8]">Homepage</Link></li>
              <li><Link href="/about" className="hover:text-[#0a1ae8]">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#0a1ae8]">Contact Us</Link></li>
              <li><Link href="/terms" className="hover:text-[#0a1ae8]">Terms and Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-[#0a1ae8]">Privacy Policy</Link></li>
            </ul>
            <p className="text-sm text-center">&copy; 2024 All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}