'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Youtube, Mic, Newspaper, BarChart, Menu, X, Moon, Sun } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import ProfileImage from '@/components/ProfileImage'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  const youtubeVideos = [
    {
      id: "video1",
      title: "कैंसर सर्जन का दावा कैंसर बीमारी नहीं है |",
      url: "https://youtu.be/9nYnZEuM3VY?si=LS58e9jewtpg_IEk",
      thumbnail: "https://img.youtube.com/vi/9nYnZEuM3VY/maxresdefault.jpg"
    },
    {
      id: "video2",
      title: "Power of Water Manifestation @AmiettKumar ",
      url: "https://youtu.be/twtVUvY8vzE?si=LRGCZd6_0uerZCmv",
      thumbnail: "https://img.youtube.com/vi/twtVUvY8vzE/maxresdefault.jpg"
    },
    {
      id: "video3",
      title: "मजदूर से मालिक तक! Sanjay Kathuria Unique Formula to Become a Millionaire ",
      url: "https://youtu.be/Mvr3QuojbYk?si=uRXnLtlIwCbYkG2j",
      thumbnail: "https://img.youtube.com/vi/Mvr3QuojbYk/maxresdefault.jpg"
    },
  ]

  const services = [
    {
      icon: Mic,
      title: "Podcast Production",
      description: "Professional podcast recording and editing services tailored to your unique voice and audience.",
    },
    {
      icon: Newspaper,
      title: "Content Creation",
      description: "Engaging written and video content crafted to captivate your brand's target audience and boost engagement.",
    },
    {
      icon: BarChart,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies and execution to elevate your online presence and drive growth.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Sarvesh Mishra
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <div className="hidden md:flex space-x-4">
              <Link href="#about" className="hover:text-primary">
                About
              </Link>
              <Link href="#videos" className="hover:text-primary">
                Videos
              </Link>
              <Link href="#services" className="hover:text-primary">
                Services
              </Link>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
              <Link href="#about" className="hover:text-primary" onClick={toggleMenu}>
                About
              </Link>
              <Link href="#videos" className="hover:text-primary" onClick={toggleMenu}>
                Videos
              </Link>
              <Link href="#services" className="hover:text-primary" onClick={toggleMenu}>
                Services
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-8 space-y-16">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Sarvesh Mishra</h1>
          <p className="text-xl">
            YouTuber | Podcaster | Journalist | Digital Marketing Expert
          </p>
          <Button asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </section>

        <section id="about" className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <ProfileImage />
            <p className="text-lg">
              Sarvesh Mishra is a Media Consultant and Self-Branding & Marketing
              Clarity Coach. In addition to this, he is an experienced
              journalist, author, and motivational speaker with over a decade
              and a half of experience in television journalism. Sarvesh has
              worked across 11 states, from Kashmir to the Himalayas, covering a
              wide range of stories, including investigative journalism and
              special features. He is also the author of Love with Benefit.
              Sarvesh is the founder of Red-Hot Media House and the co-founder
              of ES Digital World. He launched his current show with the belief
              that "A handshake can change the world."
            </p>
          </div>
        </section>

        <section id="videos" className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">Latest Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {youtubeVideos.map((video) => (
              <Card key={video.id} className="flex flex-col">
                <CardHeader className="p-0">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover rounded-t-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <CardTitle className="text-lg mb-2 line-clamp-2">{video.title}</CardTitle>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Link
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full">
                      <Youtube className="mr-2 h-4 w-4" /> Watch on YouTube
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="services" className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="text-center space-y-4">
          <h2 className="text-3xl font-semibold">Get in Touch</h2>
          <p>Interested in working together? Let&apos;s connect!</p>
          <Button asChild>
            <Link href="mailto:sarveshshow@gmail.com">Contact Me</Link>
          </Button>
        </section>
      </main>

      <footer className="bg-muted mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p>&copy; 2024 Sarvesh Mishra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}