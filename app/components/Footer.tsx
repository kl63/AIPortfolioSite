import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Kevin Lin
            </Link>
            . The source code is available on{" "}
            <Link
              href="https://github.com/yourusername/portfolio"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
          <div className="flex items-center space-x-1">
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href="mailto:your.email@example.com"
              className="rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

