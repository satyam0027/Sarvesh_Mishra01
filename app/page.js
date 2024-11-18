import Image from "next/image";
import Link from "next/link";
import { Youtube, Mic, Newspaper, BarChart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// ... rest of your component code

export default function Home() {
  const youtubeVideos = [
    {
      id: "video1",
      title: "कैंसर सर्जन का दावा कैंसर बीमारी नहीं है |",
      url: "https://youtu.be/9nYnZEuM3VY?si=LS58e9jewtpg_IEk",
    },
    {
      id: "video2",
      title: "Power of Water Manifestation @AmiettKumar ",
      url: "https://youtu.be/twtVUvY8vzE?si=LRGCZd6_0uerZCmv",
    },
    {
      id: "video3",
      title:
        "मजदूर से मालिक तक! Sanjay Kathuria Unique Formula to Become a Millionaire ",
      url: "https://youtu.be/Mvr3QuojbYk?si=uRXnLtlIwCbYkG2j",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Sarvesh Mishra
          </Link>
          <div className="space-x-4">
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
        </nav>
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
            {/* <Image
              src="https://www.picmonkey.com/blog/create-the-best-profile-pic"
              alt="Sarvesh Mishra"
              width={300}
              height={300}
            /> */}
            <img src="https://res.cloudinary.com/dtflxn49g/image/upload/v1731915678/kxboglgcvyrsfunbhsks.jpg" alt="" width={300} />

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
              <br />
              To connect with Sarvesh Mishra, follow him on social media or
              email him at sarveshshow@gmail.com. <br />
              For official queries:- <br />
              Red Hot Media House - info@redhotmediahouse.com <br />
              ES digital world - esdigitalworld@gmail.com <br />
              web:- <br />
              <Link
                href="http://www.redhotmediahouse.com/"
                className="hover:text-primary underline"
              >
                Red Hot Media House
              </Link>
              <br />
              <Link
                href="https://esdigitalworld.com/"
                className="hover:text-primary underline"
              >
                ES Digital World
              </Link>
            </p>
          </div>
        </section>

        <section id="videos" className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">Latest Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {youtubeVideos.map((video) => (
              <Card key={video.id}>
                <CardHeader>
                  <CardTitle>{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Link
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full">
                      <Youtube className="mr-2 h-4 w-4" /> Watch on YouTube
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="services" className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Mic className="h-8 w-8 mb-2" />
                <CardTitle>Podcast Production</CardTitle>
                <CardDescription>
                  Professional podcast recording and editing services
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Newspaper className="h-8 w-8 mb-2" />
                <CardTitle>Content Creation</CardTitle>
                <CardDescription>
                  Engaging written and video content for your brand
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <BarChart className="h-8 w-8 mb-2" />
                <CardTitle>Digital Marketing</CardTitle>
                <CardDescription>
                  Comprehensive digital marketing strategies and execution
                </CardDescription>
              </CardHeader>
            </Card>
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
  );
}